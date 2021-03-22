import client from "../../lib/client";

export default async function createComment(req, res) {
  const { name, comment, email, _id } = JSON.parse(req.body);
  return new Promise((resolve, reject) => {
    client
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
      })
      .then((response) => {
        res.statusCode = 200;
        res.end(JSON.stringify(response));
        resolve();
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        return resolve();
      });
  });
}
