"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import PostsLoading from "./postsLoading";
import Link from "next/link";
import Post from "@/types/Post";
import PaginatedItems from "@/types/PaginatedItems";
import { getPosts, getPostsByQuery } from "@/sanity/utils/utils";
import CustomButton from "@/src/components/customButton/customButton";
import CropText from "@/src/utils/cropText";

function PaginatedItems({ itemsPerPage, posts }: PaginatedItems) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = posts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(posts.length / itemsPerPage);
    const [viewedPosts, setViewedPosts] = useState<string[]>([]);

    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage;
        setItemOffset(newOffset);
    };

    const ONE_WEEK = 604800000;
    const ONE_DAY = 86400000;
    const ONE_HOUR = 3600000;

    const handleClick = (postSlug: string) => {
        if (typeof window !== "undefined") {
            const viewedPosts = JSON.parse(
                localStorage.getItem("sanityBlog:viewedPosts") || "[]"
            );
            if (!viewedPosts.includes(postSlug)) {
                viewedPosts.push(postSlug);
                localStorage.setItem(
                    "sanityBlog:viewedPosts",
                    JSON.stringify(viewedPosts)
                );
            }
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const viewedPosts = JSON.parse(
                localStorage.getItem("sanityBlog:viewedPosts") || "[]"
            );
            setViewedPosts(viewedPosts);
        }
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
                {currentItems.map((post) => (
                    <div
                        key={post._id}
                        className="bg-zinc-900 rounded relative flex flex-col"
                    >
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
                            {!viewedPosts.includes(post.slug) &&
                            new Date(post._createdAt).getTime() >
                                new Date().getTime() - ONE_WEEK ? (
                                <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                    Nouveau
                                </span>
                            ) : (
                                <span className="inline-block bg-transparent px-3 py-1mr-2 mb-2"></span>
                            )}

                            <div className="font-bold text-xl mb-2">
                                {post.title}
                            </div>
                            <CropText
                                text={
                                    post.description[0]["children"][0]["text"]
                                }
                                limit={255}
                            />
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
                        <div className="mt-auto text-center p-4">
                            <Link
                                href={`/blog/${post.slug}`}
                                onClick={() => handleClick(post.slug)}
                            >
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
    const [itemPerPage, setItemPerPage] = useState(() => {
        let storedItemsPerPage;
        if (typeof window !== 'undefined') {
            storedItemsPerPage = localStorage.getItem("sanityBlog:itemsPerPage");
        }
        return storedItemsPerPage ? parseInt(storedItemsPerPage, 10) : 6;
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<Post[]>([]);

    const handleSearchQueryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchQuery(event.target.value);
    };

    const handleItemsPerPageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedItemsPerPage = parseInt(event.target.value, 10);

        localStorage.setItem(
            "sanityBlog:itemsPerPage",
            selectedItemsPerPage.toString()
        );

        setItemPerPage(selectedItemsPerPage);
    };

    const performSearch = async () => {
        try {
            setLoading(true);
            const searchData = await getPostsByQuery(searchQuery);
            setSearchResults(searchData);
            setLoading(false);
        } catch (error) {
            console.error("Error while fetching search results:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const data = await getPosts();
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

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10">
                <div className="mb-4 mx-4">
                    <input
                        type="text"
                        placeholder="Rechercher par titre, description, tag..."
                        className="w-full lg:w-96 rounded text-black"
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                    />
                    <CustomButton
                        title="Soumettre"
                        containerStyles="bg-green-400 text-white rounded mt-2 lg:mt-0 lg:ml-2  p-2 px-4 w-full lg:w-56"
                        handleClick={performSearch}
                    />
                </div>

                <div className="mb-4 mx-4 flex justify-end items-center">
                    <label htmlFor="itemsPerPage">Articles par page:</label>
                    <select
                        id="itemsPerPage"
                        value={itemPerPage}
                        onChange={handleItemsPerPageChange}
                        className="rounded p-2 ml-2 text-black"
                    >
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <PostsLoading itemPerPage={itemPerPage} />
            ) : (
                <PaginatedItems
                    itemsPerPage={itemPerPage}
                    posts={searchResults.length > 0 ? searchResults : posts}
                />
            )}
        </div>
    );
}
