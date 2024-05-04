"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

export default function Header() {
  const data = [
    { name: "Home", link: "/" },
    { name: "Category", link: "/category" },
    { name: "About", link: "/about" },
  ];

  const currentPath = usePathname();

  return (
    <div className="header_bar fixed bg-white top-0 z-10 shadow w-full h-12 flex justify-between items-center px-4">
      <Link href={"/"} className="left_logo text-xl ">Poy.S</Link>
      <div className="basis-1/2 flex justify-end ">
        <label htmlFor="search_bar" className="size-full flex items-center">
          <Search className="size-5" />
          <input type="text" name="search_bar" id="search_bar" className="hidden" />
        </label>
        {data.map((item, index) => {
          const active = currentPath == item.link ? "bg-t_green" : "";
          return (
            <div key={index} className={`ml-2 scaled_animation ${active}`}>
              <Link href={item.link}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
