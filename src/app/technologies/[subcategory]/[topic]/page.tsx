import { getArticleFromCouch } from "@/lib/getArticleFromCouch";
import { Metadata } from "next";
import { marked } from "marked";

type Props = {
  params: {
    subcategory: string;
    topic: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {topic} = await params;
  return {
    title: decodeURIComponent(topic),
  };
}

export default async function TopicPage({ params }: Props) {
  const { subcategory, topic } = await params;
  const { title, content } = await getArticleFromCouch(subcategory, topic);
  const contentHtml = marked(content);

  return (
    <div className="prose max-w-none px-4 py-6">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
