// ============== Exercise 1 : Building Management ============== /


let building = {
    number_levels : 4,
    number_of_apt_by_level : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    name_of_tenants : ["Sarah", "Dan", "David"],
    number_of_rooms_and_rent:  {
        "Sarah": [3, 990],
        "Dan":  [4, 1000],
        "David": [1, 500],
    },
}

// 1. Console.log the number of levels in the building.

console.log(building["number_levels"]);

// 2. Console.log how many apartments are on levels 1 and 3.

console.log(building["number_of_apt_by_level"]["1"]);
console.log(building["number_of_apt_by_level"]["3"]);

// 3. Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log(building["name_of_tenants"][1]);
console.log(building["number_of_rooms_and_rent"]["Dan"][0]);

// 4. Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.

let sumOfRent = building["number_of_rooms_and_rent"]["Sarah"][1] + building["number_of_rooms_and_rent"]["David"][1];
let rentDan = building["number_of_rooms_and_rent"]["Dan"][1];
while (sumOfRent >= rentDan) {
    rentDan += 100;
}
console.log(rentDan)


// ============== Exercise 2 : Divisible by Three ============== //

let numbers = [123, 8409, 100053, 333333333, 7]

for (i in numbers) {
    if(i % 3 === 0) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}

// ============== Exercise 3 : Playing With Numbers ============== //

let age = [20,5,12,43,98,55];


// Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for and while loops.

// 1. Console.log the sum of all the numbers in the age array.

let sum = 0;
for (i in age) {
    sum += age[i]
}

console.log(sum)

// 2. Console.log the largest age in the array.

let largest = 0;

for (i in age) {
    if (age[i] > largest) {
        largest = age[i]
    }
}

console.log(largest);