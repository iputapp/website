import { z } from "zod";

import { CONTACT_TOOL, OCCUPATIONAL_STATUS } from "@/constants";

const OccupationalStatus = z.enum(OCCUPATIONAL_STATUS);

const ContactTool = z.enum(CONTACT_TOOL);

export const NewcomerSchema = z
  .object({
    name: z.string().min(1, "名前は必須です"),
    occupationalStatus: OccupationalStatus,
    studentId: z.string().nullish(),
    contactTool: ContactTool,
    contactDetail: z.string().min(1, "メールアドレスまたはユーザ名が必要です"),
    csrfToken: z.string(), // 正規リクエスト検証のトークン
  })
  .refine(
    (data) => {
      const cocoonTowerStudent: OccupationalStatusType[] = [
        "IPUT_TOKYO_STUDENT",
        "COCOON_TOWER_STUDENT",
      ];
      // コクーンタワーの学生は学籍番号が必要
      if (
        cocoonTowerStudent.includes(data.occupationalStatus) &&
        !data.studentId
      ) {
        return false;
      }
      return true;
    },
    {
      message: "コクーンタワーの学生は学籍番号が必要です",
      path: ["studentId"],
    }
  )
  .superRefine((data, ctx) => {
    // 連絡ツールがメールの場合、メールアドレスの形式をチェック
    if (
      data.contactTool === "EMAIL" &&
      !z.string().email().safeParse(data.contactDetail).success
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "有効なメールアドレスを入力してください",
        path: ["contactDetail"],
      });
    }
  });

export type OccupationalStatusType = z.infer<typeof OccupationalStatus>;
export type ContactToolType = z.infer<typeof ContactTool>;
export type Newcomer = z.infer<typeof NewcomerSchema>;
