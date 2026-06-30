export const createOrderSchema = {

    type: "object",

    properties: {

        created: {
            type: "boolean"
        },

        orderId: {
            type: "string"
        }

    },

    required: [
        "created",
        "orderId"
    ]

};