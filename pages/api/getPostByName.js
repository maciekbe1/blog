import client from "lib/client";

export default async function getPostByName(req, res) {
  const { search } = JSON.parse(req.body);
  const query = `*[_type == "post" && title match "${search}*"] | { title,
    'mainImage': {'image': mainImage.asset->url},
    'slug': slug.current,
    _id,
    publishedAt
  } | order(publishedAt desc)`;
  return new Promise((resolve, reject) => {
    client
      .fetch(query)
      .then((response) => {
        res.status(200).json(JSON.stringify(response));
        resolve();
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        return resolve();
      });
  });
}
