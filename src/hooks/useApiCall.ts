import { useState, useCallback } from 'react';
import { AppError } from '../types/errors';
import { ErrorHandlers } from '../utils/errorHandlers';

interface UseApiCallOptions {
  retries?: number;
  retryDelay?: number;
  timeout?: number;
}

interface UseApiCallReturn<T> {
  data: T | null;
  loading: boolean;
  error: AppError | null;
  execute: (...args: any[]) => Promise<T | null>;
  retry: () => Promise<T | null>;
  reset: () => void;
}

export function useApiCall<T>(
  apiFunction: (...args: any[]) => Promise<T>,
  options: UseApiCallOptions = {}
): UseApiCallReturn<T> {
  const { retries = 3, retryDelay = 1000, timeout = 10000 } = options;
  
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);
  const [lastArgs, setLastArgs] = useState<any[]>([]);

  const executeWithRetry = useCallback(async (
    fn: () => Promise<T>,
    attempt: number = 1
  ): Promise<T | null> => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const result = await fn();
      clearTimeout(timeoutId);
      return result;
    } catch (err: any) {
      if (attempt < retries && ErrorHandlers.isRetryableError(err)) {
        await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
        return executeWithRetry(fn, attempt + 1);
      }
      throw err;
    }
  }, [retries, retryDelay, timeout]);

  const execute = useCallback(async (...args: any[]): Promise<T | null> => {
    setLoading(true);
    setError(null);
    setLastArgs(args);

    try {
      const result = await executeWithRetry(() => apiFunction(...args));
      setData(result);
      return result;
    } catch (err: any) {
      const appError = err instanceof Error 
        ? ErrorHandlers.handleFetchError(err, 'api-call')
        : err;
      setError(appError);
      return null;
    } finally {
      setLoading(false);
    }
  }, [apiFunction, executeWithRetry]);

  const retry = useCallback(() => {
    return execute(...lastArgs);
  }, [execute, lastArgs]);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, execute, retry, reset };
}