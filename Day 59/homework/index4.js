function parseAndPrint(element) {
    const parsedInt = parseInt(element);
    const parsedFloat = parseFloat(element);

    console.log(`Input: ${element}`);
    console.log(`Parsed Integer: ${parsedInt}`);
    console.log(`Parsed Float: ${parsedFloat}`);
}

parseAndPrint("123");      
parseAndPrint("3.14");     
parseAndPrint("10.5px");  
parseAndPrint(42);         
parseAndPrint(3.14159);    
parseAndPrint(true);