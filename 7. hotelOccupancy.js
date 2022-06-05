/*

    +html
    Exercise: Hotel Occupancy

    Write a program that calculates the occupancy rate for a hotel. The program should
    start by asking the user how many floors the hotel has. A loop should then iterate
    once for each floor. In each iteration, the loop should ask the user for the number of
    rooms on the floor and how many of them are occupied. After all the iterations, the
    program should display how many rooms the hotel has, how many of them are occupied,
    how many are unoccupied, and the percentage of rooms that are occupied. The
    percentage may be calculated by dividing the number of rooms occupied by the number
    of rooms.

    Input Validation: Do not accept a value less than 1 for the number of floors. Do not
    accept a number less than 10 for the number of rooms on a floor.
*/
let unoccupancy = 0;
let total = 0;
let floors = prompt('Enter the number of floors: ');

while (floors < 1) {
    console.log('The number of floors cannot be less than 1!');
    floors = prompt('Enter the number of floors: ');
}

for (let i = 1; i <= floors; i++) {
    let rooms = prompt(`Enter the number of rooms in the ${i} floor!`);
    total += parseInt(rooms)
    while (rooms < 10) {
        console.log('The number of rooms cannot be less than 10!');
        rooms = prompt(`Enter the number of rooms in the ${i} floor!`);
    }
    let occupancy = prompt('Enter the number of rooms occupied!')
    unoccupancy += rooms - occupancy;
}
console.log(`There are ${total} rooms in the hotel.`);
console.log(`${total - unoccupancy} rooms were occupied.`);
console.log(`Total ${unoccupancy} rooms are available.`);
console.log(`The persentage of occupied rooms: ${(total - unoccupancy) / total}%`)