"use client";

import Link from "next/link";
import { cn } from "@/libs/utils";

export function ArticleCard({ className, items, ...props }) {
  return (
    <div
      className={cn(
        "pt-12 xl:pt-24 flex flex-col ml-6",
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const backgroundColorClass = `${['bg-t_blue', 'bg-t_yellow', 'bg-t_pink'][index % 3]}`;
        return (
          <div key={item.title} className={`p-2 m-2 md:ml-8 xl:ml-16 w-auto h-24 xl:h-36 rounded flex flex-col justify-between hover:mx-0 hover:z-10 hover:shadow-xl transition-all duration-500 xl:duration-1000 ${backgroundColorClass}`}>
            <Link className=" text-xl xl:text-3xl truncate" href={`/post/${item.title}`}>
              {item.title}
            </Link>
            <div className="details">
              <p className="text-sm xl:text-xl text-gray-400 text-muted-foregroun">
                Category: {item.category} Tags: {item.tags.map((tag)=> `${tag}`) }
              </p>
              <p className="text-sm xl:text-xl text-gray-400 text-muted-foregroun">
                Created Date: {item.created_at} Modified Date:{item.modified_at}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
