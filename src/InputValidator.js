package src;

import java.util.regex.Pattern;

public class InputValidator {
    private static final Pattern NUMERIC_PATTERN = Pattern.compile("^[+-]?\\d+(\\.\\d+)?([eE][+-]?\\d+)?$");

    public static Object validateInput(String input) {
        if (input == null || input.isEmpty()) {
            return "Invalid input: Input cannot be null or empty.";
        }
        if (!NUMERIC_PATTERN.matcher(input).matches()) {
            return "Invalid input: Input must be a numeric value.";
        }
        try {
            double number = Double.parseDouble(input);
            if (number < 0) {
                return "Invalid input: Input cannot be a negative integer.";
            }
            int intValue = (int) number;
            if (number != intValue) {
                return "Invalid input: Input must be an integer.";
            }
            return intValue;
        } catch (NumberFormatException e) {
            return "Invalid input: Input must be a numeric value.";
        }
    }
}