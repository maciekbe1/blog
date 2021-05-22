import dateUtil from "lib/dateUtil";
import { urlFor } from "lib/api";

export default function PostHeader({ date, image, title, subtitle }) {
  return (
    <div>
      <div className="pt-4">
        <p className="text-lg xs:text-base">{dateUtil(new Date(date))}</p>
        <h1 className="text-6xl xs:text-3xl">{title}</h1>
        <p className="py-4 text-xl xs:text-base">{subtitle}</p>
        <img
          className="object-cover w-full mb-4"
          src={urlFor(image).maxHeight(600).fit("max").url() || ""}
          alt="banner"
          style={{ maxHeight: "600px" }}
        />
      </div>
    </div>
  );
}
