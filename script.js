//getting the DOM elements

const guessNumber = document.querySelector('#guessNumber');
const guessSubmit = document.querySelector('#guessSubmit');
const guesses = document.querySelector('#guesses');
const lastResult = document.querySelector('#lastResult');
const lowhigh = document.querySelector('#lowhigh');

//generates random number
let randomNumber =Math.floor((Math.random()*100)+1);
//console.log(randomNumber);
let countGuess = 1;
let resetButton;
guessNumber.focus();

//this function checks the input and shows the result

let checkGuess =()=>{
    
    let userNumber = Number(guessNumber.value);
    if(userNumber===1){
        guesses.textContent= 'Previous value: ';
    }
    guesses.textContent +=userNumber + ' ';
    if(userNumber===randomNumber){
        lastResult.textContent = "Congrats!!You guessed the correct number.";
        lastResult.style.color = 'yellow';
        lowhigh.textContent = "";
        setGameover();
    }else if(countGuess===10){
        lastResult.textContent = "Opps!!You ran out of guesses";
        lastResult.style.color = "orange";
        lowhigh.textContent = "";
        setGameover();
    }else{
        lastResult.textContent = "Wrong number!!!!!!";
        lastResult.style.color = "red";
    }
    if(userNumber>randomNumber){
        lowhigh.textContent= "The number you guessed is too big!!";
        lowhigh.style.color = 'red';
    }else if(userNumber<randomNumber){
        lowhigh.textContent = "The number you guessed is too small!!";
        lowhigh.style.color = 'red';
    }
    countGuess++;
    guessNumber.value = "";
    guessNumber.focus();
}
//event listner to run the code
guessSubmit.addEventListener('click',checkGuess);

let setGameover = ()=>{
    guessSubmit.disabled = true;
    guessNumber.disabled = true;
    let resetdisplay = document.querySelector('#display');
    resetButton= document.createElement('button');
    resetButton.textContent = "Start new game";
    resetdisplay.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}

let resetGame = ()=>{
    countGuess = 1;
    let displayparse = document.querySelectorAll('#display p');
    let i = displayparse.length;
    for(let j=0;j<i;j++){
        displayparse[j].textContent = "";
    }
    resetButton.remove();
    guessNumber.disabled = false;
    guessSubmit.disabled = false;
    guessNumber.value = '';
    guessNumber.focus();
    let randomNumber =Math.floor((Math.random()*100)+1);

}