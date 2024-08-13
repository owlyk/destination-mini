package src;

import java.util.ArrayList;
import java.util.List;

public class InputValidator {

    public static boolean isValidInput(String input) {
        String regex = "^(\\d+|\\d+\\.\\d+|\\d+e[+-]?\\d+|0|0\\.\\d+|0e[+-]?\\d+)$";
        if (input.matches(regex)) {
            return true;
        } else {
            return false;
        }
    }

    public static List<Integer> fibonacci(int n) {
        List<Integer> fibSeries = new ArrayList<>();
        if (n < 0) {
            return fibSeries;
        }
        fibSeries.add(0);
        if (n == 0) {
            return fibSeries;
        }
        fibSeries.add(1);
        for (int i = 2; i <= n; i++) {
            int next = fibSeries.get(i - 1) + fibSeries.get(i - 2);
            fibSeries.add(next);
        }
        return fibSeries;
    }

    public static Response handleFibonacciRequest(String input) {
        if (!isValidInput(input)) {
            return new Response(false, "Invalid input. Please provide a non-negative number.");
        }
        int number = Integer.parseInt(input);
        List<Integer> result = fibonacci(number);
        return new Response(true, result);
    }

    public static class Response {
        private boolean success;
        private Object data;

        public Response(boolean success, Object data) {
            this.success = success;
            this.data = data;
        }

        public boolean isSuccess() {
            return success;
        }

        public Object getData() {
            return data;
        }
    }
}