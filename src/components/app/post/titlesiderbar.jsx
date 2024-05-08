"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function TitleSidebar({ content }) {
  const [titles, setTitles] = useState([]);
  const [activeTitle, setActiveTitle] = useState(null);
  const [isExpand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!isExpand);
  };
  useEffect(() => {
    const extractTitles = (content) => {
      const lines = content.split("\n");
      const titleRegex = /^(#{2,})\s(.*)$/;

      const titles = lines.reduce((acc, line) => {
        const match = line.match(titleRegex);
        if (match) {
          const [, hashes, title] = match;
          acc.push({ level: hashes.length, title });
        }
        return acc;
      }, []);

      setTitles(titles);
    };

    extractTitles(content);
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = document.querySelectorAll("[data-heading]");
      let currentActiveTitle = null;

      headingElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentActiveTitle = element.dataset.heading;
        }
      });

      setActiveTitle(currentActiveTitle);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col relative">
      <button className="fixed scaled_animation top-16 right-4 z-10 md:top-12 xl:top-[95px]" onClick={handleClick}>
        <Menu className="size-7 md:size-8 xl:size-12 bg-white hover:text-blue-500 rounded" />
      </button>
      <ul
        className={`fixed xl:text-lg w-auto h-auto z-20 top-24 md:top-20 lg:top-36 right-0 max-h-[80vh] overflow-auto title_glass px-4  
      ${isExpand ? "" : "hidden"}`}
      >
        {titles.map((title, index) => (
          <li
            key={index}
            className={`ml-${title.level - 1} cursor-pointer hover:text-blue-500
            ${title.level === 1 ? "text-gray-600 mt-2" : ""}
            ${title.level === 2 ? "text-gray-600 mt-2 ml-2" : ""}
            ${title.level === 3 ? "text-gray-600 ml-4" : ""}
            ${title.level === 4 ? "text-gray-600 ml-6" : ""}
            ${activeTitle === title.title ? "!text-black !font-bold" : ""}`}
            onClick={() => {
              const headingElement = document.querySelector(
                `[data-heading="${title.title}"]`
              );
              if (headingElement) {
                headingElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {title.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
