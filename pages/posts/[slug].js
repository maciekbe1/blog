import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostHeader from "../../components/PostHeader";
import PostContent from "../../components/PostContent";
import { PostForm } from "../../components/PostForm";
import PostComments from "../../components/PostComments";

export default function PostDetail({ post }) {
  return (
    <div className="overflow-auto lg:mx-8">
      <PostHeader
        date={post.publishedAt}
        image={post.mainImage.image}
        title={post.title}
        subtitle={post.subtitle}
        authorAvatar={post.author.image}
        authorName={post.author.name}
      />
      <PostContent body={post.body} />
      <PostForm _id={post._id} />
      <PostComments comments={post.comments} />
    </div>
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
