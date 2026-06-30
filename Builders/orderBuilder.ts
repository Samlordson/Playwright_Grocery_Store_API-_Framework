import { faker } from "@faker-js/faker";

export class OrderBuilder {

    private comment = faker.lorem.sentence();

    withComment(comment: string) {
        this.comment = comment;
        return this;
    }

    build() {
        return {
            comment: this.comment
        };
    }
}