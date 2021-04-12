import BlockContent from "@sanity/block-content-to-react";
import CodeHighlight from "@/components/CodeHighlight";
import { urlFor } from "lib/api";
import Link from "next/link";

const serializers = {
  types: {
    block: (props) => {
      const tag = props.node.style || "normal";
      if (tag == "h2") {
        return (
          <h2 className="my-4 text-4xl font-medium xs:text-2xl title-font">
            {props.children}
          </h2>
        );
      }
      if (tag == "h3") {
        return (
          <h3 className="my-4 text-2xl font-medium xs:text-xl title-font">
            {props.children}
          </h3>
        );
      }
      if (props.children == "") {
        return <br />;
      }
      return <p className="my-4 text-lg xs:text-base">{props.children}</p>;
    },
    code: ({ node: { language, code, filename } }) => (
      <div className="my-2 xs:px-0">
        <CodeHighlight language={language}>
          <div className="px-4">{code}</div>
        </CodeHighlight>
        <div className="text-sm italic code-filename">{filename}</div>
      </div>
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
