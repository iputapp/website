"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

import { CONTACT_TOOL_JA, OCCUPATIONAL_STATUS_JA } from "@/constants";
import { type Newcomer, NewcomerSchema } from "@/models";
import type { APIResponse } from "@/types";

import { sendApply } from "./client-actions";
import { setTokenToCookie } from "./server-actions";

/**
 * 申請フォームコンポーネント
 * @param token - 正規リクエスト検証のトークン
 */
export function Form({ token }: { token: string }) {
  useLayoutEffect(() => {
    // 正規リクエスト検証のトークンを Cookie に保存
    setTokenToCookie(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 申請送信処理のフック
   * isMutating: ローディング状態
   * trigger: 申請送信のトリガー
   */
  const { isMutating, trigger } = useSWRMutation(
    "/api/v1/notify/newcomer",
    sendApply,
    {
      onSuccess: (data: APIResponse<Newcomer>) => {
        /**
         * @todo 申請完了時のUIを実装する
         */
        if (data.type === "error") {
          alert(data.error.message);
          return;
        }
        alert(`入会申請が完了しました`);
      },
      onError: (error) => {
        /**
         * @todo エラー時のUIを実装する
         */
        alert("エラーが発生しました");
        console.error(error);
      },
    }
  );

  // 申請フォームのクライアントバリエーション
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Newcomer>({
    resolver: zodResolver(NewcomerSchema),
    mode: "all",
    defaultValues: {
      csrfToken: token, // 正規リクエスト検証のトークンを設定
      name: undefined,
      occupationalStatus: undefined,
      studentId: undefined,
      contactTool: undefined,
      contactDetail: undefined,
    },
  });

  // 申請フォームの送信処理
  const onSubmit = (data: Newcomer) => {
    trigger(data);
  };

  return (
    <>
      <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
        {/* 正規リクエスト検証のトークン */}
        <input type="hidden" readOnly {...register("csrfToken")} />
        {/* 申請フォーム */}
        <section className="grid gap-1">
          <label htmlFor="name">お名前</label>
          <input
            className="rounded-lg p-1"
            type="text"
            id="name"
            {...register("name")}
          />
          <small className="text-red-600">
            {errors.name && errors.name.message}
          </small>
        </section>
        <section className="grid gap-1">
          <label htmlFor="occupationalStatus">ご職業</label>
          <select
            className="rounded-lg p-1"
            id="occupationalStatus"
            {...register("occupationalStatus")}
          >
            {Object.entries(OCCUPATIONAL_STATUS_JA).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <small className="text-red-600">
            {errors.occupationalStatus && errors.occupationalStatus.message}
          </small>
        </section>
        <section className="grid gap-1">
          <label htmlFor="studentId">
            学籍番号（コクーンタワーの学生は必須です）
          </label>
          <input
            className="rounded-lg p-1"
            type="text"
            id="studentId"
            {...register("studentId")}
          />
          <small className="text-red-600">
            {errors.studentId && errors.studentId.message}
          </small>
        </section>
        <section className="flex items-center gap-3">
          <label htmlFor="contactTool">連絡ツール</label>
          <select
            className="rounded-lg p-1"
            id="contactTool"
            {...register("contactTool")}
          >
            {Object.entries(CONTACT_TOOL_JA).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <small className="text-red-600">
            {errors.contactTool && errors.contactTool.message}
          </small>
        </section>
        <section className="grid gap-1">
          <label htmlFor="contactDetail">メールアドレスやユーザー名など</label>
          <input
            className="rounded-lg p-1"
            type="text"
            id="contactDetail"
            {...register("contactDetail")}
          />
          <small className="text-red-600">
            {errors.contactDetail && errors.contactDetail.message}
          </small>
        </section>
        <section className="my-4 text-center">
          <button
            className="rounded-lg bg-blue-600 px-3 py-2 text-white"
            type="submit"
          >
            入会を申請する
          </button>
        </section>
      </form>
      {/* ローディングオーバーレイ */}
      {isMutating && (
        <div className="fixed z-50 grid h-dvh w-full place-content-center bg-black/50">
          <svg
            className="-ml-1 mr-3 h-6 w-6 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
    </>
  );
}
