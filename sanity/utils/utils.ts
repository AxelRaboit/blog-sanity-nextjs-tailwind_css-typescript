import Post from "@/types/Post";
import { groq } from "next-sanity";
import { sanityClient } from "./configSanity";

export async function getPosts(): Promise<Post[]> {
    const client = sanityClient;
    return client.fetch(groq`*[_type == "post"]{
        _id,
        "slug": slug.current,
        title,
        "image": image.asset->url,
        description,
        tag,
        _createdAt,
        _updatedAt,
        content
      }`);
}

export async function getPost(slug: string): Promise<Post> {
    const client = sanityClient;
    return client.fetch(
        groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      "slug": slug.current,
      title,
      "image": image.asset->url,
      description,
      tag,
      _createdAt,
      _updatedAt,
      content
    }`,
        { slug }
    );
}

export async function getPostsByQuery(query: string): Promise<Post[]> {
    const client = sanityClient;
    return client.fetch(
        groq`*[_type == "post" && (title match $query || description match $query || tag[] match $query)]{
          _id,
          "slug": slug.current,
          title,
          "image": image.asset->url,
          description,
          tag,
          _createdAt,
          _updatedAt,
          content
        }`,
        { query }
    );
}
