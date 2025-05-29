import { getTopic } from "@/lib/getTopic";
import { Metadata } from "next";

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
  const { title, contentHtml } = await getTopic(subcategory, topic);

  return (
    <div className="prose max-w-none px-4 py-6">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
