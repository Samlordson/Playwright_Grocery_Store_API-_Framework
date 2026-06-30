import { test, expect } from "../../fixtures/apiFixture";
import { CartManager } from "../../utils/CartManager";
import { ItemManager } from "../../utils/ItemManager";
import { cartSchema } from "../../schemas/cartSchema";
import { SchemaValidator } from "../../utils/SchemaValidator";
import { TestDataFactory } from "../../testdata/TestDataFactory";
import { ItemBuilder } from "../../Builders/ItemBuilder";


test.describe("Cart API", () => {

    test("Create Cart", async ({ cartAPI }) => {

        const response =
            await cartAPI.createCart();

        expect(response.status())
            .toBe(201);

        const body =
            await response.json();

            SchemaValidator.validate(cartSchema, body);



        console.log(body);

        expect(body.created).toBe(true);

        expect(body.cartId) .toBeDefined();

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

    const item = TestDataFactory.item();

const response = await cartAPI.addItem(
    item.productId,
    item.quantity
);

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

    // Test Data
    const item = TestDataFactory.item();

    // Add Product
    await cartAPI.addItem(
        item.productId,
        item.quantity
    );

    // New quantity to update
    const updatedQuantity = item.quantity + 4;

    // Update Quantity
    const updateResponse = await cartAPI.updateQuantity(updatedQuantity);

    expect(updateResponse.status()).toBe(204);

    // Verify Update
    const response = await cartAPI.getCartItems();

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body[0].quantity).toBe(updatedQuantity);

});

test("Replace Item", async ({ cartAPI }) => {

    // Create Cart
    await cartAPI.createCart();

    // Original Item
    const item = TestDataFactory.item();

    await cartAPI.addItem(
        item.productId,
        item.quantity
    );

    // Replacement Item
    const replacementItem = TestDataFactory.item(builder =>
        builder
            .withProduct(4643)
            .withQuantity(2)
    );

    // Replace Item
    const replaceResponse = await cartAPI.replaceItem(
        replacementItem.productId,
        replacementItem.quantity
    );

    expect(replaceResponse.status()).toBe(204);

    // Verify
    const response = await cartAPI.getCartItems();

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body[0].productId).toBe(replacementItem.productId);
    expect(body[0].quantity).toBe(replacementItem.quantity);
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