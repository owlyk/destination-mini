package src;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class InputValidator {
    public static Object validateInput(String input) {
        if (input == null || input.isEmpty()) {
            return "Invalid input: empty string";
        }

        Pattern nonNegativeIntegerPattern = Pattern.compile("^[0-9]+$");
        Matcher nonNegativeIntegerMatcher = nonNegativeIntegerPattern.matcher(input);
        
        if (nonNegativeIntegerMatcher.matches()) {
            return Integer.parseInt(input);
        }

        Pattern scientificNotationPattern = Pattern.compile("^[+-]?\\d+(\\.\\d+)?[eE][+-]?\\d+$");
        Matcher scientificNotationMatcher = scientificNotationPattern.matcher(input);
        
        if (scientificNotationMatcher.matches()) {
            try {
                double value = Double.parseDouble(input);
                if (value < 0 || value > Integer.MAX_VALUE) {
                    return "Invalid input: scientific notation out of range";
                }
                return (int) value;
            } catch (NumberFormatException e) {
                return "Invalid input: scientific notation out of range";
            }
        }

        return "Invalid input: non-numeric or negative value";
    }
}