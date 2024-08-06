package main

const express = require('express');
const path = require('path');
const TestScriptRoute = require('./routes/TestScriptRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/testScript', TestScriptRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});