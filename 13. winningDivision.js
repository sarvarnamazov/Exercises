/*
    +html
    Exercise: Winning Division

    Write a program that determines which of a company’s four divisions (Northeast,
    Southeast, Northwest, and Southwest) had the greatest sales for a quarter. It should
    include the following two functions.
    • getSales() is passed the name of a division. It asks the user for a division’s
    quarterly sales figure, validates the input, then returns it. It should be called
    once for each division.
    • findHighest() is passed the four sales totals. It determines which is the
    largest and prints the name of the high grossing division, along with its sales figure.

    Input Validation: Do not accept dollar amounts less than $0.00.
*/

let getSales = (name = '') => {
    let input = parseInt(prompt(`Enter the quarterly sales for the ${name}.`))
    while (input < 0) {
        input = parseInt(prompt(`Input must be greater than 0. Re enter the input for ${name}.`))
    }
    return input;

}

let findHighest = (NE, SE, NW, SW) => {

    if (NE > SE && NE > NW && NE > SW) {
        console.log(`Northeast is the highest with the amount of ${NE}`);
    } else if (SE > NE && SE > SW) {
        console.log(`Southeast is the highest with the amount of ${SE}`);
    } else if (NW > SW) {
        console.log(`Northwest is the highest with the amount of ${NW}`);
    } else {
        console.log(`Southwest is the highest with the amount of ${SW}`);
    }

}

let NE, SE, NW, SW;

NE = getSales('Northeast');
SE = getSales('Southeast')
NW = getSales('Northwest');
SW = getSales('Southwest');

findHighest(NE, SE, NW, SW);