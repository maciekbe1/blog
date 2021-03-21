import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import CodeHighlight from "./CodeHighlight";
import { urlFor } from "../lib/api";
import Link from "next/link";

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => (
      <CodeHighlight language={language}>
        {code}
        <div className="text-sm italic code-filename">{filename}</div>
      </CodeHighlight>
    ),
    image: ({ node: { asset, alt, position = "center" } }) => {
      const margin = () => (position === "left" ? "mr-4" : "ml-4");
      return (
        <div
          className={
            position !== "center"
              ? `lg:float-${position} lg:${margin()} flex flex-wrap flex-col items-center`
              : "flex flex-col items-center"
          }
        >
          <img src={urlFor(asset).height(500).url() || ""} alt={alt} />
          <div className="text-sm italic text-center image-alt">{alt}</div>
        </div>
      );
    },
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark;
      const href = `/posts/${slug.current}`;
      return (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      );
    },
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener" className="text-blue-500">
          {children}
        </a>
      ) : (
        <a href={href} className="text-blue-500">
          {children}
        </a>
      );
    },
  },
};
export default function PostContent({ body }) {
  return <BlockContent serializers={serializers} blocks={body} />;
}
