import dotenv from "dotenv";

dotenv.config();

export const Environment = {

    baseUrl: process.env.BASE_URL!,

    timeout: Number(process.env.API_TIMEOUT) || 30000

};