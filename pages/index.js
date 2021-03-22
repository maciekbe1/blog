import Head from "next/head";
import Posts from "@/components/Posts";
import { getAllPosts } from "lib/api";
import { useGetPosts } from "actions";

export default function Home({ posts: initialData }) {
  const { data: posts, error } = useGetPosts(initialData);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts posts={posts} />
    </div>
  );
}
export async function getStaticProps() {
  const posts = await getAllPosts({ offset: 0 });
  return {
    props: {
      posts,
    },
  };
}
