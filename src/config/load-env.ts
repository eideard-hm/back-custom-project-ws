import { config } from 'dotenv';

// load env
config();

export const SERVER_PORT = process.env.PORT ?? 3000;
