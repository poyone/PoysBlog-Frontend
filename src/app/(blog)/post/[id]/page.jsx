import MarkdownToHtml from "@/components/app/post/markdown";
import TitleSidebar from "@/components/app/post/titlesiderbar";

export default async function Page({ params }) {
  const response = await fetch(`http://127.0.0.1:2333/api/blog/${params.id}`);
  const data = await response.json();

  return (
    <div className="relative mt-12 w-screen h-auto">
      <MarkdownToHtml content={data.content} />

      <TitleSidebar content={data.content} />
    </div>
  );
}
