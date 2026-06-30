export const productSchema = {

    type: "object",

    properties: {

        id: {
            type: "number"
        },

        category: {
            type: "string"
        },

        name: {
            type: "string"
        },

        inStock: {
            type: "boolean"
        }

    },

    required: [
        "id",
        "category",
        "name",
        "inStock"
    ]

};