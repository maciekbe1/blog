import { useState, useRef } from "react";
import dateUtil from "lib/dateUtil";
import Image from "next/image";
import { urlFor } from "lib/api";
import debounce from "lib/debounce";

import { useRouter } from "next/router";
export default function SearchBar() {
  const [posts, setPosts] = useState([]);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const router = useRouter();
  const onChange = debounce(async (data) => {
    if (data) {
      const res = await fetch("/api/getPostByName", {
        method: "POST",
        body: JSON.stringify({ search: data }),
      });
      const result = await res.json();
      setPosts(result);
    }
    setValue(data);
  }, 500);

  return (
    <div className="relative text-gray-600">
      <input
        className="h-10 pl-4 pr-10 text-sm bg-white border-2 border-gray-300 rounded md:w-80 xl:w-96 focus:outline-none"
        type="text"
        name="search"
        placeholder="Search"
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        autoComplete="off"
        ref={inputRef}
      />

      <div className="absolute top-0 right-0 mt-2 mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {focus && posts.length && value ? (
        <div className="absolute w-full overflow-y-auto bg-white border-2 border-gray-300 top-10 max-h-60">
          {posts.map((item, index) => {
            return (
              <div
                key={item._id}
                className="flex p-2 border-b-2 border-indigo-700 cursor-pointer hover:bg-gray-400 hover:text-white"
                onMouseDown={() => {
                  router.push(`/posts/${item.slug}`);
                  setValue(item.title);
                  inputRef.current.value = item.title;
                  setPosts([item]);
                  setFocus(false);
                }}
              >
                <img
                  className="object-cover w-10 h-10 xs:hidden"
                  src={
                    urlFor(item.mainImage.image)
                      .height(40)
                      .crop("top")
                      .fit("crop")
                      .width(40)
                      .url() || ""
                  }
                />
                <div className="w-full mx-2">
                  <div className="truncate">{item.title}</div>
                  <div className="text-sm">{dateUtil(item.publishedAt)}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
