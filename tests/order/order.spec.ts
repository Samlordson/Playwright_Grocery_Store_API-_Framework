import { test, expect } from "../../fixtures/apiFixture";

test.describe("Order API", () => {

    test("Create Order", async ({
        clientAPI,
        cartAPI,
        orderAPI
    }) => {

        // Register Client
        const registerResponse = await clientAPI.registerClient(
            "Sam",
            `sam${Date.now()}@gmail.com`
        );

        expect(registerResponse.status()).toBe(201);

        // Create Cart
        const createCartResponse = await cartAPI.createCart();

        expect(createCartResponse.status()).toBe(201);

        // Add Product
        const addItemResponse = await cartAPI.addItem(1225, 2);

        expect(addItemResponse.status()).toBe(201);

        // Create Order
        const orderResponse = await orderAPI.createOrder("Sam");

        expect(orderResponse.status()).toBe(201);

        const body = await orderResponse.json();

        expect(body.created).toBe(true);
        expect(body.orderId).toBeDefined();
    });

});