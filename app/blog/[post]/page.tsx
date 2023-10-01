import PostComp from "@/src/components/blog/post";
import Wrapper from "@/src/components/wrapper/wrapper";

type Props = {
    params: { post: string };
};

export default async function Post({ params }: Props) {
    const slug = params.post;

    return (
        <Wrapper>
            <PostComp slug={slug} />
        </Wrapper>
    );
}
