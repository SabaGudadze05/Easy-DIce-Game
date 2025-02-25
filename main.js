const diceOne = document.querySelector(".img1");
const diceTwo = document.querySelector(".img2");

const header = document.querySelector("h1");

// fucntional

window.addEventListener("load", () => {
    if (sessionStorage.getItem("visited")) {
        let firstNum = Math.floor(Math.random() * 6 + 1);
        let secondNum = Math.floor(Math.random() * 6 + 1);

        diceOne.src = `./images/dice${firstNum}.png`;
        diceTwo.src = `./images/dice${secondNum}.png`;
        console.log(firstNum, secondNum);

        if (firstNum > secondNum) {
            header.innerText = "🚩 Player one wins!";
        } else if (secondNum > firstNum) {
            header.innerText = "Player two wins! 🚩";
        } else {
            header.innerText = "Draw !";
        }
    }
    sessionStorage.setItem("visited", "true");  
});
console.log(Math.floor(Math.random() * 6) + 1);
