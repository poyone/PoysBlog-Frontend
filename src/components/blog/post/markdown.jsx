import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Highlight from "./markdownComponent/Highlight";

export default function MarkdownToHtml({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="lg:max-w-screen-md 2xl:max-w-screen-lg p-10 pl-14 shadow-md"
      components={{
        p: Highlight,
        h1: ({ children }) => <h1 className="text-4xl font-bold mb-6" data-heading={children}>{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-bold mb-6 mt-4" data-heading={children}>{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-bold mb-6 mt-2" data-heading={children}>{children}</h3>,
        h4: ({ children }) => <h4 className="text-xl font-bold mb-6 mt-2" data-heading={children}>{children}</h4>,
        h5: ({ children }) => <h5 className="text-lg font-bold mb-6" data-heading={children}>{children}</h5>,
        h6: ({ children }) => <h6 className="text-base font-bold mb-6" data-heading={children}>{children}</h6>,
        ul: ({ children }) => <ul className="list-none">{children}</ul>,
        li: ({ children }) => (
          <li className="before:content-['•'] before:text-lg before:mr-2">
            {children}
          </li>
        ),
        a: ({ children, href }) => (
          <a href={href} className="text-blue-500 underline">
            {children}
          </a>
        ),
        code(props) {
          const { children, className, node, inline, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={dracula}
            />
          ) : (
            <code {...rest} className={"bg-t_pink rounded px-2"}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
