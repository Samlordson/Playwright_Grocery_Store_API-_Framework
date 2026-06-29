import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseApi } from "./BaseApi";

export class ClientApi extends BaseApi {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async registerClient(
        clientName: string,
        clientEmail: string
    ): Promise<APIResponse> {

        return this.post(
            "/api-clients",
            {
                clientName,
                clientEmail
            }
        );

    }

}