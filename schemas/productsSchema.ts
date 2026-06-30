import { productSchema } from "./productSchema";

export const productsSchema = {

    type: "array",

    items: productSchema

};