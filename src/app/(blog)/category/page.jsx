import CategoryMenu from "@/components/app/category/menu";
import { ArticleCard } from "@/components/app/category/article_card";

export default async function Category() {
  const response = await fetch("http://127.0.0.1:2333/api/blog/categories", {
      cache: "no-store",
    });
    const data = await response.json();

  return (
    <>
      <CategoryMenu />
      <ArticleCard items={data.article_items} />
    </>
  );
}
