import React from 'react';
import { AlertCircle, RefreshCw, X } from 'lucide-react';
import { AppError } from '../types/errors';
import { ErrorHandlers } from '../utils/errorHandlers';

interface ErrorMessageProps {
  error: AppError;
  onRetry?: () => void;
  onDismiss?: () => void;
  className?: string;
  variant?: 'inline' | 'toast' | 'banner';
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  onRetry,
  onDismiss,
  className = '',
  variant = 'inline'
}) => {
  const message = ErrorHandlers.getErrorMessage(error);
  const canRetry = ErrorHandlers.isRetryableError(error);

  const baseClasses = "flex items-start space-x-3 p-4 rounded-lg border";
  
  const variantClasses = {
    inline: "bg-red-50 border-red-200 text-red-800",
    toast: "bg-red-900 border-red-700 text-red-100 shadow-lg",
    banner: "bg-red-900/50 border-red-700/50 text-red-100"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
      
      <div className="flex-1 min-w-0">
        <p className="font-medium">Error</p>
        <p className="text-sm opacity-90">{message}</p>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-2">
            <summary className="text-xs cursor-pointer opacity-75">
              Debug Info
            </summary>
            <pre className="text-xs mt-1 opacity-75 overflow-auto">
              {JSON.stringify(error, null, 2)}
            </pre>
          </details>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        {canRetry && onRetry && (
          <button
            onClick={onRetry}
            className="p-1 hover:bg-black/10 rounded transition-colors"
            title="Retry"
          >
            <RefreshCw size={16} />
          </button>
        )}
        
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="p-1 hover:bg-black/10 rounded transition-colors"
            title="Dismiss"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};