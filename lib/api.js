import client from "./client";
import imageUrlBuilder from "@sanity/image-url";

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  'author': author->{name, 'image': image.asset->url},
  'mainImage': {'image': mainImage.asset->url},
  'categories': categories[]->title,
  publishedAt
`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllPosts() {
  const results = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {${blogFields}}`
  );
  return results;
}

export async function getPostByName(name) {
  const results = await client.fetch(`*[_type == "post" && title match ${name}] | order(publishedAt desc) {
    title,
    'mainImage': {'image': mainImage.asset->url},
    'slug': slug.current,
    publishedAt
  }`);
  return results;
}

export async function getPaginatedPosts(
  { offset = 0, date = "desc" } = { offset: 0, date: "desc" }
) {
  const results = await client.fetch(
    `*[_type == "post"] | order(publishedAt ${date}) {${blogFields}}[${offset}...${
      offset + 3
    }]`
  );
  return results;
}

export async function getPostBySlug(slug) {
  const results = await client.fetch(
    `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
      ...,
      ${blogFields},
      body[] {
        ...,
        markDefs[] {
          ...,
          _type == "internalLink" => {
            "slug": @.reference->slug
          }
        }
      },
      'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
        _id,
        name,
        email,
        comment,
        _createdAt
      }
    }[0]`,
    { slug }
  );
  return results;
}
