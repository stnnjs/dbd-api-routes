import express from 'express';
import * as dotenv from 'dotenv';

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;
app.get('/', function (_req, res) {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});