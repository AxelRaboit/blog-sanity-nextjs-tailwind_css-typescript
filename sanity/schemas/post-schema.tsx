const post = {
    name: "post",
    type: "document",
    title: "Post",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "description",
            type: "array",
            title: "Description",
            of: [
                {
                    type: "block",
                },
            ],
        },
        {
            name: "tag",
            type: "array",
            title: "Tag",
            of: [
                {
                    type: "string",
                },
            ],
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
    ],
};

export default post;
