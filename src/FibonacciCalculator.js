package src;

class FibonacciCalculator {
    static final int TRUNCATE_AFTER_THIS_MANY = 10000;

    public Object calculateFibonacci(String argument) {
        int n;
        try {
            n = Integer.parseInt(argument);
            if (n < 0) {
                return new Response(400, "Input must be a non-negative integer.");
            }
        } catch (NumberFormatException e) {
            return new Response(400, "Input must be a non-negative integer.");
        }

        String message = "";
        if (n > TRUNCATE_AFTER_THIS_MANY) {
            n = TRUNCATE_AFTER_THIS_MANY;
            message = "Input truncated to " + TRUNCATE_AFTER_THIS_MANY + ".";
        }

        int[] fibonacciNumbers = new int[n + 1];
        fibonacciNumbers[0] = 0;
        if (n > 0) {
            fibonacciNumbers[1] = 1;
            for (int i = 2; i <= n; i++) {
                fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
            }
        }

        return new Response(200, fibonacciNumbers, message);
    }

    class Response {
        int status;
        Object data;
        String message;

        Response(int status, Object data) {
            this.status = status;
            this.data = data;
            this.message = null;
        }

        Response(int status, Object data, String message) {
            this.status = status;
            this.data = data;
            this.message = message;
        }
    }
}