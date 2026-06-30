import { APIRequestContext, APIResponse } from "@playwright/test";
import { Logger } from "../utils/Logger";

export class BaseApi {

    protected request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async get(
        endpoint: string,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        Logger.request("GET", endpoint, headers);

        const response = await this.request.get(endpoint, {
            headers
        });

        await Logger.response(response);

        return response;
    }

    async post(
        endpoint: string,
        data?: any,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        Logger.request("POST", endpoint, headers, data);

        const response = await this.request.post(endpoint, {
            data,
            headers
        });

        await Logger.response(response);

        return response;
    }

    async put(
        endpoint: string,
        data?: any,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        Logger.request("PUT", endpoint, headers, data);

        const response = await this.request.put(endpoint, {
            data,
            headers
        });

        await Logger.response(response);

        return response;
    }

    async patch(
        endpoint: string,
        data?: any,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        Logger.request("PATCH", endpoint, headers, data);

        const response = await this.request.patch(endpoint, {
            data,
            headers
        });

        await Logger.response(response);

        return response;
    }

    async delete(
        endpoint: string,
        data?: any,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        Logger.request("DELETE", endpoint, headers, data);

        const response = await this.request.delete(endpoint, {
            data,
            headers
        });

        await Logger.response(response);

        return response;
    }
}