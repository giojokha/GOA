const familyAges = [53, 55, 82, 28, 16];
const agesAfter25Years = familyAges.map(age => age + 25);

agesAfter25Years.forEach((age, index) => {
    console.log(`Family member ${index + 1} will be ${age} years old after 25 years.`);
});