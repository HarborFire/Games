let x;

document.getElementById("btn").onclick = function(){
    x = Math.floor(Math.random() * 999999999) + 1;
    document.getElementById("lab").innerHTML = x;
}