"use client";
import React, { useState, useEffect } from "react";
import { getPost } from "@/sanity/utils/utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Post from "@/types/Post";
import PostLoading from "./postLoading";
import CustomButton from "@/src/components/customButton/customButton";

type Props = {
    slug: string;
};

export default function PostComp({ slug }: Props) {
    const [post, setPost] = useState<Post>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const post = await getPost(slug);
                setPost(post);
                setLoading(false);
            } catch (error) {
                console.error("Error while fetching data:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <PostLoading />
            ) : (
                <div className="container w-full mx-auto my-10">
                    <div className="mx-4">
                        <h1 className="text-4xl font-bold mb-10 text-green-400">
                            {post?.title}
                        </h1>
                        <div className="my-10">
                        <Link href={"/"}>
                            <CustomButton
                                title="Retour à la liste des articles"
                                containerStyles="bg-green-400 text-white rounded p-2 px-4 w-full md:w-64"
                            />
                        </Link>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            {post?.image ? (
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={300}
                                    height={300}
                                    priority={true}
                                    className="object-cover h-96 rounded w-full md:w-96"
                                />
                            ) : (
                                <Image
                                    src={`/assets/no-image.png`}
                                    alt="no image"
                                    width={300}
                                    height={300}
                                    priority={true}
                                    className="object-cover h-96 w-96 rounded"
                                />
                            )}
                            <div className="py-4 md:ml-10">
                                <p>
                                    {
                                        post?.description[0]["children"][0][
                                            "text"
                                        ]
                                    }
                                </p>
                            </div>
                        </div>
                        {post?.content && (
                            <div className="my-10">
                                <PortableText value={post.content} />
                            </div>
                        )}
                        <Link href={"/"}>
                            <CustomButton
                                title="Retour à la liste des articles"
                                containerStyles="bg-green-400 text-white rounded p-2 px-4 w-full md:w-64"
                            />
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
