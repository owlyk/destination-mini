package fibonacci;

public class FibonacciService {
    
    public int[] generateFibonacciSeries(int n) {
        if (n <= 0) {
            return new int[0];
        }
        
        int[] series = new int[n];
        series[0] = 0;
        if (n > 1) {
            series[1] = 1;
        }
        
        for (int i = 2; i < n; i++) {
            series[i] = series[i-1] + series[i-2];
            if (series[i] < 0) {
                return Arrays.copyOf(series, i);
            }
        }
        
        return series;
    }
}