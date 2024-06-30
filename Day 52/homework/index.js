const myInfo = {
    firstName:"George",
    lastName: "Jokhadze",
    age: 16,
    residence:"Tbilisi Georgia",
    interest: "Programming"
}

function infoJoin(firstName, lastName, age, residence, interest) {
    return `Hello, I am ${firstName} ${lastName}. I am ${age} years old and live in ${residence}. My hobby is ${interest}.`;
}