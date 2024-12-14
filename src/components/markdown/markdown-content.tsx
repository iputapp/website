import { type MarkdownComponents, markdownProcessor } from "@/server";

interface MarkdownContentProps {
  content: string;
  components?: MarkdownComponents;
}

/**
 * Markdown を React コンポーネントに変換するコンポーネント
 * @param content - Markdown 文字列
 * @param components - HTML タグとコンポーネントのマッピング
 */
const MarkdownContent: React.FC<MarkdownContentProps> = ({
  content,
  components,
}) => {
  const processor = markdownProcessor(components);
  const { result } = processor.processSync(content);
  return result;
};

MarkdownContent.displayName = "MarkdownContent";

export default MarkdownContent;
