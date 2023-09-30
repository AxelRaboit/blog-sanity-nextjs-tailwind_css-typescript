import Image from "next/image";
import Blog from "@/src/components/blog/blog";

export default function Home() {
    return (
        <main className="max-w-[1920px] mx-auto my-10">
            <Blog />
        </main>
    );
}
