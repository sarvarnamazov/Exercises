/*
    +html
    Exercise: Random Number Guessing Game

    1. Write a program that generates a random number and asks the user to guess what the
    number is. If the user's guess is higher than the random number, the program should
    display “Too high, try again.” If the user’s guess is lower than the random number, the
    program should display “Too low, try again.” The program should use a loop that
    repeats until the user correctly guesses the random number.

    2. Enhance the program so it keeps a count of the number of guesses
    that the user makes. When the user correctly guesses the random number,
    the program should display the number of guesses.

*/

let random = Math.floor(Math.random() * 5) + 1;
let userGuess = prompt('Enter a number to guess the game.');
let counter = 0;

while (userGuess != 's') {
    counter = counter + 1;
    if (random < userGuess) {
        console.log(`Your guess: ${userGuess}`);
        console.log(`Computer guess: ${random}`);
        console.log('You guessed too high!');
    } else if (random > userGuess) {
        console.log(`Your guess: ${userGuess}`);
        console.log(`Computer guess: ${random}`);
        console.log('You guessed too low!');
    } else {
        console.log(`Your guess: ${userGuess}`);
        console.log(`Computer guess: ${random}`);
        console.log('You guessed right. Congratulations!!!');
        console.log(`You have guessed ${counter} times.`);
    }
    random = Math.floor(Math.random() * 5) + 1;
    userGuess = prompt('Enter a number to tart again or type (s) to stop.');
}