import client from "../../lib/client";

export default async function createComment(req, res) {
  const { name, comment, email, _id } = JSON.parse(req.body);
  await client
    .config({
      token: process.env.SANITY_TOKEN,
    })
    .create({
      _type: "comment",
      name,
      comment,
      email,
      post: {
        _type: "reference",
        _ref: _id,
      },
    });
  return res.status(200);
}
