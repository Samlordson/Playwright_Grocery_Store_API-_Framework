import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseApi } from "./BaseApi";

export class CartApi extends BaseApi {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async createCart(): Promise<APIResponse> {

        return this.post("/carts", {});

    }

}