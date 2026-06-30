import { test, expect } from "../../fixtures/apiFixture";
import { TokenManager } from "../../utils/TokenManager";
import { ClientBuilder } from "../../Builders/ClientBuilder";

test("Register API Client", async ({ clientAPI }) => {

    const client = new ClientBuilder().build();

const response = await clientAPI.registerClient(
    client.clientName,
    client.clientEmail
);

expect(response.status()).toBe(201);

const body = await response.json();

expect(body.accessToken).toBeDefined();

    console.log(
    TokenManager.getToken()
);

    

});