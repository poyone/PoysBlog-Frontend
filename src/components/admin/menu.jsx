"use client";

import { Menu } from "lucide-react";
import { SquarePower } from "lucide-react";
import { useState } from "react";

export default function AdminMenu() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogout = async () => {
    try {
      // Clear the client's login status and token cookie
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
  
      // Redirect to the login page
      router.push('/login');
    } catch (error) {
      throw new Error('退出登录失败:', error)
    }
  };

  const data = ["Dashboard", "Upload", "Records"];
  return (
    <div className="fixed top-2 z-10 flex flex-col w-auto h-auto ">
      <div
        className={`w-6 pt-2 h-auto transition-transforms duration-300 ease-out ${
          isExpanded ? "w-screen category_glass" : ""
        }`}
      >
        {/* Menu button */}
        <button onClick={handleClick}>
          <Menu className="absolute top-[5px] left-[4px]" />
        </button>

        {/* function category */}
        <div className="flex flex-col items-start ">
          {data.map((item, index) => {
            // Separate the first letter and the rest of the word
            const firstLetter = item.charAt(0);
            const restOfWord = item.slice(1);
            return (
              <button key={index} className="relative ml-2">
                <span className="text-2xl font-normal">{firstLetter}</span>
                {/* restOfWord hidden or visible based on menu state */}
                <span className={`${isExpanded ? "" : "hidden"}`}>
                  {restOfWord}
                </span>
              </button>
            );
          })}
        </div>

        {/* quit button */}
        <button onClick={handleLogout}>
          <SquarePower className="relative left-[4px] mt-2" />
        </button>
      </div>
    </div>
  );
}