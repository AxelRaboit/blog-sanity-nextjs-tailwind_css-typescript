import React from "react";

interface PostsLoadingProps {
    itemPerPage: number;
}

function PostsLoadingTemplate() {
    return (
        <div className="bg-zinc-900 rounded">
            <div className="rounded-t w-full bg-zinc-800 h-96"></div>
            <div className="px-6 py-4">
                <p className="mb-3 h-7 bg-zinc-800 rounded" />
                <p className="h-4 bg-zinc-800 rounded" />
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-zinc-800 h-8 w-24 rounded-full text-sm font-semibold text-black mr-2"></span>
                <span className="inline-block bg-zinc-800 h-8 w-24 rounded-full text-sm font-semibold text-black mr-2"></span>
                <span className="inline-block bg-zinc-800 h-8 w-24 rounded-full text-sm font-semibold text-black mr-2"></span>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-zinc-800 h-10 w-full p-2 px-4 rounded text-sm font-semibold text-black"></span>
            </div>
        </div>
    );
}

function PostsLoading({ itemPerPage }: PostsLoadingProps) {
    const loadingItems = Array(itemPerPage).fill(<PostsLoadingTemplate />);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
            {loadingItems.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}

export default PostsLoading;
