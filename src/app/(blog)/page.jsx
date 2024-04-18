import SelfIntro from "@/components/blog/self_intro";
import ArticleCategory from "@/components/blog/article_category";
import SwiperComponent from "@/components/blog/use_swiper";


export default async function Page() {

  return (
    <SwiperComponent>
      <SelfIntro />
      <ArticleCategory />
    </SwiperComponent>
  );
}
