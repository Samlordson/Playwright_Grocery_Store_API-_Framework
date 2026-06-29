import { test as base, expect } from '@playwright/test';
import { StatusApi } from '../api/StatusApi';

type APIFixtures = {
    statusAPI: StatusApi;
};

export const test = base.extend<APIFixtures>({

    statusAPI: async ({ request }, use) => {

        const statusAPI = new StatusApi(request);

        await use(statusAPI);

    }

});

export { expect };