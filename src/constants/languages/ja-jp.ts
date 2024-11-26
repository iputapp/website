import { CONTACT_TOOL, OCCUPATIONAL_STATUS } from "@/constants";
import { arrayToValueMap } from "@/utils";

export const OCCUPATIONAL_STATUS_JA = arrayToValueMap(
  [...OCCUPATIONAL_STATUS],
  (value) => {
    switch (value) {
      case "IPUT_TOKYO_STUDENT":
        return "IPUT-Tokyoの学生";
      case "COCOON_TOWER_STUDENT":
        return "コクーンタワーの学生";
      case "STUDENT":
        return "その他の学生";
      case "OTHER":
        return "その他（一般）";
    }
  }
);

export const CONTACT_TOOL_JA = arrayToValueMap([...CONTACT_TOOL], (value) => {
  switch (value) {
    case "EMAIL":
      return "メール";
    case "DISCORD":
      return "Discord";
    case "SLACK":
      return "Slack";
  }
});
