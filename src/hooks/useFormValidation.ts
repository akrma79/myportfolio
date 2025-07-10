import { useState, useCallback } from 'react';
import { ValidationError } from '../types/errors';
import { Validator, ValidationSchema } from '../utils/validation';

interface UseFormValidationReturn {
  errors: ValidationError[];
  validateField: (field: string, value: any) => ValidationError | null;
  validateForm: (data: Record<string, any>) => boolean;
  clearErrors: () => void;
  clearFieldError: (field: string) => void;
  getFieldError: (field: string) => ValidationError | undefined;
  hasErrors: boolean;
}

export function useFormValidation(
  schema: ValidationSchema
): UseFormValidationReturn {
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const validateField = useCallback((field: string, value: any): ValidationError | null => {
    const rule = schema[field];
    if (!rule) return null;

    const error = Validator.validateField(field, value, rule);
    
    setErrors(prev => {
      const filtered = prev.filter(e => e.field !== field);
      return error ? [...filtered, error] : filtered;
    });

    return error;
  }, [schema]);

  const validateForm = useCallback((data: Record<string, any>): boolean => {
    const formErrors = Validator.validateForm(data, schema);
    setErrors(formErrors);
    return formErrors.length === 0;
  }, [schema]);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const clearFieldError = useCallback((field: string) => {
    setErrors(prev => prev.filter(e => e.field !== field));
  }, []);

  const getFieldError = useCallback((field: string): ValidationError | undefined => {
    return Validator.getFieldError(errors, field);
  }, [errors]);

  return {
    errors,
    validateField,
    validateForm,
    clearErrors,
    clearFieldError,
    getFieldError,
    hasErrors: errors.length > 0
  };
}