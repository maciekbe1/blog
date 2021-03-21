import Head from "next/head";
import Posts from "../components/Posts";
import { getAllPosts } from "../lib/api";

export default function Home({ posts }) {
  return (
    <div className="bg-gray-800">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts posts={posts} />
    </div>
  );
}
export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
