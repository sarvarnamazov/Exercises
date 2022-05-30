/*
    Exercise: Pennies for Pay

    Write a program that calculates how much a person would earn over a period of time
    if his or her salary is one penny the first day and two pennies the second day, and continues
    to double each day. The program should ask the user for the number of days.
    Display a table showing how much the salary was for each day, and then show the
    total pay at the end of the period. The output should be displayed in a dollar amount,
    not the number of pennies.
    Input Validation: Do not accept a number less than 1 for the number of days worked.
*/

function pay(day = 1) {
    //according to the google, 1 penny = $0.01
    const dollar = 0.01;
    let penny = 1;
    let total = 0;

    if (day < 1) {
        console.log('Days cannot be less than 1!');
    } else {
        for (let i = 1; i <= day; i++) {
            total += penny;
            console.log(`Day ${i} $${penny * dollar}`);
            penny *= 2;
        }
        console.log(`Total salary for ${day} days = $${total * dollar}`);
    }
}
pay(0)
pay(4)