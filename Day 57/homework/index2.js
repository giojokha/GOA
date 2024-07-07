const mainObject = {
    object1: {
        name: 'Object 1',
        value: 10
    },
    object2: {
        name: 'Object 2',
        value: 20
    }
};

console.log("Initial Objects:");
console.log(mainObject.object1);
console.log(mainObject.object2);

mainObject.object1.value = 15;
mainObject.object2.name = 'Updated Object 2';

console.log("Modified Objects:");
console.log(mainObject.object1);
console.log(mainObject.object2);
