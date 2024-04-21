import { ArticleCard } from "@/components/blog/category/article_card";
import { SidebarNav } from "@/components/ui/siderbar";

export default async function Page() {
  const response = await fetch("http://127.0.0.1:2333/blog/categories", {
    cache: "no-store",
  });
  const data = await response.json();

  let sidebarNavItems = [
    {
      title: "All",
      href: `/category`, // 链接到显示所有类别的页面
    },
    ...data.categories.map((category) => ({
      title: category.category,
      href: `/category/${category.category}`, // 假设每个类别的页面URL基于类别名称
    }))
  ];
  return (
    <div className="flex mt-8 px-4 md:min-h-[545px] rounded-lg border shadow-xl">
      <SidebarNav className="basis-1/5 mt-8" items={sidebarNavItems} />
      <ArticleCard items={data.article_items} />
    </div>
  );
}
