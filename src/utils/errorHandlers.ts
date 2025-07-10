import { AppError, NetworkError, ValidationError, ApiError, ErrorCodes } from '../types/errors';
import { errorLogger } from './errorLogger';

export class ErrorHandlers {
  static createNetworkError(
    message: string,
    status?: number,
    url?: string,
    method?: string
  ): NetworkError {
    const error: NetworkError = {
      code: ErrorCodes.NETWORK_ERROR,
      message,
      status,
      url,
      method,
      timestamp: new Date(),
      context: 'network'
    };
    
    errorLogger.log(error);
    return error;
  }

  static createValidationError(
    field: string,
    value: any,
    message: string
  ): ValidationError {
    const error: ValidationError = {
      code: ErrorCodes.VALIDATION_ERROR,
      message,
      field,
      value,
      timestamp: new Date(),
      context: 'validation'
    };
    
    errorLogger.log(error);
    return error;
  }

  static createApiError(
    endpoint: string,
    message: string,
    requestId?: string
  ): ApiError {
    const error: ApiError = {
      code: ErrorCodes.API_ERROR,
      message,
      endpoint,
      requestId,
      timestamp: new Date(),
      context: 'api'
    };
    
    errorLogger.log(error);
    return error;
  }

  static handleFetchError(error: any, url: string, method: string = 'GET'): NetworkError {
    if (!navigator.onLine) {
      return this.createNetworkError(
        'You appear to be offline. Please check your internet connection.',
        0,
        url,
        method
      );
    }

    if (error.name === 'AbortError') {
      return this.createNetworkError(
        'Request was cancelled',
        0,
        url,
        method
      );
    }

    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      return this.createNetworkError(
        'Network error occurred. Please try again.',
        0,
        url,
        method
      );
    }

    return this.createNetworkError(
      error.message || 'An unexpected network error occurred',
      error.status,
      url,
      method
    );
  }

  static getErrorMessage(error: AppError): string {
    switch (error.code) {
      case ErrorCodes.NETWORK_ERROR:
        return error.message || 'Network connection failed. Please check your internet and try again.';
      
      case ErrorCodes.API_ERROR:
        return error.message || 'Server error occurred. Please try again later.';
      
      case ErrorCodes.VALIDATION_ERROR:
        return error.message || 'Please check your input and try again.';
      
      case ErrorCodes.OFFLINE_ERROR:
        return 'You are currently offline. Some features may not be available.';
      
      case ErrorCodes.TIMEOUT_ERROR:
        return 'Request timed out. Please try again.';
      
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }

  static isRetryableError(error: AppError): boolean {
    return [
      ErrorCodes.NETWORK_ERROR,
      ErrorCodes.TIMEOUT_ERROR,
      ErrorCodes.API_ERROR
    ].includes(error.code as ErrorCodes);
  }
}