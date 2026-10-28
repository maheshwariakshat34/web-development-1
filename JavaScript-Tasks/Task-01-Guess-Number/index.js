let number=Math.floor(Math.random()*100)+1;
let guessLeft=7;

const input=document.getElementById("guessinput");
const button=document.getElementById("guessbtn");
const message=document.getElementById("message");
const attempts=document.getElementById("attempts");

button.addEventListener("click",function(){
    let guess=Number(input.value);
    if(input.value==="" || guess<1 || guess> 100){
        message.textContent="Enter a number from 1 to 100";
        return;
    }
    guessLeft--;

    if(guess===number){
        message.textContent="You won";
        endGame();
    }
    else if(guess>number){
        message.textContent="Too high";

    }
    else{
        message.textContent="Too low";
    }
    attempts.textContent="Guesses left: " + guessLeft;

    if(guessLeft===0 && guess!==number){
        message.textContent= "Game over! Number was " + number;
        endGame(  );
    }

})
function endGame(){
    input.disabled=true;
    button.disabled=true;
}
