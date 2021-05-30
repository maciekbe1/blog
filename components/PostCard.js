import Link from "next/link";
import dateUtil from "lib/dateUtil";
import Image from "next/image";
import { urlFor } from "lib/api";

export default function PostCard({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="relative overflow-hidden transition duration-300 ease-in-out transform bg-white rounded cursor-pointer delay-50 hover:scale-110">
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
              <div className="text-xs text-gray-200">
                <p className="mb-2 subpixel-antialiased">
                  {dateUtil(new Date(post.publishedAt))}
                </p>
                <p className="text-2xl font-bold">{post.title}</p>
              </div>
              <div className="flex items-center">
                <p className="mr-2">Tagi:</p>
                {post.categories.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 mr-2 text-xs text-white bg-indigo-800 rounded-lg"
                    >
                      #{tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
