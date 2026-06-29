import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseApi } from "./BaseApi";

export class ProductApi extends BaseApi {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async getAllProducts(): Promise<APIResponse> {

        return this.get("/products");

    }

    async getProductById(id: number): Promise<APIResponse> {

        return this.get(`/products/${id}`);

    }

}