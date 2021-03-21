export default function PostComments({ comments }) {
  if (comments.length) {
    return comments.map((comment, index) => (
      <Comment key={index} comment={comment} />
    ));
  }
}

function Comment({ comment }) {
  return <div>comment</div>;
}
