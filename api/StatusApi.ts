import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApi } from './BaseApi.ts';

export class StatusApi extends BaseApi {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async getStatus(): Promise<APIResponse> {
        return this.get('/status');
    }
}