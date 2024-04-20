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
            <span className=" bg-t_blue px-2 rounded">
              React, TailwindCSS and Next.js
            </span>
            Also using
            <span className=" bg-t_pink px-2 rounded">
              Git, Docker, and Nginx.
            </span>
          </div>
        </div>
  
        {/* image */}
        <div className="home_image col-span-1">
          <Image
            src="/noText.svg"
            alt="Transformer"
            height={600}
            width={450}
            className={`absolute top-[-7.6rem] bottom-0 right-12 bg-cover transform_animation_down`}
          />
        </div>
      </div>
    );
  }