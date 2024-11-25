import { NextResponse } from "next/server";

export type APIResponse<T> = {
  data: T;
  status: number;
};

export function createAPIResponse<T>(data: T): APIResponse<T> {
  return { data, status: 200 };
}

export function handleAPISuccess<T>(data: T) {
  return NextResponse.json(createAPIResponse(data));
}
