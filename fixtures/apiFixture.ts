import { test as base, expect } from '@playwright/test';
import { StatusApi } from '../api/StatusApi';
import { ClientApi } from '../api/ClientApi';
import { ProductApi } from '../api/ProductApi';
import { CartApi } from '../api/CartApi';
import { OrderApi } from '../api/OrderApi';

type APIFixtures = {
    statusAPI: StatusApi;
    clientAPI: ClientApi;
    productAPI: ProductApi;
    cartAPI:CartApi;
    orderAPI: OrderApi;
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

cartAPI: async ({ request }, use) => {

    const cartAPI = new CartApi(request);

    await use(cartAPI);

},
orderAPI: async ({ request }, use) => {
    const orderAPI = new OrderApi(request);
    await use(orderAPI);
},
    

});

export { expect };

