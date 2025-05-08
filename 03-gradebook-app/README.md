# Gradebook 

A simple JavaScript-only project that mimics a basic gradebook. This project was built to practice working with arrays, objects, and functions in JavaScript.

## Features

- Store student names and their grades
- Calculate average scores
- Simple, clean logic with no dependencies

##  Built With

- Vanilla JavaScript (no frameworks)

##  What I Learned

- Using arrays and objects to store structured data
- Iterating over data using loops
- Writing clean and readable functions


## How to Use

1. Clone the repository or download the `gradebook.js` file.
2. Open the file in any code editor (e.g., VS Code).
3. Run the code using the browser console or a JavaScript environment like Node.js.
4. Modify the data to test your own examples or use the functions interactively.

## Example

```js
const students = [
  { name: "Alice", grades: [90, 85, 88] },
  { name: "Bob", grades: [75, 80, 79] }
];

function getAverage(grades) {
  return grades.reduce((a, b) => a + b) / grades.length;
}

console.log(getAverage(students[0].grades)); // Output: 87.67
