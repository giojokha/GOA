document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;
    const profession = document.getElementById('profession').value;
    const hobbies = document.getElementById('hobbies').value;


    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Age:", age);
    console.log("City:", city);
    console.log("Profession:", profession);
    console.log("Hobbies:", hobbies);
});