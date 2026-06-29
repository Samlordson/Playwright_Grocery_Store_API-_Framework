import { test, expect } from "../../fixtures/apiFixture";
import { CartManager } from "../../utils/CartManager";

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

    test("Get Cart", async ({ cartAPI }) => {

    // Ensure a cart exists
    await cartAPI.createCart();

    const response = await cartAPI.getCart();

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.cartId).toBe(CartManager.getCartId());

});

});