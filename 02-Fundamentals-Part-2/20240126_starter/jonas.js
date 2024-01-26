// 033 
/*
function logger() {
    console.log('My name is Cong');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = "Juice with " + apples + " apples and " + oranges + " oranges.";
    return juice;
}

fruitProcessor(5, 0);
// const applejuice = fruitProcessor(5, 0);
// const appleOrangejuice = fruitProcessor(2, 3);
// console.log(applejuice);
// console.log(appleOrangejuice);
console.log(fruitProcessor(5, 0));
console.log(fruitProcessor(2, 3));

const num = Number('23');
console.log(num);
*/
// 034
/*
// function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}
console.log(calcAge1(1987));

// function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
console.log(calcAge2(1987));

const age1 = calcAge1(1987);
const age2 = calcAge2(1987);
console.log(age1, age2);
*/
// 035
/*
// function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
console.log(calcAge2(1987));

// arrow function
const calcAge3 = birthYear => 2023 - birthYear;
console.log(calcAge3(1987));

const yearsUntilRetire = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 60 - age;
    const name = firstName;
    return name + " will retire in " + retirement + " years.";
}
console.log(yearsUntilRetire(1987, "Cong"));
console.log(yearsUntilRetire(1994, "July"));
*/
// 036
/*
function cutFruitPieces(fruit) {
    return fruit * 3;
}
function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const applepieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges);
    const juice = `Juice with  ${applepieces} pieces of apple and ${orangepieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/
// 037
/*
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
const yearsUntilRetire = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 60 - age;
    if (retirement > 0) {
        console.log(`${firstName} will retire in ${retirement} years.`)
        return retirement;
    } else {
        console.log(`${firstName} has alread retired.🎉`)
        return -1;
    }
}
yearsUntilRetire(1987, "Cong");
yearsUntilRetire(1950, "July");
*/
// 038
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins > 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins !`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);
*/
// 039
/*
const friends = ['Michael', 'Steve', 'Peter'];
console.log(friends);



console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Cong';
console.log(friends);
// friends = ['Bob', 'June', 'Cacie'];

const jonas = ['Jonas', 'Zetch', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1991, 1994, 1996];
console.log(years.length);
console.log(years);

const newAge = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(newAge);
*/
// 040
/*
const friends = ['Michael', 'Steve', 'Peter'];
const friendsLength = friends.push('June');
console.log(friendsLength);

friends.unshift('Cessie');
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steve'));
console.log(friends.indexOf('Cessie'));

console.log(friends.includes('Steve'));
console.log(friends.includes('Cessie'));

if (friends.includes('Cessie')) {
    console.log(friends.indexOf('Michael'));
} else {
    console.log(friends.indexOf('Steve'));
}

if (friends.includes('Cessie')) {
    console.log('You have a friend called Peter');
} else {
    console.log('You have a friend called Steve');
}
*/
// 041
/*
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}
console.log(calcTip(20));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];


const billTip = function (bills, tips) {
    return bills + tips;
}
const total = [billTip(bills[0], tips[0]), billTip(bills[1], tips[1]), billTip(bills[2], tips[2])];
console.log(bills, tips, total);
*/
// 043
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedt',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Steve', 'Peter']
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const interestedIn = prompt('What do you want to know about Jonas ? Choose between firstName, lastName, age, job, and friends🥰');


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request ! Choose between firstName, lastName, age, job, and friends🥰');
}

jonas.location = 'Finland';
jonas['twitter'] = '@jonasschmedt';
console.log(jonas);


console.log(`${jonas.firstName} has ${(jonas.friends).length} friends, and his best friend is ${jonas.friends[0]}.`);
*/
// 044
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedt',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steve', 'Peter'],
    hsaDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and hs has ${this.hsaDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};
// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));
// console.log(jonas.calcAge(jonas.birthyear));
console.log(jonas.calcAge());
console.log(jonas.age);

// challenge
// "Jonas is a 46-year old teacher, and he has a driver's license. "
console.log(jonas.getSummary());
*/

// 045
// challenge #3
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
}
console.log(mark.calcBMI());

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
}
console.log(john.calcBMI());

console.log(john.calcBMI() > mark.calcBMI() ? `${john.fullName}'s BMI (${john.calcBMI().toFixed
    (1)}) is higher than ${mark.fullName}'s (${mark.calcBMI().toFixed(1)})!🎉💧` : `${mark.fullName}'s BMI (${mark.calcBMI().toFixed
        (1)}) is higher than ${john.fullName}'s (${john.calcBMI().toFixed(1)})!🎉💧`);
*/

// 046
// console.log('Lifting weights repetition 1 🏋️');

// for (let rep = 1; rep <= 10; rep++) {
//     // write the code we want to repeat
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

/*
const jonas = [
    'Jonas',
    'Schmedt',
    2037 - 1991,
    'teacher',
    ['Michael', 'Steve', 'Peter'],
    true,
    'German'
];
*/

/*
console.log(jonas.length);
// want to individually log every element of the array to the console
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
}
*/

// create a new array that contains the type of each elements
// for (let i = 0; i < jonas.length; i++) {
//     typeArray = [typeof jonas[i]];
//     console.log(typeArray);
// }

// outside the loop, create a new empty array

/*
const typeArray = [];
for (let i = 0; i < jonas.length; i++) {
    // filling types array
    // 1 way
    // typeArray[i] = typeof jonas[i];
    // console.log(typeArray);
    // should be outside the loop, or there will be jonas.length times console.log, 同时每个array递增一个元素
    // 2 way
    // use push to add an element to the end of an array
    typeArray.push(typeof jonas[i]);

}
console.log(typeArray);
*/

// enable to understand how to construct all the different part of the 'for' loop

// 047
// a more pratical example
/*
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);
*/

// break statement 
// to completely terminate the whole loop
// example: to log no other elements after we find a number

/*
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}

// continue statement
// to exit the current iteration of the loop and continue to the next one
// example: to only print the elements that are strings
console.log('--- ONLY STRING ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}
*/

// 048 Looping backwards and loops in loops
const jonas = [
    'Jonas',
    'Schmedt',
    2037 - 1991,
    'teacher',
    ['Michael', 'Steve', 'Peter'],
    true
]; 

// loop from beginning, now we want to loop from 4, 3, 2, 1, 0

for ( let i = jonas.length - 1; i >= 0; i--){
    console.log(jonas[i]);
}

//❓ we have three types of different exercises and we want to repeat each of them five times
for ( let exercise = 1; exercise < 4; exercise++){
    console.log(`\n ---------starting exercise ${exercise}`);
    let exercises = ["Running", "Swimming", "Hiking"];

    for (let rep = 1; rep < 6; rep++ ){
    
        console.log(`Exercise ${exercise} Lifting weight repeatition ${rep}`);
    }  
}
