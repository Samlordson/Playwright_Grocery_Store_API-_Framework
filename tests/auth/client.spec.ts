import { test, expect } from "../../fixtures/apiFixture";

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

    console.log(body);

    expect(body.accessToken)
        .toBeDefined();

});