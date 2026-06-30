import { ClientBuilder } from "../Builders/ClientBuilder";
import { ItemBuilder } from "../Builders/ItemBuilder";
import { OrderBuilder } from "../Builders/orderBuilder";

export class TestDataFactory {

    static client(builder?: (b: ClientBuilder) => ClientBuilder) {
        const b = new ClientBuilder();
        return builder ? builder(b).build() : b.build();
    }

    static item(builder?: (b: ItemBuilder) => ItemBuilder) {
        const b = new ItemBuilder();
        return builder ? builder(b).build() : b.build();
    }

    static order(
    modifier?: (builder: OrderBuilder) => OrderBuilder
) {
    const builder = new OrderBuilder();

    return modifier
        ? modifier(builder).build()
        : builder.build();
}

}