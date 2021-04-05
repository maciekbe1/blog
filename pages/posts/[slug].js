import { getPostBySlug, getAllPosts } from "lib/api";
import PostHeader from "@/components/PostHeader";
import PostBody from "@/components/PostBody";
import { PostForm } from "@/components/PostForm";
import PostComments from "@/components/PostComments";
import PreviewAlert from "@/components/PreviewAlert";

export default function PostDetail({ post, preview }) {
  return (
    <>
      {preview && <PreviewAlert />}
      <PostHeader
        date={post.publishedAt}
        image={post.mainImage.image}
        title={post.title}
        subtitle={post.subtitle}
        authorAvatar={post.author.image}
        authorName={post.author.name}
        categories={post.categories}
        slug={post.slug}
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
export async function getStaticProps({ params, preview = false, previewData }) {
  const post = await getPostBySlug(params.slug, preview);
  return { props: { post, preview } };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts?.map((post) => ({ params: { slug: post.slug } })) || [];
  return {
    paths: [...paths],
    fallback: false,
  };
}
