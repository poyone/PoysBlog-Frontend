import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Highlight from "./Highlight";

export default function MarkdownToHtml({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="px-4 pt-2 mt-12 xl:mt-24 h-auto md:mx-12 xl:mx-20 xl:text-xl"
      components={{
        p: Highlight,
        h1: ({ children }) => <h1 className="text-4xl xl:text-5xl font-bold mb-6" data-heading={children}>{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl xl:text-4xl font-bold mb-6 mt-4" data-heading={children}>{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl xl:text-3xl font-bold mb-6 mt-2" data-heading={children}>{children}</h3>,
        h4: ({ children }) => <h4 className="text-xl xl:text-2xl font-bold mb-6 mt-2" data-heading={children}>{children}</h4>,
        h5: ({ children }) => <h5 className="text-lg xl:text-xl font-bold mb-6" data-heading={children}>{children}</h5>,
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
            <code {...rest} className={"bg-t_pink rounded px-2 whitespace-pre-wrap break-words"}>
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
