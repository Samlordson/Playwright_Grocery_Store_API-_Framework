import { faker } from "@faker-js/faker";

export class ClientBuilder {

    private clientName = faker.person.fullName();
    private clientEmail = faker.internet.email();
     
    withName(name: string) {
        this.clientName = name;
        return this;
    }

    withEmail(email: string) {
        this.clientEmail = email;
        return this;
    }

    build() {
        return {
            clientName: this.clientName,
            clientEmail: this.clientEmail
        };
    }
}