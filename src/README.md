package src;

import java.util.ArrayList;
import java.util.List;

public class FibonacciCalculator {

    public List<Integer> calculateFibonacciSequence(int n) {
        List<Integer> fibonacciSequence = new ArrayList<>();
        
        if (n <= 0) {
            return fibonacciSequence;
        }
        
        fibonacciSequence.add(0);
        if (n == 1) {
            return fibonacciSequence;
        }
        
        fibonacciSequence.add(1);
        if (n == 2) {
            return fibonacciSequence;
        }
        
        for (int i = 2; i < n; i++) {
            int num = fibonacciSequence.get(i - 1) + fibonacciSequence.get(i - 2);
            fibonacciSequence.add(num);
        }
        
        return fibonacciSequence;
    }
}