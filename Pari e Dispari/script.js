
const inputnumber = document.getElementById("number")
const btnGioca = document.getElementById("gioca")
const selectChoose = document.getElementById('choose');

btnGioca.addEventListener("click", function(){
    
    const number = parseInt(inputnumber.value);
    const pariDispari = selectChoose.value;

    document.getElementById("outputPlayer").innerHTML = number

    const numeroComputer = getRandomNumber(1,5)

    document.getElementById("outputComputer").innerHTML = numeroComputer

    const result = getResult(numeroComputer,number)
    document.getElementById("outputResult").innerHTML = result
})


function getRandomNumber(min, max){
    
    const randomNumber = Math.floor(Math.random() * (max - min + 1 ) + min);

    return randomNumber
}

function getResult(numA, numB) {
    
    let result;

    let total = numA + numB

    if(!(total % 2) && selectChoose.value === "pari"){
        result = total + " hai vinto"
    } else if((total % 2 !== 0) && selectChoose.value === "dispari"){
        result = total + " hai vinto"
    } else{
        result = total + " hai perso"
    }

    return result
}

