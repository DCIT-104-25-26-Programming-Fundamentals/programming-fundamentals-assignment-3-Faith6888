// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

// the number of terms
function printFibonacciTerms() {
    const input = readlineSync.question("How many terms? ");
    const n = parseInt(input);

// checking to make sure a value entered is positive integer
    if (isNaN(n) || n <= 0 || n !== Number(input)) {
        console.log("Error: please enter a positive integer.");
        return;
    }

// storing the fibonacci sequence in an array     
    let sequence = [];
    let a = 0; // first Fibonacci number
    let b = 1; // second Fibonacci number

    for (let i = 0; i < n; i++) {
        sequence.push(a);
        // Slide the window forward: next "a" is current "b",
        // next "b" is the sum of the current pair
        let next = a + b;
        a = b;
        b = next;
    }

    console.log("Fibonacci sequence: " + sequence.join(' '));
}

// PART B — Check if a Number Belongs to the Sequence
function checkFibonacciNumber() {
    const input = readlineSync.question("Enter a number to check if it is part of the Fibonacci sequence: ");
    const target = parseInt(input);

    if (isNaN(target) || target !== Number(input)) {
        console.log("Error: please enter a valid number.");
        return;
    }

    // Generate Fibonacci numbers with a loop until we reach or pass the target.
    // We don't know N in advance here, so we keep going until "a" is - making the use of a "while" loop  
    // large enough to either match or exceed the target.
    let a = 0;
    let b = 1;
    let isFibonacci = false;

    // Special case: 0 is always the first Fibonacci number
    if (target === 0) {
        isFibonacci = true;
    } else if (target > 0) {
        while (a <= target) {
            if (a === target) {
                isFibonacci = true;
                break;
            }
            let next = a + b;
            a = b;
            b = next;
        }
    }
    // Negative numbers are not Fibonacci numbers, so isFibonacci stays false

    if (isFibonacci) {
        console.log(target + " is a Fibonacci number.");
    } else {
        console.log(target + " is not a Fibonacci number.");
    }
}

// MAIN — run both parts
function main() {
    printFibonacciTerms();
    checkFibonacciNumber();
}

main();