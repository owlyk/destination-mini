package src;

import java.util.ArrayList;
import java.util.List;

public class FibonacciCalculator {
    private static final int TRUNCATE_AFTER_THIS_MANY = 10000;

    public List<Integer> fibList(int num) {
        if (num < 0 || num > TRUNCATE_AFTER_THIS_MANY) {
            throw new IllegalArgumentException("Input must be non-negative and less than or equal to " + TRUNCATE_AFTER_THIS_MANY);
        }
        List<Integer> fibonacciNumbers = new ArrayList<>();
        if (num == 0) {
            return fibonacciNumbers;
        }
        fibonacciNumbers.add(0);
        if (num == 1) {
            return fibonacciNumbers;
        }
        fibonacciNumbers.add(1);
        for (int i = 2; i < num; i++) {
            int nextFib = fibonacciNumbers.get(i - 1) + fibonacciNumbers.get(i - 2);
            fibonacciNumbers.add(nextFib);
        }
        return fibonacciNumbers;
    }
}