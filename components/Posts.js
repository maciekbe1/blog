import PostCard from "@/components/PostCard";
export default function Posts({ data = [] }) {
  return (
    <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
      {data.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </div>
  );
}
