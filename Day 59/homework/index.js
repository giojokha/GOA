function performArithmeticOperation(str, num) {
    const parsedNum = parseFloat(num);

    if (isNaN(parsedNum)) {
        console.log("Invalid number input. Please provide a valid number.");
        return;
    }

    const addition = str + parsedNum;
    const subtraction = str - parsedNum;
    const multiplication = str * parsedNum;
    const division = str / parsedNum;

    console.log(`Addition (${str} + ${parsedNum}):`, addition);
    console.log(`Subtraction (${str} - ${parsedNum}):`, subtraction);
    console.log(`Multiplication (${str} * ${parsedNum}):`, multiplication);
    console.log(`Division (${str} / ${parsedNum}):`, division);
}

performArithmeticOperation(10, 5);
performArithmeticOperation(-3, 2);
