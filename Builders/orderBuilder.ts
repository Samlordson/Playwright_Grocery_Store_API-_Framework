import { faker } from "@faker-js/faker";

export class OrderBuilder {

    private customerName = faker.person.firstName();

    withCustomer(name: string) {
        this.customerName = name;
        return this;
    }

    build() {
        return {
            customerName: this.customerName
        };
    }
}