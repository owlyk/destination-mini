package main

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/test_script', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'test_script.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});