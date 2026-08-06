// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

// HELPER — prints the multiplication table (1 to 12) for a single number
function printTable(num) {
    console.log(`Multiplication Table for ${num}:`);

    for (let i = 1; i <= 12; i++) {
        // padStart(2) right-aligns single-digit numbers so the "=" column lines up
        let multiplier = String(i).padStart(2);
        let result = num * i;
        console.log(`${num}  x  ${multiplier}  =  ${result}`);
    }
}

// PART A — Single Table
function singleTable() {
    const input = readlineSync.question("Enter a number: ");
    const num = parseInt(input);

    // Validate that the input is actually a whole number.
    // Note: we don't require it to be positive here, since multiplication
    // tables make sense for negative numbers too (e.g. -5's table).
    if (isNaN(num) || num !== Number(input)) {
        console.log("Error: please enter a valid integer.");
        return;
    }

    printTable(num);
}

// PART B — Tables from 1 to N
function tablesUpToN() {
    const input = readlineSync.question("Enter a number N: ");
    const n = parseInt(input);

    // n specifically must be a postive integer, since it defines
    // how many tables we generate (can't generate a negative count of tables)
    if (isNaN(n) || n <= 0 || n !== Number(input)) {
        console.log("Error: please enter a positive integer.");
        return;
    }

    for (let i = 1; i <= n; i++) {
        printTable(i);
        if (i < n) {
            console.log("---------------------------");
        }
    }
}

// MAIN
function main() {
    singleTable();
    tablesUpToN();
}

main();