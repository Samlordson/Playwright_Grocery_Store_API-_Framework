export const productSchema = {
    type: "object",

    properties: {

        id: {
            type: "integer"
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
    ],

    additionalProperties: true
};