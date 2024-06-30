function ageCheck(age) {
    if (age > 18) {
        console.log(`${age} is greater than 18`);
    } else if (age < 18) {
        console.log(`${age} is less than 18`);
    } else {
        console.log(`${age} is equal to 18`);
    }
}

ageCheck(25);
ageCheck(12);
ageCheck(18);