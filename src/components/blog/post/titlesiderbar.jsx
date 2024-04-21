"use client";

import { useState, useEffect } from "react";

export default function TitleSidebar({ content }) {
  const [titles, setTitles] = useState([]);
  const [activeTitle, setActiveTitle] = useState(null);
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
    <div className="sticky shadow mt-4 top-0 p-4 pt-6 h-screen overflow-y-auto">
      <ul>
        {titles.map((title, index) => (
          <li
            key={index}
            className={`ml-${title.level - 1} cursor-pointer hover:text-blue-500
            ${title.level === 1 ? "text-gray-800" : ""}
            ${title.level === 2 ? "text-gray-600 mt-2" : ""}
            ${title.level === 3 ? "text-gray-500" : ""}
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
            {title.level === 3 ? "> " : ""}
            {title.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
