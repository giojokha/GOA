const userInput = prompt('Enter a number:');
const number = parseInt(userInput);
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}