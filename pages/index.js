import { useState } from "react";
import Head from "next/head";
import Posts from "@/components/Posts";

import { useGetPostsPages } from "actions/pagination";
import { getPaginatedPosts } from "lib/api";
import SortMenu from "@/components/SortMenu";

export default function Home({ posts }) {
  const [sort, setSort] = useState({ asc: 0 });
  const { data, size, setSize, hitEnd } = useGetPostsPages({ sort });
  return (
    <div>
      <Head>
        <title>Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SortMenu
        sort={sort}
        onChange={(option, value) => setSort({ [option]: value })}
      />
      <Posts data={data ? data.flat() : posts} sort={sort} />
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setSize(size + 1)}
          disabled={hitEnd}
          className={`px-4 pt-2 pb-1 text-lg rounded ${
            hitEnd
              ? "text-gray-200 bg-gray-500 border-4 border-gray-500"
              : "text-white box-border bg-indigo-600 border-4 border-indigo-600 hover:text-gray-600 hover:bg-white text-lg"
          }`}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const posts = await getPaginatedPosts({ offset: 0, date: "desc" });
  return {
    props: {
      posts,
    },
  };
}
