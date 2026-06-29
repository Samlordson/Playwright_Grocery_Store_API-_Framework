import Ajv from "ajv";

const ajv = new Ajv();

export class SchemaValidator {

    static validate(schema: object, data: object): void {

        const validate = ajv.compile(schema);

        const valid = validate(data);

        if (!valid) {
            throw new Error(
                JSON.stringify(validate.errors, null, 2)
            );
        }

    }

}