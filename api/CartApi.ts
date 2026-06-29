import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseApi } from "./BaseApi";
import { CartManager } from "../utils/CartManager";

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

}