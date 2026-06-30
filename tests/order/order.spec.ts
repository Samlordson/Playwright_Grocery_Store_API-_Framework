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
        const orderResponse = await orderAPI.createOrder();

        expect(orderResponse.status()).toBe(201);

        const body = await orderResponse.json();

        expect(body.created).toBe(true);
        expect(body.orderId).toBeDefined();
    });

    test("Get All Orders", async ({
    clientAPI,
    cartAPI,
    orderAPI
}) => {

    await clientAPI.registerClient(
        "Sam",
        `sam${Date.now()}@gmail.com`
    );

    await cartAPI.createCart();

    await cartAPI.addItem(1225, 2);

    await orderAPI.createOrder();

    const response = await orderAPI.getAllOrders();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();
});
test("Get Single Order", async ({
    clientAPI,
    cartAPI,
    orderAPI
}) => {

    await clientAPI.registerClient(
        "Sam",
        `sam${Date.now()}@gmail.com`
    );

    await cartAPI.createCart();

    await cartAPI.addItem(1225, 2);

    await orderAPI.createOrder();

    const response = await orderAPI.getOrder();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBeDefined();
});
test("Update Order", async ({
    clientAPI,
    cartAPI,
    orderAPI
}) => {

    await clientAPI.registerClient(
        "Sam",
        `sam${Date.now()}@gmail.com`
    );

    await cartAPI.createCart();

    await cartAPI.addItem(1225, 2);

   await orderAPI.createOrder();

    const response = await orderAPI.updateOrder(
        "Please deliver after 6 PM"
    );

    expect(response.status()).toBe(204);
});
test("Delete Order", async ({
    clientAPI,
    cartAPI,
    orderAPI
}) => {

    await clientAPI.registerClient(
        "Sam",
        `sam${Date.now()}@gmail.com`
    );

    await cartAPI.createCart();

    await cartAPI.addItem(1225, 2);

    await orderAPI.createOrder();

    const response = await orderAPI.deleteOrder();

    expect(response.status()).toBe(204);
});
});