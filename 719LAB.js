function calcWordFrequencies(words) {

    let wordArray = words.split(" ");
    
    let wordMap = new Map();
    
    for (let word of wordArray) {
       if (wordMap.has(word)) {
          wordMap.set(word, wordMap.get(word) + 1);
       } else {
          wordMap.set(word, 1);
       }
    }
    
       for (let [word, frequency] of wordMap) {
          console.log(word + " " + frequency);
       }
    }
    
    console.log("Testing calcWordFrequencies()...");
    calcWordFrequencies("hey hi Mark hi mark");
    
    
    
    // Do NOT remove the following line:
    export default calcWordFrequencies;