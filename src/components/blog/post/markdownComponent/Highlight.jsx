import React from "react";

export default function Highlight({ children }) {
    // 注意这里的返回值children并不是直接返回一个字符串而是一个列表
  const renderChild = (child) => {
    if (typeof child === "string") {
      const parts = child.split(/==(.*?)==/g);

      return parts.map((part, index) =>
        index % 2 === 1 ? (
          <span
            key={index}
            className="bg-yellow-400 font-medium px-2 rounded-md bg-opacity-35"
          >
            {part}
          </span>
        ) : (
          part
        )
      );
    }

    return child;
  };

  return (
    <React.Fragment>{React.Children.map(children, renderChild)}</React.Fragment>
  );
}
