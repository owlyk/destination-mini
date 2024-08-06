package routes;

const express = require('express');
const router = express.Router();

router.get('/testScript', (req, res) => {
    res.render('test_script.ejs');
});

module.exports = router;