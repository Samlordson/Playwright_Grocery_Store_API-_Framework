import { test, expect } from "../../fixtures/apiFixture";
import { TokenManager } from "../../utils/TokenManager";

test("Register API Client", async ({ clientAPI }) => {

    const randomEmail =
        `sam${Date.now()}@gmail.com`;

    const response =
        await clientAPI.registerClient(
            "Playwright Framework",
            randomEmail
        );

    expect(response.status()).toBe(201);

    const body =
        await response.json();
        
        expect(body.accessToken)
        .toBeDefined();

    console.log(
    TokenManager.getToken()
);

    

});