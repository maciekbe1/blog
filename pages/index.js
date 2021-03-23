import { useState } from "react";

import Head from "next/head";
import Posts from "@/components/Posts";

import { useGetPostsPages } from "actions/pagination";
import { getPaginatedPosts } from "lib/api";

export default function Home({ posts }) {
  const { data, size, setSize, hitEnd } = useGetPostsPages();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Posts data={data ? data.flat() : [] || posts} />
      <button
        onClick={() => setSize(size + 1)}
        disabled={hitEnd}
        size="lg"
        variant="outline-secondary"
      >
        Load More
      </button>
    </div>
  );
}
export async function getStaticProps() {
  const posts = await getPaginatedPosts({ offset: 0 });
  return {
    props: {
      posts,
    },
  };
}
