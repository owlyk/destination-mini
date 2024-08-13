package src.server;

import fibonacciService from './fibonacciService';

class FibonacciController {
    async getFibonacci(req, res) {
        const input = req.params.input;

        if (isNaN(input)) {
            return res.status(400).json({ error: 'FIB_ERROR_NOT_NUMERIC' });
        }

        const num = Number(input);
        if (num < 0) {
            return res.status(400).json({ error: 'FIB_ERROR_NEGATIVE' });
        }

        const result = await fibonacciService.calculate(num);
        return res.status(200).json({ result });
    }
}

export default new FibonacciController();