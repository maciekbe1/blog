import { getPostBySlug } from "lib/api";

export default async function enablePreview(req, res) {
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const post = await getPostBySlug(req.query.slug, true);

  if (!post) {
    return res.status(401).json({});
  }
  res.setPreviewData({});
  res.writeHead(307, { Location: `/posts/${post.slug}` });
  res.end();
}
