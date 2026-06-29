import { test, expect } from "../../fixtures/apiFixture";
import { CartManager } from "../../utils/CartManager";
import { ItemManager } from "../../utils/ItemManager";

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

    await cartAPI.createCart();

    const response = await cartAPI.getCart();

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(Array.isArray(body.items)).toBeTruthy();

   expect(body.items).toBeInstanceOf(Array);

    expect(body.created).toBeDefined();

});
test("Add Item To Cart", async ({ cartAPI }) => {

    await cartAPI.createCart();

    const response =
        await cartAPI.addItem(1225, 1);

    expect(response.status()).toBe(201);

    const body =
        await response.json();

    console.log(body);

});
test("Get Cart Items", async ({ cartAPI }) => {

    await cartAPI.createCart();

    await cartAPI.addItem(1225, 1);

    const response = await cartAPI.getCartItems();

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(Array.isArray(body)).toBeTruthy();

    expect(body.length).toBeGreaterThan(0);

    expect(body[0].id).toBe(ItemManager.getItemId());

    expect(body[0].productId).toBe(1225);

    expect(body[0].quantity).toBe(1);
});
test("Update Quantity", async ({ cartAPI }) => {

    // Create Cart
    await cartAPI.createCart();

    // Add Product
    await cartAPI.addItem(1225, 1);

    // Update Quantity
    const updateResponse = await cartAPI.updateQuantity(5);

    expect(updateResponse.status()).toBe(204);

    // Verify Update
    const response = await cartAPI.getCartItems();

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body[0].quantity).toBe(5);

});

test("Replace Item", async ({ cartAPI }) => {

    // Create Cart
    await cartAPI.createCart();

    // Add Product
    await cartAPI.addItem(1225, 1);


    //Replace Item
    const replaceitemResponse = await cartAPI.replaceItem(4643,2);

    // Verify Update
    const response = await cartAPI.getCartItems();

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body[0].productId).toBe(4643);
    expect(body[0].quantity).toBe(2);

expect(body[0].id).toBe(ItemManager.getItemId());

});
test("Delete Item", async ({ cartAPI }) => {

    await cartAPI.createCart();

    await cartAPI.addItem(1225, 1);

    const deleteResponse =
        await cartAPI.deleteItem();

    expect(deleteResponse.status()).toBe(204);

    const response =
        await cartAPI.getCartItems();

    expect(response.status()).toBe(200);

    const body =
        await response.json();

    expect(body).toHaveLength(0);
});
});