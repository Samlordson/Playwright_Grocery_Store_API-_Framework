export const cartSchema = {
    type: "object",

    properties: {

        created: {
            type: "boolean"
        },

        cartId: {
            type: "string"
        }

    },

    required: [
        "created",
        "cartId"
    ],

    additionalProperties: false
};