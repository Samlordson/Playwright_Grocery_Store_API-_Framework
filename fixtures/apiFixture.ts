import { test as base, expect } from '@playwright/test';
import { StatusApi } from '../api/StatusApi';
import { ClientApi } from '../api/ClientApi';
import { ProductApi } from '../api/ProductApi';

type APIFixtures = {
    statusAPI: StatusApi;
    clientAPI: ClientApi;
    productAPI: ProductApi;
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

productAPI: async ({ request }, use) => {

    const productAPI =
        new ProductApi(request);

    await use(productAPI);

},
    

});

export { expect };

