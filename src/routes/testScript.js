package routes;

const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/test_script', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/src/app/test-script/test-script.html'));
});

module.exports = router;