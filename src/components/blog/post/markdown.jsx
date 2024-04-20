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
      className="prose max-w-screen-md p-10 pl-14 shadow-md"
      components={{
        p: Highlight,
        h1: ({ children }) => <h1 data-heading={children}>{children}</h1>,
        h2: ({ children }) => <h2 data-heading={children}>{children}</h2>,
        h3: ({ children }) => <h3 data-heading={children}>{children}</h3>,
        h4: ({ children }) => <h4 data-heading={children}>{children}</h4>,
        h5: ({ children }) => <h5 data-heading={children}>{children}</h5>,
        h6: ({ children }) => <h6 data-heading={children}>{children}</h6>,
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={dracula}
            />
          ) : (
            <code {...rest} className={className}>
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
