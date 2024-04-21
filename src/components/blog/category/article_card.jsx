"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function ArticleCard({ className, items, ...props }) {
  return (
    <div
      className={cn(
        "flex md:min-h-[475px] m-4 rounded-lg size-full flex-col",
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const backgroundColorClass = `bg-t_${['blue', 'yellow', 'pink'][index % 3]}`;
        return (
          <div key={item.title} className={`${backgroundColorClass} border w-full h-24 m-2 p-2 rounded flex flex-col justify-between hover:m-6 hover:shadow-xl transition-all duration-500`}>
            <Link className=" text-xl" href={`/post/${item.title}`}>
              {item.title}
            </Link>
            <div className="details">
              <p className="text-sm text-gray-400 text-muted-foregroun">
                Category: {item.category} Tags: {item.tags.map((tag)=> `${tag}`) }
              </p>
              <p className="text-sm text-gray-400 text-muted-foregroun">
                Created Date: {item.created_at} Modified Date:{item.modified_at}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
