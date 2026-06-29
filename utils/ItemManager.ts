export class ItemManager {

    private static itemId: number;

    static setItemId(id: number) {
        this.itemId = id;
    }

    static getItemId(): number {
        return this.itemId;
    }
}