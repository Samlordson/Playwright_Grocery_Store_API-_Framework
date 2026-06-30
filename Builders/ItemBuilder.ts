export class ItemBuilder {

    private productId = 1225;
    private quantity = 1;

    withProduct(productId: number) {
        this.productId = productId;
        return this;
    }

    withQuantity(quantity: number) {
        this.quantity = quantity;
        return this;
    }

    build() {
        return {
            productId: this.productId,
            quantity: this.quantity
        };
    }
    
}