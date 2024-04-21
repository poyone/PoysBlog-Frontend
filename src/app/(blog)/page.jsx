import SelfIntro from "@/components/blog/self_intro";
import ArticleCategory from "@/components/blog/article_category";
import SwiperComponent from "@/components/blog/use_swiper";


export default async function Page() {
  const response = await fetch('http://127.0.0.1:2333/blog/')
  const data = await response.json(); 
  const content = data.content
  
  return (
    <SwiperComponent>
      <SelfIntro />
      <ArticleCategory data={content} />
    </SwiperComponent>
  );
}
