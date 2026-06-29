import { test, expect } from "../../fixtures/apiFixture";

test.describe("Cart API", () => {

    test("Create Cart", async ({ cartAPI }) => {

        const response =
            await cartAPI.createCart();

        expect(response.status())
            .toBe(201);

        const body =
            await response.json();

        console.log(body);

        expect(body.created)
            .toBe(true);

        expect(body.cartId)
            .toBeDefined();

    });

});