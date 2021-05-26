import dateUtil from "lib/dateUtil";
import Image from "next/image";
import { urlFor } from "lib/api";
export default function PostComments({ comments }) {
  if (comments.length) {
    return (
      <ul className="mt-6">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </ul>
    );
  }
  return null;
}

function Comment({ comment }) {
  return (
    <li className="flex py-2 pb-1 border-b-2 odd:bg-white dark:odd:bg-gray-700">
      <div className="flex items-center justify-center mr-4">
        {comment.author ? (
          <img
            src={
              urlFor(comment.author.image)
                .height(40)
                .crop("top")
                .fit("crop")
                .width(40)
                .url() || ""
            }
            className="w-10 h-10 ml-1 border-2 border-blue-800 rounded-full"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-12 h-12 text-blue-800 dark:text-white"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <div>
        <div>
          <span className="font-semibold text-blue-800 dark:text-gray-50">
            {comment.author ? comment.author.name : comment.name}
          </span>{" "}
          <span className="text-sm">{dateUtil(comment._createdAt)}</span>
        </div>
        <div>{comment.comment}</div>
      </div>
    </li>
  );
}
