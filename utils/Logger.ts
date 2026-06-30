import { APIResponse } from "@playwright/test";

export class Logger {

    static info(message: string): void {
        console.log(`[INFO] ${message}`);
    }

    static success(message: string): void {
        console.log(`[SUCCESS] ${message}`);
    }

    static error(message: string): void {
        console.error(`[ERROR] ${message}`);
    }

    static request(
        method: string,
        endpoint: string,
        headers?: Record<string, string>,
        body?: any
    ): void {

        console.log("\n==================================================");
        console.log(`REQUEST : ${method}`);
        console.log("==================================================");
        console.log(`Endpoint : ${endpoint}`);

        if (headers && Object.keys(headers).length > 0) {
            console.log("\nHeaders:");
            console.log(JSON.stringify(headers, null, 2));
        }

        if (body) {
            console.log("\nRequest Body:");
            console.log(JSON.stringify(body, null, 2));
        }

        console.log("==================================================\n");
    }

    static async response(response: APIResponse): Promise<void> {

        console.log("\n==================================================");
        console.log("RESPONSE");
        console.log("==================================================");
        console.log(`Status : ${response.status()}`);

        try {
            const body = await response.json();
            console.log("\nResponse Body:");
            console.log(JSON.stringify(body, null, 2));
        } catch {
            console.log("\nNo JSON response body.");
        }

        console.log("==================================================\n");
    }
}