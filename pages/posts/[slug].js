import { getPostBySlug, getAllPosts } from "lib/api";
import PostHeader from "@/components/PostHeader";
import PostBody from "@/components/PostBody";
import { PostForm } from "@/components/PostForm";
import DisqusComment from "@/components/DisqusComment";
import PreviewAlert from "@/components/PreviewAlert";
import Head from "next/head";

export default function PostDetail({ post, preview }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta description={post.subtitle} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keyworld"
          content={post.categories
            .slice(", ")
            .map((item) => item.toLowerCase())}
        />
        <meta
          property="og:title"
          content={post.title}
          key="title"
          key="ogtitle"
        />
        <meta property="og:description" content={post.subtitle} key="ogdesc" />
        <meta
          property="og:image"
          content={post.mainImage.image}
          key="ogimage"
        />
        <meta
          property="og:url"
          content={"https://frontreview.pl/posts/" + post.slug}
          key="ogurl"
        />
      </Head>
      <div className="container px-8 mx-auto">
        {preview && <PreviewAlert />}
        <PostHeader
          date={post.publishedAt}
          image={post.mainImage.image}
          title={post.title}
          subtitle={post.subtitle}
        />
        <PostBody body={post.body} />

        <DisqusComment id={post._id} slug={post.slug} title={post.title} />
      </div>
    </>
  );
}
export async function getStaticProps({ params, preview = false, previewData }) {
  const post = await getPostBySlug(params.slug, preview);
  return { props: { post, preview }, revalidate: 1 };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts?.map((post) => ({ params: { slug: post.slug } })) || [];
  return {
    paths: [...paths],
    fallback: false,
  };
}
