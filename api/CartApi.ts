import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseApi } from "./BaseApi";
import { CartManager } from "../utils/CartManager";
import { ItemManager } from "../utils/ItemManager";

export class CartApi extends BaseApi {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async createCart(): Promise<APIResponse> {

       const response =
        await this.post("/carts", {});

    const body =
        await response.json();

    CartManager.setCartId(body.cartId);

    return response;

    }
async getCart(): Promise<APIResponse> {

    const cartId = CartManager.getCartId();

    return this.get(`/carts/${cartId}`);

}
async addItem(
    productId: number,
    quantity: number
): Promise<APIResponse> {

    const cartId = CartManager.getCartId();
    

    const response = await this.post(
        `/carts/${cartId}/items`,
        {
            productId,
            quantity
        }
    );


     const body = await response.json();

    ItemManager.setItemId(body.itemId);

    return response;
}
async getCartItems(): Promise<APIResponse> {

    const cartId = CartManager.getCartId();

    return await this.get(`/carts/${cartId}/items`);
}
async updateQuantity(quantity: number): Promise<APIResponse> {

    const cartId = CartManager.getCartId();
    const itemId = ItemManager.getItemId();

    return await this.patch(
        `/carts/${cartId}/items/${itemId}`,
        {
            quantity
        }
    );
}
async replaceItem(
    productId: number,
    quantity: number
): Promise<APIResponse> {

    const cartId = CartManager.getCartId();
    const itemId = ItemManager.getItemId();

    return await this.put(
        `/carts/${cartId}/items/${itemId}`,
        {
            productId,
            quantity
        }
    );
}

}