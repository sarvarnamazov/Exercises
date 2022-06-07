/*
    +html
    Exercise:Average Rainfall

    Write a program that uses nested loops to collect data and calculate the average rainfall
    over a period of years. The program should first ask for the number of years. The
    outer loop will iterate once for each year. The inner loop will iterate twelve times,
    once for each month. Each iteration of the inner loop will ask the user for the inches
    of rainfall for that month.
    After all iterations, the program should display the number of months, the total
    inches of rainfall, and the average rainfall per month for the entire period.

    Input Validation: Do not accept a number less than 1 for the number of years. Do not
    accept negative numbers for the monthly rainfall.
*/


let total = 0;
let average = 0;

let year = prompt('Enter the number of years.');
while (year < 1) {
    console.log('The number of years cannot be less than 1.');
    year = prompt('Enter the number of years.');
}

let month = prompt('Enter the number of months.')
while (year < 0) {
    console.log('The number of months cannot be less than 0.');
    month = prompt('Enter the number of months.')
}

for (let i = 1; i <= year; i++) {
    for (let j = i; j <= month; j++) {
        let inches = prompt(`Enter the number of inches for the ${j} month.`)
        total += parseInt(inches);
        average = total / month;
    }
}
console.log(`The number of months: ${parseInt(month)}`);
console.log(`The total inches of rainfall: ${total}`);
console.log(`The average rainfal per month: ${average}`);