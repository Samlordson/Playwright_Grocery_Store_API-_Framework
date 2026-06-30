import { test, expect } from "../../fixtures/apiFixture";
import { SchemaValidator } from "../../utils/SchemaValidator"
import { productSchema } from "../../schemas/productSchema";
import { productsSchema } from "../../schemas/productsSchema.ts";


test.describe("Products API", () => {

    test("Get All Products", async ({ productAPI }) => {

        const response = await productAPI.getAllProducts();

        expect(response.status()).toBe(200);

        const body = await response.json();

        SchemaValidator.validate( productsSchema,body);

        expect(body.length).toBeGreaterThan(0);
        
    });

    test("Get Product By ID", async ({ productAPI }) => {

        const response = await productAPI.getProductById(1225);

        expect(response.status()).toBe(200);

        const body = await response.json();
        
        SchemaValidator.validate(productSchema, body);

        expect(body.id).toBe(1225);
        

    });

});