let correctAnswer = Math.floor(Math.random() * 100) + 1;

document.getElementById("submitBtn").onclick = function(){
    let guess = document.getElementById("input").value;
    if(guess == correctAnswer){
        alert("You're right!");
    }
    else if(guess < correctAnswer){
        alert("too low");
    }
    else if(guess > correctAnswer){
        alert("too big")
    }
    else{
        alert("It's not a number!")
    }
}