"use client";

import Link from "next/link";
import { cn } from "@/libs/utils";

export function ArticleCard({ className, items, ...props }) {
  return (
    <div
      className={cn(
        "pt-12 flex flex-col ml-6",
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const backgroundColorClass = `${['bg-t_blue', 'bg-t_yellow', 'bg-t_pink'][index % 3]}`;
        return (
          <div key={item.title} className={`p-2 m-2 w-auto h-24 rounded flex flex-col justify-between hover:mx-0 hover:shadow-xl transition-all duration-500 ${backgroundColorClass}`}>
            <Link className=" text-xl truncate" href={`/post/${item.title}`}>
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
