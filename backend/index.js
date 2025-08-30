import express from 'express';
import { config } from './config/env.js';
import { connectDB } from './config/db.js';
const app = express();

app.listen(config.port, () => {
    connectDB();
    console.log(`server is running on port ${config.port}`);
});
