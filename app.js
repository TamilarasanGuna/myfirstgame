
const submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const resetButton = document.getElementById("reset");

var guessNumber = Math.round(Math.random()*100);
var message;


submitButton.onclick = (evt)=>{
    let userInput = document.getElementById("user-input").value;
    if(userInput>guessNumber)message = "Your guess is greater than the correct answer"
else if (userInput<guessNumber) message = "Your guess is lesser than the correct answer"
else {message = "Congrats! You have won";}

$message.innerHTML = message;
}

resetButton.onclick = (evt)=>{
    location.reload();
}




