// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// this block reads the matrix from the user
function readMatrix(rows, cols, label) {
  let matrix = [];
  console.log(`\nEnter ${label} (${rows} rows, ${cols} columns, values separated by spaces):`);
  for (let i = 0; i < rows; i++) {
    const line = readlineSync.question(`Enter row ${i + 1}: `);
    const row = line.split(' ').map(Number);
    matrix.push(row);
  }
  return matrix;
}

// this prints out the matrix in a readable and understandable format
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let rowText = '';
    for (let j = 0; j < matrix[i].length; j++) {
      rowText += String(matrix[i][j]).padStart(5);
    }
    console.log(rowText);
  }
}

// this block finds the transpose of the matrix. i.e. turning the rows into columns
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let result = [];
  for (let j = 0; j < cols; j++) {
    let newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

// this block does the addition of matrices. The requirement for such addition is;
// the two matrices must be the same size   
function addMatrices(a, b) {
  const rows = a.length;
  const cols = a[0].length;

  let result = [];
  for (let i = 0; i < rows; i++) {
    let newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(a[i][j] + b[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

// this block performs the multiplication of matrices. The requirement for this is that;
// the numbers of columns of the first matrix must equal the number of rows of the second matrix
function multiplyMatrices(a, b) {
  const m = a.length;
  const n = a[0].length;
  const p = b[0].length;

  let result = [];
  for (let i = 0; i < m; i++) {
    let newRow = [];
    for (let j = 0; j < p; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += a[i][k] * b[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }
  return result;
}

console.log(' PART A: Transpose a Matrix ');
const rowsA = parseInt(readlineSync.question('Enter number of rows: '));
const colsA = parseInt(readlineSync.question('Enter number of columns: '));
const matrixA = readMatrix(rowsA, colsA, 'the matrix');

console.log('\nOriginal Matrix:');
printMatrix(matrixA);

console.log('\nTransposed Matrix:');
printMatrix(transposeMatrix(matrixA));

console.log('\n PART B: Add Two Matrices ');
console.log(`(Both matrices must be ${rowsA} x ${colsA} to match Part A's first matrix)`);
const matrixB = readMatrix(rowsA, colsA, 'the second matrix (same size as above)');

console.log('\n Sum of Matrices: ');
printMatrix(addMatrices(matrixA, matrixB));

console.log('\n PART C: Multiply Two Matrices ');
console.log('Matrix A: M x N. Matrix B: N x P. (columns of A must equal rows of B)');

const mRows = parseInt(readlineSync.question('Enter number of rows for Matrix A (M): '));
const nCols = parseInt(readlineSync.question('Enter number of columns for Matrix A / rows for Matrix B (N): '));
const pCols = parseInt(readlineSync.question('Enter number of columns for Matrix B (P): '));

const matMulA = readMatrix(mRows, nCols, 'Matrix A');
const matMulB = readMatrix(nCols, pCols, 'Matrix B');

console.log('\nMatrix A:');
printMatrix(matMulA);
console.log('\nMatrix B:');
printMatrix(matMulB);

console.log('\nProduct (A x B):');
printMatrix(multiplyMatrices(matMulA, matMulB));