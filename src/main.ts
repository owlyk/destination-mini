package main

import express from 'express';
import { fibUsage } from './fibUsage';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/fib_usage', fibUsage);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});