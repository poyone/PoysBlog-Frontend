"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

export default function ArticleCategory() {
  const categories = [
    [
      "Frontend",
      "bg-t_blue",
      [
        "How does component communicate in React",
        "How does components rendering within useEffect mode",
      ],
    ],
    ["Backend", "bg-t_yellow", ["FastApi chapter 1", "FastApi chapter 2"]],
    ["AI", "bg-t_pink", ["Dive into Transformer", "Kaggle Tricks"]],
  ];
  const [currentCategory, setCategory] = useState("Frontend");
  const [styles, setStyles] = useState({
    AI: "z-10 bottom-4 left-4",
    Backend: "z-20 bottom-2 left-2",
    Frontend: "z-30",
  });

  const handleCategoryChange = (category) => {
    if (category !== currentCategory) {
      setCategory(category);
      setStyles((prevStyles) => ({
        ...prevStyles,
        [currentCategory]: `${prevStyles[category]} animate-flip`,
        [category]: "z-30",
      }));
    }
  };

  return (
    <div className="article-category max-w-[1200px]  h-full mx-auto border-b grid grid-rows-4 grid-cols-1 px-14">
      <div className="category-bar content-end pl-4 pb-2 row-span-1 col-span-full text-2xl">
        Category
      </div>
      <div className="categor_container row-span-3">
        <div className="category_container grid grid-cols-4 grid-rows-1 ">
          {/* menu */}
          <div className="menu col-start-1 col-end-2 grid grid-cols-1 grid-rows-2 justify-center items-center">
            <div className="h-full w-full row-start-1 row-end-2 flex flex-col place-content-start">
              {categories.map(([title, _], index) => {
                return (
                  <div
                    key={index + title}
                    className={`menu_button border h-10 pl-4 mt-4 mr-8 text-base-content rounded-btn inline-flex items-center justify-start font-semibold active:hover:scale-95 active:focus:scale-95 transition duration-200 ease-in-out cursor-pointer`}
                    onClick={() => handleCategoryChange(title)}
                  >
                    {title}
                  </div>
                );
              })}
            </div>
          </div>

          {/* categories details */}
          <div className="details relative col-span-3 m-8">
            {categories.map(([title, bg_color, articles], index) => {
              return (
                <div
                  key={index + title}
                  className={`detail_card absolute ${styles[title]} ${bg_color}  w-full h-full rounded-xl p-4 flex flex-col`}
                >
                  <p className=" text-2xl basis-1/6 pl-2">{title}</p>
                  <ul className="categore_container flex-grow rounded flex flex-col">
                    {articles.map((article, idx) => (
                      <Link
                        key={idx}
                        href={`/post/${article}`}
                        className="hover:shadow-xl hover:border rounded p-2 hover:m-2 transition-all duration-500"
                      >
                        <FontAwesomeIcon icon={faNewspaper} className="pr-2" />
                        {article}
                      </Link>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
