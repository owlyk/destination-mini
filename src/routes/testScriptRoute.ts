package routes;

import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/test_script', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/test_script.html'));
});

export default router;