import { PortableTextBlock } from "sanity";

interface Post {
    _id: string;
    slug: string;
    title: string;
    image: string;
    description: {
        children: {
            text: string;
        }[];
    }[];
    tag: string[];
    _createdAt: string;
    _updatedAt: string;
    content: PortableTextBlock[];
}

export default Post;