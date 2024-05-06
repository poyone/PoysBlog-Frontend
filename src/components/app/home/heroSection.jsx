"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {

  const [imageWidth, setImageWidth] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setImageWidth(500);
      } else {
        setImageWidth(300);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="bg-white h-min-64 md:flex md:px-16">
      {/* self intro */}
      <div className="w-full h-min flex flex-col p-4 md:max-w-[535px] md:relative md:top-20 xl:max-w-[762px] xl:relative xl:top-36">
        <div className="">
          <Link
            href={"https://arxiv.org/abs/1706.03762"}
            className="arise_up_animation text-3xl  xl:text-5xl font-medium "
            title="This is from a famous paper of AI field -- 《Attention is All you need》"
          >
            ALL IS ALL YOU NEED
          </Link>
        </div>

        <div className="xl:text-xl ">
          <p>Hi, Welcome to my site!</p>
          <div className="h-[36px]  xl:h-[60px] flex">
            <div className="self-center">My name is </div>
            <div className="inline-block overflow-hidden">
              <div className="arise_up_animation text-3xl pl-1  xl:text-5xl">Poy Song</div>
            </div>
          </div>
          <div>
            A Web Developer I'm a passionate web developer and tech blogger.
            Currently, my main focus is on frontend And I specialize in using
            <span className=" bg-t_blue px-2 ">
              React, Next.js and TailwindCSS
            </span>
            Also using
            <span className=" bg-t_pink px-2 ">Git, Docker, and Nginx.</span>
          </div>
        </div>
      </div>

      {/* transfomer image */}
      <div className="flex w-full justify-center ">
        <Image
          priority
          alt="transform image"
          src="transformer_vector.svg"
          width={imageWidth}
          height={100}
        />
      </div>
    </div>
  );
}
