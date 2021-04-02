import { getPostBySlug, getAllPosts } from "lib/api";
import PostHeader from "@/components/PostHeader";
import PostBody from "@/components/PostBody";
import { PostForm } from "@/components/PostForm";
import PostComments from "@/components/PostComments";

export default function PostDetail({ post }) {
  return (
    <>
      <PostHeader
        date={post.publishedAt}
        image={post.mainImage.image}
        title={post.title}
        subtitle={post.subtitle}
        authorAvatar={post.author.image}
        authorName={post.author.name}
      />
      <PostBody body={post.body} />

      <div className="my-6">
        {post?.comments && <p>Liczba komentarzy: {post.comments.length}</p>}
        <hr />
      </div>

      <PostForm _id={post._id} />
      <PostComments comments={post?.comments} />
    </>
  );
}
export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return { props: { post } };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts?.map((post) => ({ params: { slug: post.slug } })) || [];
  return {
    paths: [...paths],
    fallback: false,
  };
}
