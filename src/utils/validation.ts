import { ValidationError, ErrorCodes } from '../types/errors';
import { ErrorHandlers } from './errorHandlers';

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  phone?: boolean;
  custom?: (value: any) => boolean | string;
}

export interface ValidationSchema {
  [field: string]: ValidationRule;
}

export class Validator {
  static validateField(
    field: string,
    value: any,
    rule: ValidationRule
  ): ValidationError | null {
    // Required validation
    if (rule.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      return ErrorHandlers.createValidationError(
        field,
        value,
        `${field} is required`
      );
    }

    // Skip other validations if value is empty and not required
    if (!value && !rule.required) {
      return null;
    }

    // String length validations
    if (typeof value === 'string') {
      if (rule.minLength && value.length < rule.minLength) {
        return ErrorHandlers.createValidationError(
          field,
          value,
          `${field} must be at least ${rule.minLength} characters`
        );
      }

      if (rule.maxLength && value.length > rule.maxLength) {
        return ErrorHandlers.createValidationError(
          field,
          value,
          `${field} must not exceed ${rule.maxLength} characters`
        );
      }
    }

    // Pattern validation
    if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
      return ErrorHandlers.createValidationError(
        field,
        value,
        `${field} format is invalid`
      );
    }

    // Email validation
    if (rule.email && typeof value === 'string') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return ErrorHandlers.createValidationError(
          field,
          value,
          'Please enter a valid email address'
        );
      }
    }

    // Phone validation
    if (rule.phone && typeof value === 'string') {
      const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phonePattern.test(value.replace(/[\s\-\(\)]/g, ''))) {
        return ErrorHandlers.createValidationError(
          field,
          value,
          'Please enter a valid phone number'
        );
      }
    }

    // Custom validation
    if (rule.custom) {
      const result = rule.custom(value);
      if (result !== true) {
        return ErrorHandlers.createValidationError(
          field,
          value,
          typeof result === 'string' ? result : `${field} is invalid`
        );
      }
    }

    return null;
  }

  static validateForm(
    data: Record<string, any>,
    schema: ValidationSchema
  ): ValidationError[] {
    const errors: ValidationError[] = [];

    for (const [field, rule] of Object.entries(schema)) {
      const error = this.validateField(field, data[field], rule);
      if (error) {
        errors.push(error);
      }
    }

    return errors;
  }

  static getFieldError(
    errors: ValidationError[],
    field: string
  ): ValidationError | undefined {
    return errors.find(error => error.field === field);
  }
}