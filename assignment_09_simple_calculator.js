// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readline = require('readline-sync');

// the addition function that returns a sum
function add(a, b) {
    return a + b;
}

// the subtract function that returns a difference
function subtract(a, b) {
    return a - b;
}

// the multiplication function that returns a product
function multiply(a, b) {
    return a * b;
}

// the division function that returns a quotient
function divide(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}

// the modulus function that returns the remainder of a divided by b
function modulus(a, b) {
    if (b === 0) {
        return null;
    }
    return a % b;
}

// the exponentiation function that returns a raised to the power of b
function exponentiate(a, b) {
    return a ** b;
}

// a function defining the format of the menu as suggested by the assignment guidelines
function showMenu() {
    console.log('============================');
    console.log('     SIMPLE CALCULATOR');
    console.log('============================');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Modulus');
    console.log('6. Exponentiation');
    console.log('7. Quit');
}
// asking the user for two numbers to work on 
function getTwoNumbers() {
    let a = Number(readline.question('Enter first number : '));
    let b = Number(readline.question('Enter second number: '));
    return [a, b];
}

// runs the chosen operation on the two numbers and prints the result, or an error if dividing/modulus by zero
function performOperation(symbol, operation) {
    let numbers = getTwoNumbers();
    let a = numbers[0];
    let b = numbers[1];

    let result = operation(a, b);

    if (result === null) {
        console.log('Error: Cannot divide by zero.');
        return;
    }

    console.log(`Result: ${a} ${symbol} ${b} = ${result.toFixed(2)}`);
}

// the main function that shows the menu, reads the user's choice, and runs the matching operation until they quit
function main() {
    while (true) {
        showMenu();
        let choice = readline.question('Select an operation (1-7): ');

        switch (choice) {
            case '1':
                performOperation('+', add);
                break;
            case '2':
                performOperation('-', subtract);
                break;
            case '3':
                performOperation('*', multiply);
                break;
            case '4':
                performOperation('/', divide);
                break;
            case '5':
                performOperation('%', modulus);
                break;
            case '6':
                performOperation('**', exponentiate);
                break;
            case '7':
                console.log('Goodbye!');
                return;
            default:
                console.log('Invalid choice. Please enter a number from 1 to 7.');
        }

        console.log();
    }
}

main();