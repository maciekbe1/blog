import Link from "next/link";
import dateUtil from "lib/dateUtil";
import Image from "next/image";
import { urlFor } from "lib/api";

export default function PostCard({ post }) {
  return (
    <div className="relative overflow-hidden bg-white rounded shadow-xl">
      <div
        style={{
          backgroundImage: `url('${urlFor(post.mainImage.image)
            .height(300)
            .crop("center")
            .fit("clip")
            .url()}')`,
        }}
        className="w-full bg-center bg-cover lg:h-80 h-60"
      >
        <span
          id="blackOverlay"
          className="absolute w-full h-full bg-black opacity-60"
        ></span>
        <div className="absolute w-full h-full text-white">
          <div className="flex flex-col justify-between h-full px-6 py-4">
            <div className="flex items-center justify-between text-xs text-gray-200">
              <div>
                <div className="flex items-center">
                  <Image
                    src={
                      urlFor(post.author.image)
                        .height(40)
                        .crop("top")
                        .fit("crop")
                        .width(40)
                        .url() || ""
                    }
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p className="ml-2">{post.author.name}</p>
                </div>
              </div>
              <p className="text-right">
                {dateUtil(new Date(post.publishedAt))}
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <div className="text-xl font-bold">{post.title}</div>
              <div className="py-4"></div>
              {post.slug && (
                <Link href={`/posts/${post.slug}`}>
                  <div
                    className="flex items-center font-semibold cursor-pointer hover:underline"
                    style={{ width: "fit-content" }}
                  >
                    Czytaj więcej
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 ml-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
