import { DiscussionEmbed } from "disqus-react";
import { useRouter } from "next/router";
export default function PostComments({ id, slug, title }) {
  const router = useRouter();
  const disqusConfig = {
    url: `https://www.frontreview.pl${router.asPath}`,
    identifier: id,
    title: title,
  };
  return <DiscussionEmbed shortname={"frontreview"} config={disqusConfig} />;
}
