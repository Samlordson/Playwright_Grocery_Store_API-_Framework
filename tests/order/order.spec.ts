import { test, expect } from "../../fixtures/apiFixture";
import { SchemaValidator } from "../../utils/SchemaValidator";
import { orderSchema } from "../../schemas/orderSchema";
import { ordersSchema } from "../../schemas/ordersSchema";
import { createOrderSchema } from "../../schemas/createorderSchema.ts";
import { TestDataFactory } from "../../testdata/TestDataFactory.ts";

test.describe("Order API", () => {
    
    test("Create Order", async ({
        clientAPI,
        cartAPI,
        orderAPI
    }) => {

      const client = TestDataFactory.client();
const item = TestDataFactory.item();

const registerResponse = await clientAPI.registerClient(
    client.clientName,
    client.clientEmail
);

expect(registerResponse.status()).toBe(201);

await cartAPI.createCart();

await cartAPI.addItem(
    item.productId,
    item.quantity
);

        // Create Order
        const orderResponse = await orderAPI.createOrder();
        

        expect(orderResponse.status()).toBe(201);

        const body = await orderResponse.json();
    SchemaValidator.validate(createOrderSchema, body);
        expect(body.created).toBe(true);
        expect(body.orderId).toBeDefined();
    });

    test("Get All Orders", async ({
    clientAPI,
    cartAPI,
    orderAPI
}) => {

    const client = TestDataFactory.client();
const item = TestDataFactory.item();

await clientAPI.registerClient(
    client.clientName,
    client.clientEmail
);

await cartAPI.createCart();

await cartAPI.addItem(
    item.productId,
    item.quantity
);

await orderAPI.createOrder();

    const response = await orderAPI.getAllOrders();

    expect(response.status()).toBe(200);

    const body = await response.json();

    SchemaValidator.validate(ordersSchema, body);

    expect(Array.isArray(body)).toBeTruthy();
});

test("Get Single Order", async ({
    clientAPI,
    cartAPI,
    orderAPI
}) => {

   const client = TestDataFactory.client();
const item = TestDataFactory.item();

await clientAPI.registerClient(
    client.clientName,
    client.clientEmail
);

await cartAPI.createCart();

await cartAPI.addItem(
    item.productId,
    item.quantity
);

await orderAPI.createOrder();

    const response = await orderAPI.getOrder();

    expect(response.status()).toBe(200);

    const body = await response.json();
   SchemaValidator.validate(orderSchema, body);

    expect(body.id).toBeDefined();
});

test("Update Order", async ({
    clientAPI,
    cartAPI,
    orderAPI
}) => {

    const client = TestDataFactory.client();
const item = TestDataFactory.item();
const order = TestDataFactory.order();

await clientAPI.registerClient(
    client.clientName,
    client.clientEmail
);

await cartAPI.createCart();

await cartAPI.addItem(
    item.productId,
    item.quantity
);

await orderAPI.createOrder();

const response = await orderAPI.updateOrder(
    order.comment
);
    
    expect(response.status()).toBe(204);
});

test("Delete Order", async ({
    clientAPI,
    cartAPI,
    orderAPI
}) => {

  const client = TestDataFactory.client();
const item = TestDataFactory.item();

await clientAPI.registerClient(
    client.clientName,
    client.clientEmail
);

await cartAPI.createCart();

await cartAPI.addItem(
    item.productId,
    item.quantity
);

    await orderAPI.createOrder();

    const response = await orderAPI.deleteOrder();

    expect(response.status()).toBe(204);
    
});
});