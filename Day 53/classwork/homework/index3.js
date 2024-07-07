const calculator = {
    addition: function(num1, num2) {
        let result = num1 + num2;
        console.log(`Addition Result: ${result}`);
    },

    subtraction: function(num1, num2) {
        let result = num1 - num2;
        console.log(`Subtraction Result: ${result}`);
    },

    multiplication: function(num1, num2) {
        let result = num1 * num2;
        console.log(`Multiplication Result: ${result}`);
    },

    division: function(num1, num2) {
        if (num2 === 0) {
            console.log("Error: You Cannot Divide By Zero!");
            return;
        }
        let result = num1 / num2;
        console.log(`Division Result: ${result}`);
    },

    equality: function(num1, num2) {
        let result = num1 === num2;
        console.log(`Equality Result: ${result}`);
    }
};

calculator.addition(5, 3);       
calculator.subtraction(10, 4);  
calculator.multiplication(7, 2); 
calculator.division(20, 5);    
calculator.division(10, 0);     
calculator.equality(5, 5);   
calculator.equality(5, 10); 