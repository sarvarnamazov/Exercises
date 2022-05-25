/*
Exercise: Calories Burned

    Running on a particular treadmill you burn 3.9 calories per minute. Write a program
    that uses a loop to display the number of calories burned after 10, 15, 20, 25, and 30
    minutes.
*/

function calories(m) {
    let cal = 3.9;
    for (let i = 0; i <= m; i++) {
        cal += i;
    }
    console.log(`You have burned ${cal} calories in ${m} minutes`);
}
calories(10)
calories(15)
calories(20)
calories(25)
calories(30)