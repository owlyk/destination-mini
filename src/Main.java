package src;

import promptSync.PromptSync;

public class Main {
    public static void main(String[] args) {
        PromptSync prompt = new PromptSync();
        String input = prompt.getString("Enter a number: ");
        try {
            int num = Integer.parseInt(input);
            if (num < 0) {
                UsageMessage.displayUsage();
            } else {
                FibonacciCalculator calculator = new FibonacciCalculator();
                int[] fibNumbers = calculator.fibList(num);
                for (int number : fibNumbers) {
                    System.out.print(number + " ");
                }
            }
        } catch (NumberFormatException e) {
            UsageMessage.displayUsage();
        }
    }
}