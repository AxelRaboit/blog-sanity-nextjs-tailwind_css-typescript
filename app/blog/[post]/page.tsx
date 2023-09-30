import { getPost } from "@/sanity/utils/utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import CustomButton from "@/src/components/customButton/customButton";

type Props = {
    params: { post: string };
};

export default async function Post({ params }: Props) {
    const slug = params.post;

    const post = await getPost(slug);

    console.log(post);

    return (
        <div className="container w-full mx-auto my-10">
            <div className="mx-4">
                <h1 className="text-4xl font-bold mb-10 text-green-400">
                    {post.title}
                </h1>
                <div className="flex">
                    {post.image ? (
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={300}
                            height={300}
                            priority={true}
                            className="object-cover h-96 w-96 rounded"
                        />
                    ) : (
                        <Image
                            src={`/assets/no-image.png`}
                            alt={post.title}
                            width={300}
                            height={300}
                            priority={true}
                            className="object-cover h-96 w-96 rounded"
                        />
                    )}
                    <div className="px-6 py-4">
                        <p>{post.description[0]["children"][0]["text"]}</p>
                    </div>
                </div>
                <div className="my-10">
                    <PortableText value={post.content} />
                </div>
                <Link href={"/"}>
                    <CustomButton
                        title="Retour à la liste des articles"
                        containerStyles="bg-green-400 text-white rounded p-2 px-4"
                    />
                </Link>
            </div>
        </div>
    );
}
