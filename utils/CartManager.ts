export class CartManager {

    private static cartId: string = "";

    static setCartId(cartId: string): void {
        this.cartId = cartId;
    }

    static getCartId(): string {
        return this.cartId;
    }

    static clearCartId(): void {
        this.cartId = "";
    }

}