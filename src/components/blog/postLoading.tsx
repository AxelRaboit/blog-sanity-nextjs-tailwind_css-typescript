function PostLoadingTemplate() {
    return (
        <>
            <div className="container w-full mx-auto my-10">
                <div className="mx-4">
                    <h1 className="bg-zinc-900 rounded h-10 w-80 mb-10"></h1>
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-zinc-900 h-96 w-full md:w-96 rounded"></div>
                        <div className="py-4 md:ml-10">
                            <div className="bg-zinc-900 h-5 w-full md:w-96 mb-2 rounded"></div>
                            <div className="bg-zinc-900 h-5 w-full md:w-96 mb-2 rounded"></div>
                            <div className="bg-zinc-900 h-5 w-full md:w-96 mb-2 rounded"></div>
                            <div className="bg-zinc-900 h-5 w-full md:w-96 mb-2 rounded"></div>
                            <div className="bg-zinc-900 h-5 w-full md:w-96 mb-2 rounded"></div>
                            <div className="bg-zinc-900 h-5 w-full md:w-96 mb-2 rounded"></div>
                            <div className="bg-zinc-900 h-5 w-full md:w-96 mb-2 rounded"></div>
                            <div className="bg-zinc-900 h-5 w-full md:w-96 mb-2 rounded"></div>
                            <div className="bg-zinc-900 h-5 w-full md:w-96 mb-2 rounded"></div>
                        </div>
                    </div>
                    <div className="my-10">
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>

                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                        <div className="bg-zinc-900 h-5 w-full mb-2 rounded"></div>
                    </div>
                    <div className="my-2">
                        <span className="inline-block bg-zinc-800 h-10 w-full md:w-52 rounded text-sm font-semibold text-black"></span>
                    </div>
                </div>
            </div>
        </>
    );
}

function PostLoading() {
    return <PostLoadingTemplate />;
}

export default PostLoading;
