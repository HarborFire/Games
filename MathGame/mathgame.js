let number1;
let number2;
let guess;
let answer = number1 + number2;

document.getElementById("generateBtn").onclick = function(){
    number1 = Math.floor(Math.random() * 20 + 1);
    number2 = Math.floor(Math.random() * 20 + 1);
    document.getElementById("number1").innerHTML = number1;
    document.getElementById("number2").innerHTML = number2;
}

document.getElementById("submitBtn").onclick = function(){
    guess = document.getElementById("guessBox").value
    if(!(guess == number1 + number2)){
        document.getElementById("answerLabel").innerHTML = "bad"
    }
    else if(guess == number1 + number2){
        document.getElementById("answerLabel").innerHTML = "good"
    }
}