export class TokenManager {

    private static token: string = '';

    static setToken(token: string): void {
        this.token = token;
    }

    static getToken(): string {
        return this.token;
    }

    static clearToken(): void {
        this.token = '';
    }
}