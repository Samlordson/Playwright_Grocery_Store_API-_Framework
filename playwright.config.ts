import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  timeout: Number(process.env.API_TIMEOUT),

  use: {
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders: {
      Accept: 'application/json'
    }
  },

 reporter: [

 ['list'],

 ['html',
  {
    outputFolder: 'playwright-report',
    open: 'never'
  }
 ]

]})