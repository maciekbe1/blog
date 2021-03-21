import React from "react";
import Image from "next/image";
import dateUtil from "../lib/dateUtil";
import { urlFor } from "../lib/api";

export default function PostHeader({
  date,
  image,
  title,
  subtitle,
  authorName,
  authorAvatar,
}) {
  return (
    <div className="pt-4">
      <h1 className="text-5xl xs:text-3xl">{title}</h1>
      <div className="flex items-center py-4">
        <Image
          src={urlFor(authorAvatar).height(50).url() || ""}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col ml-2">
          <p className="text-xs font-semibold text-indigo-700 hover:cursor-pointer hover:underline">
            {authorName}
          </p>
          <p className="text-xs text-gray-500">{dateUtil(new Date(date))}</p>
        </div>
      </div>
      <p className="pb-2">{subtitle}</p>
      {/* <img
        src={urlFor(image).fit("fill").height(600).crop("center").url() || ""}
        alt="header-image"
      />
      */}
      <div className="relative w-full lg:h-96 md:h-60 sm:h-48 xs:h-36">
        <Image
          src={urlFor(image).maxHeight(600).fit("max").url() || ""}
          className="object-cover"
          layout="fill"
        />
      </div>
    </div>
  );
}
