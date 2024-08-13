package src;

import java.util.regex.Pattern;

public class InputValidator {
    private static final String VALID_INPUT_REGEX = "^(\\d+|\\d+\\.\\d+|\\d+e[+-]?\\d+|\\d+\\.\\d+e[+-]?\\d+)$";
    private static final Pattern VALID_INPUT_PATTERN = Pattern.compile(VALID_INPUT_REGEX);

    public static String validateInput(String input) {
        if (input == null || input.isEmpty()) {
            return "Input cannot be empty.";
        }
        if (!VALID_INPUT_PATTERN.matcher(input).matches()) {
            return "Input must be a non-negative integer or valid scientific notation.";
        }
        try {
            double number = Double.parseDouble(input);
            if (number < 0) {
                return "Input must be a non-negative integer or valid scientific notation.";
            }
            return String.valueOf(number);
        } catch (NumberFormatException e) {
            return "Input must be a non-negative integer or valid scientific notation.";
        }
    }
}