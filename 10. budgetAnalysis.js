/*
    +html
    Exercise: Budget Analysis

    Write a program that asks the user to enter the amount that he or she has budgeted
    for a month. A loop should then prompt the user to enter each of his or her expenses
    for the month, and keep a running total. When the loop finishes, the program should
    display the amount that the user is over or under budget.
*/

let budget = parseInt(prompt('Enter the amount of the monthly budget.'));
let expenses = parseInt(prompt('Enter the amount of expenses.'));
let total = 0;
let i = 0;

while (expenses != -1) {
    total += expenses;
    i++;
    expenses = parseInt(prompt(`Enter the ${i} expense or -1 to finish.`));
}

console.log(`Your budget: $${budget}`);
console.log(`Your total expenses: $${total}`);
if (budget > total) {
    console.log(`Budget is over the expenses with the amount of $${budget - total}.`);
} else if (budget < total) {
    console.log(`Expenses are over the budget with the amount of -$${total - budget}.`);
} else {
    console.log('The total budget and the amount of expenses are equal.');
}