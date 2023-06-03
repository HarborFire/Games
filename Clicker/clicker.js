let count = 0;
let upgrade = 1;
let upgradePrice = 10;
let upgradeCount = 0;

document.getElementById("increaseBtn").onclick = function(){
    count+=upgrade;
    document.getElementById("lab").innerHTML = count;
    document.getElementById
}

document.getElementById("upgradeBtn").onclick = function(){
    if(count >= upgradePrice){
        upgrade*=2;
        count-=upgradePrice
        upgradePrice*=3
        upgradeCount+=1
        document.getElementById("upgradePrice").innerHTML = upgradePrice
        document.getElementById("upgradeCount").innerHTML = upgradeCount
    }
}