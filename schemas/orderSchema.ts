export const orderSchema = {

    type: "object",

    properties: {

        id: {
            type: "string"
        },

        items: {

            type: "array",

            items: {

                type: "object",

                properties: {

                    productId: {
                        type: "number"
                    },

                    id: {
                        type: "number"
                    },

                    quantity: {
                        type: "number"
                    }

                },

                required: [
                    "productId",
                    "id",
                    "quantity"
                ]
            }

        },

        customerName: {
            type: "string"
        },

        created: {
            type: "string"
        },

        comment: {
            type: "string"
        }

    },

    required: [
        "id",
        "items",
        "customerName",
        "created",
        "comment"
    ]

};