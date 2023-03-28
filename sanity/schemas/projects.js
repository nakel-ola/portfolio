export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "category",
            title: "Category",
            type: "array",
            of: [{type: "string"}]
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "tech",
            title: "tech",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [
                        {
                            type: "skills"
                        }
                    ]
                }
            ]
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{type: "image"}]
        },
        {
            name: "link",
            title: "Link",
            type: "url"
        },
        {
            name: "github",
            title: "Github link",
            type: "url"
        },
    ]
}