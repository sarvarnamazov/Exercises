/*
    Exercise: Membership Fees Increase

    A country club, which currently charges $2,500 per year for membership, has
    announced it will increase its membership fee by 4% each year for the next six years.
    Write a program that uses a loop to display the projected rates for the next six years.
*/

function project() {
    let charges = 2500;
    const rate = 0.04;
    const year = 6;

    for (let i = 1; i <= year; i++) {
        charges += (rate * charges)
        console.log(`The projected rate for the ${i} year is $${charges}`);
    }
}
project()