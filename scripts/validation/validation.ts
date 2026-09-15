export interface ValidationIssue {
  readonly severity: 'warning' | 'error';
  readonly message: string;
}
