export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
  userId?: string;
  context?: string;
}

export interface NetworkError extends AppError {
  status?: number;
  url?: string;
  method?: string;
}

export interface ValidationError extends AppError {
  field: string;
  value: any;
}

export interface ApiError extends AppError {
  endpoint: string;
  requestId?: string;
}

export enum ErrorCodes {
  NETWORK_ERROR = 'NETWORK_ERROR',
  API_ERROR = 'API_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  OFFLINE_ERROR = 'OFFLINE_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  FORM_SUBMISSION_ERROR = 'FORM_SUBMISSION_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR'
}

export interface ErrorLogEntry {
  error: AppError;
  userAgent: string;
  url: string;
  stack?: string;
}