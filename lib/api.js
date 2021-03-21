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
    `*[_type == "post"]{${blogFields}}` //[0..4]
  );
  return results;
}

export async function getPostBySlug(slug) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {${blogFields},
      ...,
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
}
