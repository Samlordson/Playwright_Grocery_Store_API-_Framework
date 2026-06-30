export class OrderManager {

    private static orderId: string;

    static setOrderId(id: string) {
        this.orderId = id;
    }

    static getOrderId(): string {
        return this.orderId;
    }

}