import type { FileOperationError } from "./error";

export type { FileOperationError };

export type FileExtension = "md" | "txt";

export type FileOperationResult<T> = {
  success: boolean;
  data?: T;
  error?: FileOperationError;
};
