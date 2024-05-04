"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export default function CategoryMenu() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const data = ["Frontend", "Backend", "Cloud"];
  return (
    <div className="fixed z-10 top-12 flex flex-col w-auto h-auto ">
      <div
        className={`w-6 pt-2 h-auto overflow-hidden transition-all duration-300 ease-out ${
          isExpanded ? "w-screen category_glass" : ""
        }`}
      >
        <button onClick={handleClick}>
          <Menu className="absolute top-[5px] left-[4px]" />
        </button>
        <div className="flex flex-col items-start ">
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`relative first-letter:text-2xl first-letter:font-normal ml-3`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
