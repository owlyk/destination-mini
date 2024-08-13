package api;

import express from 'express';
import bodyParser from 'body-parser';
import { fibonacci } from './fibonacci';

const app = express();
app.use(bodyParser.json());

app.get('/fib/0', fibonacci);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});