import Image from "next/image";
import Link from "next/link";

export default function SelfIntro() {
  return (
    <div className="first_screen relative h-full max-w-6xl mx-auto grid grid-rows-1 grid-cols-2 pt-16 mt-14 px-14">
      {/* left slogan */}
      <div className="slogan flex flex-col max-w-[456px] mt-6">
        <Link
          href={"https://arxiv.org/abs/1706.03762"}
          className="title title_animation text-4xl font-bold"
          title="This is from a famous paper of AI field -- 《Attention is All you need》"
        >
          ALL IS ALL YOU NEED
        </Link>
        <br />
        <div className="self_intro_container">
          Welcome to my world! My name is
          <div className="name_container overflow-hidden">
            <p className=" my_name text-4xl top-12 relative">Poy Song</p>
          </div>
          A Web Developer I'm a passionate web developer and tech blogger.
          Currently, my main focus is on frontend And I specialize in using
          <span className=" bg-t_blue px-2 ">
            React, TailwindCSS and Next.js
          </span>
          Also using
          <span className=" bg-t_pink px-2 ">Git, Docker, and Nginx.</span>
        </div>
      </div>

      {/* image */}
      <div className="home_image col-span-1">
        <Image
          src="/noText.svg"
          alt="Transformer"
          priority
          height={600}
          width={450}
          className={`absolute top-[-7.6rem] bottom-0 right bg-cover transform_animation_down`}
        />
      </div>
      <div className=" absolute bottom-20 left-1/3 animate-bounce flex flex-col items-center">
        Scroll
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
          <path d="M11 6h2v6h-2z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </div>
    </div>
  );
}
