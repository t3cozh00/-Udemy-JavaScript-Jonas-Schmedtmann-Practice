/* p46_the while loop */
for (let rep = 1; rep <= 10; rep++) {
//     // write the code we want to repeat
   console.log(`Lifting weights repetition ${rep} 🏋️`);
}

let rep = 1; 
while (rep <= 10) {
    console.log(`WHILE: Lifting weighhs repetition ${rep} 🏋️`);
    rep++;
}

/* while loop can be more verstile than for loop, it can be used in a larger variety of situations */

/* an example that does not need a counter, but instead depend on a random varialbe */
/* Example: keep rolling a dice until we roll a six, then stop 
   In this case, we don't know actually beforehand how many times we need to roll, which also refer to how many times the loop should run, so we don't need a counter variable */

let dice = Math.trunc(Math.random() * 6) + 1;
/* Math.trunc(): to get rid of the decimal part. give us a integer between 0 and 5 */
console.log(dice);

while (dice !== 6 ){
    console.log(`You rolled a ${dice}`);
    /* it's the infinite loop */
    dice = Math.trunc(Math.random() * 6) + 1;
}
    /*  Output:
        chesile@chesiles-MacBook-Air 20240126_starter % node p46_theWhileLoop
        You rolled a 4
        You rolled a 3
        chesile@chesiles-MacBook-Air 20240126_starter % node p46_theWhileLoop
        You rolled a 3
        You rolled a 5
        You rolled a 3
        You rolled a 4
        You rolled a 3
        The first output shows after rolling two times, it get a 6, so the loop stops; the second rolling for 6 time to get a 6 to stop rolling 
    */

while (dice !== 6 ){
    console.log(`You rolled a ${dice}`);
    /* it's the infinite loop */
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Lppo is about to end...`)
}
  /* got an empty output where the first dice was a 6, so the loop never even started 
     when the dice is 6 right in the beginning, this loop will have exactly zero iterations, it will never start 
     when you do need a loop without a counter, you can reach for while loop */

/* p47 050 Coding Challenge #4 */
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
*/

// 'calcTip' function
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
function calcTip(){
    for (let i = 0; i < bills.length; i++){
        if (bills[i] >= 50 && bills[i] <= 300){
            tips.push((bills[i]*0.15));
        } else {
            tips.push((bills[i]*0.2));
        }
        totals.push(tips[i] + bills[i]);
    }
}
/* calcTip 函数没有返回任何值
   在这种情况下，calcTip 函数的目的是修改全局作用域中的 tips 和 totals 数组，而不是返回一个值。
   需调用函数并之后分别打印 tips 和 totals 数组，而不需要在 console.log(calcTip()) 中打印函数的返回值 
*/
calcTip();  // 调用函数
console.log(tips);    // 输出小费数组
console.log(totals);  // 输出总金额数组

// or
const calcTip2 = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];
for (let i = 0; i < bills2.length; i++){
    const tip2 = calcTip2(bills2[i]);
    tips2.push(tip2);
    totals2.push(tip2 + bills2[i]);
}
console.log(bills2, tips2, totals2);

// 'calcAverage' function
function calcAverage (arr){
    let sum =0;
    for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    average = sum / arr.length;
    /* 在循环内部初始化 sum 的位置也可能导致每次迭代时 sum 被重置为零, 要将 sum 的初始化移到循环之外。
    */
    }
    return average; //sum / arr.length; 

}
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));

// or
const calcAverage2 = function(arr2){
    let sum2 =0;
    for (let i = 0; i < arr2.length; i++){
    sum2 += arr2[i];
    average2 = sum2 / arr2.length
    }
    console.log(average2);
}
calcAverage2([4, 2, 5, 3, 6]);
//⚠️ 或者
const calcAverage2 = function(arr2){
    let sum2 =0;
    for (let i = 0; i < arr2.length; i++){
    sum2 += arr2[i];
    average2 = sum2 / arr2.length
    }
    return average2;
}
console.log(calcAverage2([4, 2, 5, 3, 6]));

    