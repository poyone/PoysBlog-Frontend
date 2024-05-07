import Image from "next/image";
import Link from "next/link";

export default async function About() {
  return (
    <div className="z-50 absolute w-screen bg-white flex flex-col items-center">
      <Image
        src={
          "https://poysblog-1323001667.cos.ap-shanghai.myqcloud.com/eris/Eris32.webp"
        }
        priority
        alt="Eris32"
        width={300}
        height={100}
        className="mx-auto"
      />
      <p className=" text-lg text-center">
        I've made a new folder for it. Go ahead and check it out.
      </p>
      <Link
        className="mx-auto shadow rounded p-2 hover:ring-1 hover:ring-red-400"
        href={"/"}
      >
        Click Me!
      </Link>
    </div>
  );
}
