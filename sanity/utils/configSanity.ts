import { createClient } from "next-sanity";

export const sanityClient = createClient({
    projectId: "bhrmsum1",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true,
});
