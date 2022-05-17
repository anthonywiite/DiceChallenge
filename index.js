let randomNumber1 = Math.floor(Math.random() * 6) +1
console.log(randomNumber1)

let randomNumber2 = Math.floor(Math.random() * 6) +1
console.log(randomNumber2)


document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    let = document.querySelector("h1").innerHTML = "Player 1 Wins!";
} 
 
if (randomNumber1 < randomNumber2) {
    let = document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

if (randomNumber1 == randomNumber2) {
    let = document.querySelector("h1").innerHTML = "It's a Tie!";
}