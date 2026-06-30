import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseApi } from "./BaseApi";
import { TokenManager } from "../utils/TokenManager";
import { ClientManager } from "../utils/ClientManager";

export class ClientApi extends BaseApi {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async registerClient(
    clientName: string,
    clientEmail: string
): Promise<APIResponse> {

    const response = await this.post(
        "/api-clients",
        {
            clientName,
            clientEmail
        }
    );

    const body = await response.json();

    TokenManager.setToken(body.accessToken);
    ClientManager.setCustomerName(clientName);

    return response;

}
}