import { test as base, expect } from '@playwright/test';
import { StatusApi } from '../api/StatusApi';
import { ClientApi } from '../api/ClientApi';

type APIFixtures = {
    statusAPI: StatusApi;
    clientAPI: ClientApi;
};

export const test = base.extend<APIFixtures>({

    statusAPI: async ({ request }, use) => {

        const statusAPI = new StatusApi(request);

        await use(statusAPI);

    },
    clientAPI: async ({ request }, use) => {

    const clientAPI = new ClientApi(request);

    await use(clientAPI);

},
    

});

export { expect };

