import Image from "next/image";
import dateUtil from "lib/dateUtil";
import { urlFor } from "lib/api";
import Head from "next/head";

export default function PostHeader({
  date,
  image,
  title,
  subtitle,
  authorName,
  authorAvatar,
  categories,
  slug,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta description={subtitle} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keyworld" content={categories.slice(", ")} />
        <meta property="og:title" content={title} key="title" key="ogtitle" />
        <meta property="og:description" content={subtitle} key="ogdesc" />
        <meta property="og:image" content={image} key="ogimage" />
        <meta
          property="og:url"
          content={"https://frontreview.pl/posts/" + slug}
          key="ogurl"
        />
      </Head>
      <div className="pt-4">
        <h1 className="text-5xl xs:text-3xl">{title}</h1>
        <div className="flex items-center py-4">
          <Image
            src={
              urlFor(authorAvatar)
                .height(50)
                .width(50)
                .crop("top")
                .fit("crop")
                .url() || ""
            }
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
        <div className="relative w-full lg:h-96 md:h-60 sm:h-48 xs:h-36">
          <Image
            src={urlFor(image).maxHeight(600).fit("max").url() || ""}
            className="object-cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
