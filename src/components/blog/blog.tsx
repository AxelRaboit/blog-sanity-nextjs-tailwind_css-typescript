"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import PostsLoading from "./postsLoading";
import Link from "next/link";
import Post from "@/types/Post";
import PaginatedItems from "@/types/PaginatedItems";
import { getPosts } from "@/sanity/utils/utils";
import CustomButton from "@/src/components/customButton/customButton";
import CropText from "@/src/utils/cropText";

function PaginatedItems({ itemsPerPage, posts }: PaginatedItems) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = posts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(posts.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
                {currentItems.map((post) => (
                    <div key={post._id} className="bg-zinc-900 rounded">
                        <div className="w-full mx-auto">
                            {post.image ? (
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={300}
                                    height={300}
                                    priority={true}
                                    className="object-cover w-full h-96 rounded-t"
                                />
                            ) : (
                                <Image
                                    src={`/assets/no-image.png`}
                                    alt={post.title}
                                    width={300}
                                    height={300}
                                    priority={true}
                                    className="object-cover w-full h-40 rounded-t"
                                />
                            )}
                        </div>

                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                {post.title}
                            </div>
                            <CropText text={post.description[0]["children"][0]["text"]} limit={255} />
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {post.tag.map((tag, i) => (
                                <span
                                    key={i}
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link href={`/blog/${post.slug}`}>
                                <CustomButton
                                    title="Lire la suite..."
                                    containerStyles="bg-green-400 text-white rounded p-2 px-4 w-full"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container-pagination">
                <ReactPaginate
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageCount={pageCount}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageClick}
                    containerClassName="pagination justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    activeClassName="active"
                    /* forcePage={currentPage}
                    hrefBuilder={(page, pageCount, selected) =>
                    page >= 1 && page <= pageCount ? `/page/${page}` : '#'
                    }
                    hrefAllControls */
                />
            </div>
        </>
    );
}

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [itemPerPage, setItemPerPage] = useState(6);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);

                const data = await getPosts();
                console.log(data);

                data.sort(function (a, b) {
                    return (
                        new Date(b._createdAt).getTime() -
                        new Date(a._createdAt).getTime()
                    );
                });

                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error while fetching data:", error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container flex flex-col mx-auto">
            <h1 className="text-4xl font-bold mb-10 mx-4 text-green-400">
                Blog
            </h1>
            {loading ? (
                <PostsLoading itemPerPage={itemPerPage} />
            ) : (
                <PaginatedItems itemsPerPage={itemPerPage} posts={posts} />
            )}
        </div>
    );
}
