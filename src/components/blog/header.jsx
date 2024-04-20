"use client";

import Link from "next/link";
import Search from "../ui/header_search";
import { useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export default function Header({ theme, handleThemechange }) {
  const nav_list = [
    { name: "Home", link: "/" },
    { name: "Category", link: "/category" },
    { name: "About", link: "/about" },
  ];
  const headerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        headerRef.current.classList.add("shadow");
      } else {
        headerRef.current.classList.remove("shadow");
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  });

  return (
    <header
      ref={headerRef}
      className="navbar w-full fixed flex bg-white text-sm z-10 transition-shadow duration-500 ease-in-out"
    >
      {/* left logo */}
      <div className="flex-1 text-start">
        <div className="logo-container p-1 mt-2 ml-4 rounded-md">
          <Link href={"/"} className=" text-2xl font-handWritefont ">
            Poe. S
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-end gap-2 text-gray-500 pr-4">
        {/* Search input */}
        <Search />

        {/* 增加一个pr-2的空白 */}
        <div className="pr-2"></div>

        {/* nav links */}
        {nav_list.map((item, index) => {
          return (
            <div
              key={index}
              className="h-10 pr-4 font-normal inline-flex items-center justify-center active:hover:scale-95 active:focus:scale-95 transition duration-200 ease-in-out cursor-pointer"
            >
              <Link href={item.link}>{item.name}</Link>
            </div>
          );
        })}
        {/* theme switcher */}
        {/* <label className="theme-switcher swap swap-flip text-xl hidden">
          <input
            type="checkbox"
            onClick={(theme) => {
              handleThemechange(theme);
            }}
          />
          <div className="swap-on">
            <Moon />
          </div>
          <div className="swap-off">
            <Sun />
          </div>
        </label> */}
      </div>
    </header>
  );
}
