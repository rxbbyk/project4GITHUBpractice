function printSum(x, y) {

    let numX = parseFloat(x);
    let numY = parseFloat(y);
    
    const isXNaN = isNaN(numX);
    const isYNaN = isNaN(numY);
    
    if (isXNaN && isYNaN) {
       console.log(`'${x}' and '${y}' are not numbers.`);
    } else if (isXNaN) {
       console.log(`'${x}' is not a number.`);
    } else if (isYNaN) {
       console.log(`'${y}' is not a number.`);
    } else {
       let sum = numX + numY;
       console.log(`Sum is ${sum}.`);
    }
       
    }
    
    console.log("Testing printSum()...");
    
    printSum(3, 6);            // 9
    printSum(3.5, 6.1);        // 9.6
    printSum("hello", 6);      // 'hello' is not a number
    printSum(10, "hi");        // 'hi' is not a number
    printSum("hello", "hi");   // 'hello' and 'hi' are not numbers
    
    
    // Do NOT remove the following line
    export default printSum;