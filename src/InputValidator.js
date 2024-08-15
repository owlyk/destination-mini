package src;

import java.util.regex.Pattern;

public class InputValidator {
    private static final Pattern VALID_INPUT_PATTERN = Pattern.compile("^(\\d+|\\d+\\.\\d+|\\d+e[+-]?\\d+)$");

    public static ValidationResult isValidInput(String input) {
        if (input == null || input.isEmpty()) {
            return new ValidationResult(false, "Input cannot be null or empty.");
        }
        if (!VALID_INPUT_PATTERN.matcher(input).matches()) {
            return new ValidationResult(false, "Input must be a non-negative integer or valid scientific notation.");
        }
        return new ValidationResult(true, "");
    }

    public static class ValidationResult {
        private final boolean isValid;
        private final String message;

        public ValidationResult(boolean isValid, String message) {
            this.isValid = isValid;
            this.message = message;
        }

        public boolean isValid() {
            return isValid;
        }

        public String getMessage() {
            return message;
        }
    }
}