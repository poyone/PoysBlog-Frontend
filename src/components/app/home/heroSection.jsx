import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-white">
      {/* self intro */}
      <div className="w-full flex flex-col p-4">
        <div className="overflow-hidden ">
          <Link
            href={"https://arxiv.org/abs/1706.03762"}
            className="arise_up_animation text-3xl font-medium "
            title="This is from a famous paper of AI field -- 《Attention is All you need》"
          >
            ALL IS ALL YOU NEED
          </Link>
        </div>

        <div>
          <p>Hi, Welcome to my site!</p>
          <div className="h-[36px] flex">
            <div className=" self-center">My name is </div>
            <div className="inline-block overflow-hidden">
              <div className="arise_up_animation text-3xl pl-1 ">Poy Song</div>
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
      <div className="flex w-full justify-center">
        <Image
          priority
          alt="transform image"
          src="transformer_vector.svg"
          width={400}
          height={500}
        />
      </div>
    </div>
  );
}
