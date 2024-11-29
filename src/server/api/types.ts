/**
 * APIレスポンス (成功)
 */
export type APISuccessResponse<T> = {
  type: "success";
  data: T;
  status: number;
};

/**
 * APIレスポンス (エラー)
 */
export type APIErrorResponse = {
  type: "error";
  error: {
    message: string;
    code?: string;
    details?: unknown;
  };
  status: number;
};
