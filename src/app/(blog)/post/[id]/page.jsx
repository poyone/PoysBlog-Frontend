import MarkdownToHtml from "@/components/blog/post/markdown";
import TitleSidebar from "@/components/blog/post/titlesiderbar";

export default async function Page({ params }) {
  const response = await fetch(
    `http://127.0.0.1:2333/blog/${params.id}`
  );
  const data = await response.json();  

  return (
    <div className="artical_container grid grid-cols-5 gap-4 mt-4">
      <div className="col-span-4 flex justify-center items-center">
        <MarkdownToHtml content={data.content} />
      </div>
      
      <div className="col-span-1">
        <TitleSidebar content={data.content} />
      </div>
    </div>
  );
}
