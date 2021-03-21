import PostCard from "./PostCard";

export default function Posts({ posts }) {
  return (
    <div className="">
      <h4 className="text-xl font-semibold">Posty</h4>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
        {posts.map((post, index) => {
          return <PostCard key={index} post={post} />;
        })}
      </div>
    </div>
  );
}
