const TRUNCATE_AFTER_THIS_MANY = 10;

function truncatedFibonacci(req, res) {
    const num = req.body.num;
    
    if (Number.isInteger(num) && num > 0) {
        let fib = [0, 1];
        for (let i = 2; i < num; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        
        const truncatedFib = fib.slice(0, TRUNCATE_AFTER_THIS_MANY);
        
        res.json({ 
            success: true,
            truncatedFibonacci: truncatedFib
        });
    } else {
        res.status(400).json({ error: 'Input must be a positive integer' });
    }
}