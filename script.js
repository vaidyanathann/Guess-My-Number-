'use strict';
/*
console.log(document.querySelector('.message').
textContent);
document.querySelector('.message').textContent = 'Correct Number!'
console.log(document.querySelector('.message').
textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//Handler Function

const displayMsg = function(message){
    document.querySelector('.message').textContent = message;
}


let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20
let highscore = 0

// const x = function() {console.log(23)};
document.querySelector('.check').addEventListener('click', function (){

const guess = Number(document.querySelector('.guess').value);
//When there is no input 
if (!guess){
    if (score>1){
       displayMsg('No Answer!');
        // document.querySelector('.message').textContent = 'No Answer';
        score--;
        document.querySelector('.score').textContent=score;}
    else{
        displayMsg('You lost the game!')// document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('body').style.backgroundColor = '#bc5a2c';
        document.querySelector('.score').textContent = 0;
    }

}

//When player wins
else if(guess === secretNumber){
    displayMsg('Correct Number!')

    //document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector('.number').style.width = '30rem';

    if (highscore<score){document.querySelector('.highscore').textContent = score;}
}

//When guess is wrong
else if(guess!==secretNumber){ 

    if(score>1){
        guess>secretNumber ? displayMsg('Too High!'):displayMsg('Too Low!');

        //document.querySelector('.message').textContent = guess>secretNumber ? 'Too High!' : 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    } else {document.querySelector('.message').textContent = 'You lost the game';
    document.querySelector('body').style.backgroundColor = '#bc5a2c';
    document.querySelector('.score').textContent = 0;
}

}






//WHen guess is too high
// else if (guess>secretNumber){
//     if(score>1){
//         document.querySelector('.message').textContent = 'Too High!'
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {document.querySelector('.message').textContent = 'You lost the game';
//     document.querySelector('body').style.backgroundColor = '#bc5a2c';
//     document.querySelector('.score').textContent = 0;
// }
// }
// //when guess is too low
// else {
//     if(score>1){
//         document.querySelector('.message').textContent = 'Too Low!'
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {document.querySelector('.message').textContent = 'You lost the game';        document.querySelector('body').style.backgroundColor = '#bc5a2c';

//     document.querySelector('.score').textContent = 0;}}

}

)

const reset = document.querySelector('.again').addEventListener('click', function (){
    
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})