import { APIRequestContext, APIResponse } from '@playwright/test';
import { Logger } from "../utils/Logger";

export class BaseApi {

    protected request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async get(
    endpoint: string,
    headers?: Record<string,string>
): Promise<APIResponse> {

    Logger.info(`GET ${endpoint}`);

   const response =  await this.request.get(endpoint,{
        headers
    });

    Logger.success(
        `Status : ${response.status()}`
    );

    return response;

}
    

    async post(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
) {
    

    return await this.request.post(endpoint, {
        data,
        headers
    });
}

    async put(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
): Promise<APIResponse> {

    return await this.request.put(endpoint, {
        data,
        headers
    });

    }

    async patch(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
): Promise<APIResponse> {

    return await this.request.patch(endpoint, {
        data,
        headers
    });

    }

 async delete(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
): Promise<APIResponse> {
    return await this.request.delete(endpoint, {
        data,
        headers
    });
}
}


