"use client"

import { useState, useEffect } from 'react';

export default function TitleSidebar({ content }) {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const extractTitles = (content) => {
      const lines = content.split('\n');
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

  return (
    <div className="sticky border-l-2 mt-4 top-0 p-4 pt-6 h-screen overflow-y-auto">
      {/* <h2 className="text-xl font-bold mb-4">Table of Contents</h2> */}
      <ul>
        {titles.map((title, index) => (
          <li
            key={index}
            className={`ml-${(title.level - 1) * 4} cursor-pointer hover:text-blue-500 text-balance 
              ${title.level === 1 ? 'text-xl font-bold' : ''}
              ${title.level === 2 ? 'text-lg font-semibold' : ''}
              ${title.level === 3 ? 'text-base' : ''}`}
            onClick={() => {
              const headingElement = document.querySelector(`[data-heading="${title.title}"]`);
              if (headingElement) {
                headingElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {title.title}
          </li>
        ))}
      </ul>
    </div>
  );
};