function sortEvens(numArray) {

    let evenNums = numArray.filter(num => num % 2 === 0); 
    
    evenNums.sort((a,b) => a - b);
    
    return evenNums;
    
    }
    
    console.log("Testing sortEvens()...");
    let nums = [4, 2, 9, 1, 8];
    let evenNums = sortEvens(nums);
    console.log(evenNums);
    
    
    // Do NOT remove the following line:
    export default sortEvens;