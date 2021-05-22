import { useState } from "react";
import Head from "next/head";
import Posts from "@/components/Posts";

import { useGetPostsPages } from "actions/pagination";
import { getPaginatedPosts } from "lib/api";
import SortMenu from "@/components/SortMenu";
import Banner from "@/components/Banner";
import PreviewAlert from "@/components/PreviewAlert";

export default function Home({ posts, preview }) {
  const [sort, setSort] = useState({ asc: 0 });
  const { data, size, setSize, hitEnd } = useGetPostsPages({ sort });

  return (
    <div className="container px-8 mx-auto">
      <Head>
        <title>Frontreview</title>
        <meta description="Blog powstał w celu dzielenia się wiedzą ze świata programowania Frontend." />
        <meta
          property="og:title"
          content="Frontreview - miejsce informacji o Frontendzie"
          key="title"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Blog powstał w celu dzielenia się wiedzą ze świata programowania Frontend."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://frontreview.pl/assets/frontreview.png"
          key="ogimage"
        />
        <meta property="og:url" content="https://frontreview.pl" key="ogurl" />
      </Head>
      {preview && <PreviewAlert />}
      <Banner />
      <SortMenu
        sort={sort}
        onChange={(option, value) => setSort({ [option]: value })}
      />
      <Posts data={data ? data.flat() : posts} sort={sort} />
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setSize(size + 1)}
          disabled={hitEnd}
          className={`font-bold py-2 px-4 rounded ${
            hitEnd
              ? "text-gray-200 bg-gray-500"
              : "bg-indigo-500 hover:bg-indigo-700 text-white focus:outline-none"
          }`}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
export async function getStaticProps({ preview = false }) {
  const posts = await getPaginatedPosts({ offset: 0, date: "desc" });
  return {
    props: {
      posts,
      preview,
    },
  };
}
