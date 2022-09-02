let computerGuess;
let userGuess=[];
let useGuessUpdate=document.getElementById("textOutput");
let useNumberUpdate=document.getElementById("inputBox");
let audio=new Audio('./audio/music.mp3');
const init = () => {
    computerGuess =Math.floor(Math.random()*100)+1;
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
};
const startGame = () => {
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
};

//reload the page
const newGameBegin = () => {
    audio.play();
    window.location.reload();
}
//start new game
const startNewGame = () => {
    document.getElementById("newGameButton").style.display="inline";
    useNumberUpdate.setAttribute("disabled",true);
}
const compareGuess = () =>{
    audio.play();
    const userNumber =Number(document.getElementById("inputBox").value);
    userGuess=[...userGuess,userNumber];
    document.getElementById("guesses").innerHTML=userGuess;

    // check the value low or high
    if(userGuess.length < maxGuess){
        if(userNumber>computerGuess){
            useGuessUpdate.innerHTML="Your Guess is High 😮";
            useNumberUpdate.value="";
        }else if(userNumber<computerGuess){
            useGuessUpdate.innerHTML="Your Guess Is Low 😔";
            useNumberUpdate.value="";
        }else{
            useGuessUpdate.innerHTML="Wow It's Correct 😍";
            useNumberUpdate.value="";
            startNewGame();
        }
    }else{
        if(userNumber>computerGuess){
            useGuessUpdate.innerHTML=`You Loose!! correct number was ${computerGuess}`;
            useNumberUpdate.value="";
            startNewGame();
        }else if(userNumber<computerGuess){
            useGuessUpdate.innerHTML=`You Loose!! correct number was ${computerGuess}`;
            useNumberUpdate.value="";
            startNewGame();
        }else{
            useGuessUpdate.innerHTML="Wow It's Correct 😍";
            useNumberUpdate.value="";
            startNewGame();
        }
    }
    document.getElementById("attempts").innerHTML=userGuess.length;
};
const easyMode = () => {
    audio.play();
    maxGuess =10;
    startGame();
};
const hardMode = () => {
    audio.play();
    maxGuess =5;
    startGame();
};
