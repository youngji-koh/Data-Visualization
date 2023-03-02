let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

// arrGuesses is the array that contains the history of guesses
let arrGuesses = [];
// - ex. 
// arrGuesses = [10, 80, 20, 70, 30, 60, 50]

// objGuesses is the object that contains the history of guesses
const objGuesses = {};
objGuesses["low"] = [];
objGuesses["high"] = [];
// - ex.
// objGuesses = {
//     correct: 50,
//     low: [10,20,30],
//     high: [60,70,80]
//     }


function checkGuess() {
    // userGuess is the value of element that has the class of 'guessField';
    let userGuess = Number(guessField.value);
    
    //  add a usderGuess(value) to arrGuesses(array)
    arrGuesses.push(userGuess);

    console.log(arrGuesses);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += userGuess + ' ';
    
    // User guesses answer in 10 turns
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';

        objGuesses["correct"] = userGuess;

        console.log(objGuesses)
        setGameOver();
    
    // User exceeds the guess counts
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    
    // User continue the game
    } else {
        lastResult.textContent = 'Wrong !';
        lastResult.style.backgroundColor = 'red';
        
        // User guesses lower than answer
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!' ;

            /* ********************

                2. implement here 
                add a userGuess to objgGesses(high or low) 
                reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

            ********************/

        
        // User guesses higher than answer
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
            
            /* ********************

                3. implement here 
                add a userGuess to objgGesses(high or low)
                reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

            ********************/
     
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {

    // disable the guess field and guess submit
    guessField.disabled = true ; 
    guessSubmit.disabled = true ; 
   
    // create the button element, resetButton    
    resetButton = document.createElement('button'); 
    resetButton.textContent = 'Start new game'; 
    
    // append the button on the document
    document.body.appendChild(resetButton); 

    // add the event listener as clicking it, and bind it into the function, resetGame()
    resetButton.addEventListener('click', resetGame);

}

function resetGame() {


    // reset the guess count
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    // for all the selected queries in resetParas
    
    // Initialize the all vlaues
    for (let i = 0 ; i < resetParas.length ; i++) { 
        resetParas[i].textContent = '';
    }

   // remove the button on the document
   resetButton.parentNode.removeChild(resetButton);    

    /* ********************

        4. implement here 
        enable the guessField and guessSubmit
        hint : use HTMLSelectElement.disabled
        https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled

    ********************/

    // enable guess field
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';

    // make the random number
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
