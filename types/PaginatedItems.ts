import Post from "@/types/Post";

interface PaginatedItems {
    itemsPerPage: number;
    posts: Post[];
}

export default PaginatedItems;
