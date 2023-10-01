import Blog from "@/src/components/blog/blog";
import Wrapper from "@/src/components/wrapper/wrapper";

export default function Home() {
    return (
        <Wrapper>
            <main className="max-w-[1920px] mx-auto my-10">
                <Blog />
            </main>
        </Wrapper>
    );
}
