console.log('JS4 Assignment');

/* ANCHOR 1a.
Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
print the result tot he console */
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let minusAge =ages[ages.length-1] - ages[0];
console.log("minusAge",minusAge);

/* ANCHOR 1b.
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
print the result to the console */
ages.push(100)
console.log("Ages after pushing a new value", ages);
let minusAgePush =ages[ages.length-1] - ages[0];
console.log("minusAge", minusAgePush);

/* ANCHOR 1c.
Use a loop to iterate through the array and calculate the average age.
print the result to the console */
let sumOfAges = 0;

for (let i =0; i < ages.length; i++) {
   // console.log(i, "test");
   sumOfAges += ages[i];
   console.log("index:", i, "sumOfAges:", sumOfAges);
}
console.log ("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log ("Average", average);

/* ANCHOR 2a.
Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
print the result to the console */
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0;

for (let i = 0; i < names.length; i++) {
    //console.log(i, "test");
    totalChars += names[i].length;
    console.log("index:", i, "name:", names[i], "totalChars:",
    totalChars);
}
let averageName = totalChars / names.length;
console.log(" Average of Names:", averageName);

/* ANCHOR 2b.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
Print the result to the console. */

let concatNames = "";
for (let i = 0; i < names.length; i++) {
   // console.log(i, "test");
   concatNames = concatNames.concat(names[i] + " ")
   console.log("Names concatenated", concatNames);
}

/* ANCHOR 3.
How do you access the last element of any array? */
console.log("Last element of ages array:", ages[ages.length-1]);


/* ANCHOR 4.
How do you access the first element of any array? */
console.log(" First element of ages array:", ages[0]);


/* ANCHOR 5.
Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array */
let nameLenghts =[];
for (let i = 0; i < names.length; i++) {
   // console.log(i, "test");
   nameLenghts.push(names[i].length);
   console.log("Name lenghts array:", nameLenghts);
}

/* ANCHOR 6.
Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
print the result to the console */
let charsTotal =0;
for (let i = 0; i< nameLenghts.length; i++) {
   //console.log(i, "test");
   charsTotal += nameLenghts[i];
   console.log("CharsTotal:", charsTotal);
}

/*ANCHOR 7.
Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/
function concatWords(word, n) {
 console.log("word par:", word, "n par:", n);
let concat = word.repeat(n);
console.log(concat);
}
concatWords("Hello", 3);


/* ANCHOR 8. 
Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space. */
function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  console.log(fullName);
}
fullName ("Emma", "Smith");


/* ANCHOR 9. 
Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/
let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];

function sumNumbersArray(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        //console.log(i, "test");
        total += array[i];
        console.log("total:", total);
    }

    if (total > 100) {
        console.log("total:", total, true);
        return true;
    } else {
        console.log("total:", total, false);
        return false;
    }
  }
   sumNumbersArray(numbers1);


/* ANCHOR 10. 
Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/
function calculateNumbersAverage(array) {
    let total = 0;

    for(let i = 0; i < array.length; i++) {
       // console.log(i, "test");
       total += array[i];
       console.log("calculate Function, total:", total);
    }

    let average = total / array.length;
    console.log("Average of Numbers:", average);
    return average;
}
calculateNumbersAverage(numbers1);


/* ANCHOR 11. 
Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
*/
let numbers3 = [100,100,100];
let numbers4 = [100,100,99];

function twoAverages(array1, array2) {
    console.log("parameters:", array1, array2);
    let total1 = 0;
    let total2 = 0;

for (const number of array1) {
    total1 += number
    console.log(" Current number loop 1:", number, "total:", total1)
}
for (const number of array2) {
    total2 += number
    console.log(" Current number loop 2:", number, "total:", total2)
}
let average1 = total1 / array1.length
let average2 = total2 / array2.length

console.log("averags", average1, average2);

if ( average1 > average2) {
     console.log(true);
     return true;
} else if (average1 < average2) {
    console.log(false);
    return false;
}else {
    console.log("numbers are equal");
}
}
twoAverages(numbers3, numbers4);


/* ANCHOR 12. 
Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/
function willBuyDrink(isHotOutside, moneyInPocket) {
   console.log("parameters", isHotOutside, moneyInPocket);
   let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
   console.log("buy a drink?", buyDrink);
   return buyDrink;
}
willBuyDrink(true, 5);


/* ANCHOR 13.
Create a function of your own that solves a problem.
 In comments, write what the function does and why you created it.
*/
let cart = [
    { name: "Item 1", price: 20, quantity: 2 },
    { name: "Item 2", price: 10, quantity: 3 }
  ];
  
  let total = 0;
  
  for(let item of cart) {
    total += item.price * item.quantity;
  }
  
  console.log("Total Cart Price:", total);  
  