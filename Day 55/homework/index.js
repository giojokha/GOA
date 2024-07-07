const firstNumberInput = prompt('Enter the first number:');
const secondNumberInput = prompt('Enter the second number:');

const firstNumber = parseFloat(firstNumberInput); 
const secondNumber = parseFloat(secondNumberInput);

const addition = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;


console.log(`Addition: ${firstNumber} + ${secondNumber} = ${addition}`);
console.log(`Subtraction: ${firstNumber} - ${secondNumber} = ${subtraction}`);
console.log(`Multiplication: ${firstNumber} * ${secondNumber} = ${multiplication}`);
console.log(`Division: ${firstNumber} / ${secondNumber} = ${division}`);