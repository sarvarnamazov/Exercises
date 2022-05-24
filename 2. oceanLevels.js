/*

    Exercise: Ocean Levels

    Assuming the ocean’s level is currently rising at about 1.5 millimeters per year, write a
    program that displays a table showing the number of millimeters that the ocean will
    have risen each year for the next 25 years.
*/
function ocean() {
    let level = 1.5;
    for (let i = 1; i <= 25; i++) {
        level += i
        console.log(level);
    }

}
ocean()