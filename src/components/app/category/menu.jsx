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
    <div className="fixed z-10 top-12 xl:top-24 flex flex-col w-auto h-auto md:pl-4 xl:pl-8">
      <div
        className={`w-6 pt-2 h-auto transition-transforms duration-500 ease-out ${
          isExpanded ? "w-screen category_glass" : ""
        }`}
      >
        <button onClick={handleClick}>
          <Menu className="relative top-[5px] left-[4px] xl:size-8" />
        </button>
        <div className="flex flex-col items-start ">
        {data.map((item, index) => {
            // Separate the first letter and the rest of the word
            const firstLetter = item.charAt(0);
            const restOfWord = item.slice(1);
            return (
              <button
                key={index}
                className="relative ml-2"
              >
                <span className="text-2xl xl:text-4xl font-normal">
                  {firstLetter}
                </span>
                {/* restOfWord hidden or visible based on menu state */}
                <span className={`${isExpanded ? "" : "hidden"} xl:text-xl`}>
                  {restOfWord}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
