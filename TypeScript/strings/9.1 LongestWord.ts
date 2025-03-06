const getLongestWord  = (str : string)=>{
    let words  = str.split(' '); 
    let longestWord : string = "";
    let wordsCount = {}
    words.forEach(word => {
        let length : number = word.split("").length;
        wordsCount[`${word}`] = length;
        if(length > longestWord.length){
            longestWord = word;
        }
    })
    return longestWord;
}

console.log(getLongestWord("hi this is jaydeep"))