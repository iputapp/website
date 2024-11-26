export class FileOperationError extends Error {
  constructor(
    message: string,
    public readonly originalError: Error
  ) {
    super(message);
    this.name = "FileOperationError";
  }
}

export function handleFileError(
  error: unknown,
  operation: string
): FileOperationError {
  const message =
    error instanceof Error ? error.message : "Unknown error occurred";
  return new FileOperationError(
    `Failed to ${operation}: ${message}`,
    error instanceof Error ? error : new Error(String(error))
  );
}
