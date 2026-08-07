// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readline = require('readline-sync');

let students = [];

// a function that asks the student for their details and stores them using variables in the computer memory space
function addStudent() {
    let name = readline.question('Student name: ');

    let id = Number(readline.question('Student ID: '));

    let numScores = Number(readline.question('How many scores? '));

    // we store the scores in an array and also number them starting from 1 rather than 0
    let scores = [];
    for (let i = 0; i < numScores; i++) {
        // i + 1 so the prompt reads "score 1", "score 2"... instead of starting at 0
        let score = Number(readline.question(`Enter score ${i + 1}: `));
        scores.push(score);
    }

    let student = { name: name, id: id, scores: scores };

    students.push(student);
// a confirmatory message to tell a user that a student's details have been stored
    console.log(`Student "${name}" added successfully.`);
}

// a function that calculates the average of the scores inputted by the student
function calculateAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}

// displays every student's name, ID, scores, and average or a message if none have been added yet
function displayStudents() {
    if (students.length === 0) {
        console.log('No students have been added yet.');
        return;
    }

    console.log('=========================================');
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let average = calculateAverage(student.scores);

        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(', ')}`);
        console.log(`Average: ${average.toFixed(2)}`);
        console.log('-----------------------------------------');
    }
}

function averageForStudent() {
    let id = Number(readline.question('Enter student ID: '));

    let foundStudent = null;
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            foundStudent = students[i];
            break; // stop searching once we've found a match
        }
    }

    if (foundStudent === null) {
        console.log('No student found with that ID.');
        return;
    }

    let average = calculateAverage(foundStudent.scores);
    console.log(`${foundStudent.name}'s average score: ${average.toFixed(2)}`);
}

// a function defining the formatting of the menu system as given by the assignment guidelines
function showMenu() {
    console.log('================================');
    console.log('   STUDENT RECORD SYSTEM MENU');
    console.log('================================');
    console.log('1. Add student');
    console.log('2. Display all students');
    console.log('3. Calculate average score');
    console.log('4. Quit');
}

// shows the menu, reads the user's choice, and calls the matching function until they quit
function main() {
    while (true) {
        showMenu();
        let choice = readline.question('Enter your choice (1-4): ');

        switch (choice) {
            case '1':
                addStudent();
                break;
            case '2':
                displayStudents();
                break;
            case '3':
                averageForStudent();
                break;
            case '4':
                console.log('Goodbye!');
                return;
            default:
                console.log('Invalid choice. Please enter a number from 1 to 4.');
        }

        console.log();
    }
}

main();