export class ClientManager {
    private static customerName: string;

    static setCustomerName(name: string) {
        this.customerName = name;
    }

    static getCustomerName() {
        return this.customerName;
    }
}