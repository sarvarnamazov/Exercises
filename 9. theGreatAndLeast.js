/*
    +html
    Exercise: The Greatest and Least of These

    Write a program with a loop that lets the user enter a series of integers. The user
    should enter -99 to signal the end of the series. After all the numbers have been
    entered, the program should display the largest and smallest numbers entered.
*/

let num = parseInt(prompt('Enter a number to begin the programm.'))
let largest, smallest;
largest = smallest = num;

while (num != -99) {
    if (num > largest) {
        largest = num
    }
    if (num < smallest) {
        smallest = num;
    }
    num = parseInt(prompt('Enter the next number or type -99 to finish.'));
}

console.log(`The largest number is: ${largest}`);
console.log(`The smalles number is: ${smallest}`);