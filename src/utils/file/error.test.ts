import { describe, expect, it } from "vitest";

import { FileOperationError, handleFileError } from "./error";

describe("FileOperationError", () => {
  it("should create FileOperationError with correct properties", () => {
    const originalError = new Error("Original error");
    const error = new FileOperationError("Test error", originalError);

    expect(error.name).toBe("FileOperationError");
    expect(error.message).toBe("Test error");
    expect(error.originalError).toBe(originalError);
  });
});

describe("handleFileError", () => {
  it("should handle Error instance", () => {
    const originalError = new Error("Test error");
    const error = handleFileError(originalError, "test operation");

    expect(error).toBeInstanceOf(FileOperationError);
    expect(error.message).toBe("Failed to test operation: Test error");
    expect(error.originalError).toBe(originalError);
  });

  it("should handle non-Error values", () => {
    const error = handleFileError("string error", "test operation");

    expect(error).toBeInstanceOf(FileOperationError);
    expect(error.message).toBe(
      "Failed to test operation: Unknown error occurred"
    );
    expect(error.originalError).toBeInstanceOf(Error);
    expect(error.originalError.message).toBe("string error");
  });

  it("should handle undefined error", () => {
    const error = handleFileError(undefined, "test operation");

    expect(error).toBeInstanceOf(FileOperationError);
    expect(error.message).toBe(
      "Failed to test operation: Unknown error occurred"
    );
    expect(error.originalError).toBeInstanceOf(Error);
    expect(error.originalError.message).toBe("undefined");
  });
});
