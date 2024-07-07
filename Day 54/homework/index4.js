const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Your First Name: ', (firstName) => {
    rl.question('Enter Your Last Name: ', (lastName) => {
        rl.question('How Old Are You: ', (age) => {
            rl.question('Enter Your Place of Residence: ', (residence) => {
                rl.question('Whats your Profession: ', (profession) => {
                    rl.question('What Are Your Hobbies? (please use commas(",") while typing multiple answers): ', (hobbies) => {
                        rl.question('Enter Your Other Info about yourself: ', (additionalInfo) => {
                            const sentence = `${firstName} ${lastName} არის ${age} წლის, რომელიც ცხოვრობს ${residence}-ში. 
                            ის სამუშაოდ მოქმედებს ${profession}-სთან და მეტის შესახებ ჰობი არის ${hobbies}. 
                            დამატებითი ინფორმაცია: ${additionalInfo}`;
                            
                            console.log(sentence);
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});