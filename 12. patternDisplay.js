/*
    Exercise: Pattern Displays

    Write a program that uses a loop to display Pattern A below, followed by another
    loop that displays Pattern B.
    Pattern A
    +
    ++
    +++
    ++++
    +++++
    ++++++
    +++++++
    ++++++++
    +++++++++
    ++++++++++

    Pattern B
    ++++++++++
    +++++++++
    ++++++++
    +++++++
    ++++++
    +++++
    ++++
    +++
    ++
    +
*/
console.log('Pattern A');
for (let i = 1; i <= 10; i++) {
    console.log('+'.repeat(i));
}
console.log('');
console.log('Pattern B');
for (let j = 10; j >= 1; j--) {
    console.log('+'.repeat(j));
}