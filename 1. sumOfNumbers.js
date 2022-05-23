/*
    Exercise: Sum of numbers

    Write a program that asks the user for a positive integer value. The program should
    use a loop to get the sum of all the integers from 1 up to the number entered. For
    example, if the user enters 50, the loop will find the sum of 1, 2, 3, 4, ... 50.

*/
const sum = (num) => {
    let total = 0
    if (num > 0) {
        for (let i = 0; i <= num; i++) {
            total += i;
            console.log(i);
        }
        console.log('total is', total);
    }
    console.log('Number is equal or less than 0');
}
sum(50)