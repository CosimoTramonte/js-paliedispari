
const word = prompt("Scrivi una parola").trim().toLowerCase()

let result = palindromeDetector(word)

function palindromeDetector(firstString){

    let firstArray = []
    let secondArray = []

    firstArray = firstString.split("")

    secondArray = firstString.split("").reverse()


    const message = (firstArray.join() == secondArray.join()) ? 'La parola è palindroma' : 'La parola non è palindroma';

   console.log(firstArray);
   console.log(secondArray);
    

    return message
}

console.log(result)
