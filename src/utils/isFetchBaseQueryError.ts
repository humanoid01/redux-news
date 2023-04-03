interface QueryError {
  status: number;
  data: {
    code: string;
    message: string;
    status: string;
  };
}

export function isFetchBaseQueryError(error: unknown): error is QueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}
