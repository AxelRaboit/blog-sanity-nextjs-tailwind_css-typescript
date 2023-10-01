import PostComp from "@/src/components/blog/post";

type Props = {
    params: { post: string };
};

export default async function Post({ params }: Props) {
    const slug = params.post;

    return (
        <PostComp slug={slug} />
    );
}
