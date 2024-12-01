import type { FileOperationError } from "./error";

export type { FileOperationError };

export type FileExtension = "md" | "txt";

type FileOperationSuccess<T> = {
  success: true;
  data: T;
  error?: never;
};

type FileOperationFailure = {
  success: false;
  data?: never;
  error: FileOperationError;
};

export type FileOperationResult<T> =
  | FileOperationSuccess<T>
  | FileOperationFailure;
