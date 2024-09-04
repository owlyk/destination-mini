package fibonacciCalculator;

import java.math.BigInteger;
import java.util.concurrent.ConcurrentHashMap;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
import org.json.JSONObject;

public class FibonacciCalculator {

    private static final Pattern pattern = Pattern.compile("^(0|[1-9]\\d*|\\d+\\.\\d+|\\d+e[+-]?\\d+)$");

    public static JSONObject validateInput(String input) {
        Matcher matcher = pattern.matcher(input);
        
        if (matcher.matches()) {
            return new JSONObject().put("valid", true).put("value", new BigInteger(input));
        } else {
            return new JSONObject().put("valid", false).put("error", "Invalid input. Please enter a non-negative integer.");
        }
    }

    public static JSONObject calculateFibonacci(BigInteger n) {
        if (n.compareTo(BigInteger.ZERO) < 0) {
            return new JSONObject().put("error", "Invalid input. Please enter a non-negative integer.");
        }
        if (n.equals(BigInteger.ZERO)) {
            return new JSONObject().put("fibonacci", BigInteger.ZERO);
        }
        if (n.equals(BigInteger.ONE)) {
            return new JSONObject().put("fibonacci", BigInteger.ONE);
        }
        
        ConcurrentHashMap<BigInteger, BigInteger> fibMap = new ConcurrentHashMap<>();
        fibMap.put(BigInteger.ZERO, BigInteger.ZERO);
        fibMap.put(BigInteger.ONE, BigInteger.ONE);
        
        BigInteger a = BigInteger.ZERO, b = BigInteger.ONE, fib = BigInteger.ZERO;
        for (BigInteger i = BigInteger.valueOf(2); i.compareTo(n) <= 0; i = i.add(BigInteger.ONE)) {
            fib = a.add(b);
            fibMap.put(i, fib);
            a = b;
            b = fib;
        }
        return new JSONObject().put("fibonacci", fib);
    }
}