import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { AppError, ErrorCodes } from '../types/errors';
import { errorLogger } from '../utils/errorLogger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: AppError) => void;
}

interface State {
  hasError: boolean;
  error: AppError | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    const appError: AppError = {
      code: ErrorCodes.UNKNOWN_ERROR,
      message: error.message,
      timestamp: new Date(),
      context: 'react-error-boundary',
      details: {
        stack: error.stack,
        name: error.name
      }
    };

    errorLogger.log(appError, { stack: error.stack });

    return {
      hasError: true,
      error: appError
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError && this.state.error) {
      this.props.onError(this.state.error);
    }

    // Log additional error info
    errorLogger.log({
      code: ErrorCodes.UNKNOWN_ERROR,
      message: 'React Error Boundary Caught Error',
      timestamp: new Date(),
      context: 'react-error-boundary',
      details: {
        error: error.message,
        errorInfo,
        stack: error.stack
      }
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="mx-auto text-red-400" size={48} />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We encountered an unexpected error. This has been logged and we'll look into it.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-gray-700 rounded-lg text-left">
                <p className="text-red-400 text-sm font-mono">
                  {this.state.error.message}
                </p>
                {this.state.error.details?.stack && (
                  <pre className="text-gray-400 text-xs mt-2 overflow-auto">
                    {this.state.error.details.stack}
                  </pre>
                )}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw size={16} className="mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors"
              >
                <Home size={16} className="mr-2" />
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}