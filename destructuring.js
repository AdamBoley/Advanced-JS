//destructuring arrays

let ages = [30, 26, 27]
let johnAge = ages[0]
let maryAge = ages[1]
let joeAge = ages[2]
console.log(johnAge, maryAge, joeAge)
// logs 30 26 27 to the console
//A simple, but long-winded way of breaking an array apart
// each variable is assigned on its own line, plus the variable assignment must reference the index

//ES6 destructuring compresses this into a single line:
let [johnAge2, maryAge2, joeAge2] = ages
console.log(johnAge2, maryAge2, joeAge2)
// also logs 30 26 27 to the console
//note how we are declaring variables in an array, and then assigning each element of that array to the corresponding element 
//of the the ages array


//destructuring objects
//destructuring also works for objects:
//first, the old way:
let jobs = {
    mike: 'designer',
    jill: 'developer', 
    alicia: 'accountant'
}
let mikeJob = jobs['mike'] //also jobs.mike
let jillJob = jobs['jill'] //also jobs.jill
let aliciaJob = jobs.alicia //uses the alternate method
console.log(mikeJob, jillJob, aliciaJob);

//now the new way:
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);
//Note that the variables in the curly braces must be the same as the keys in the object

//destructuring subsets
//Destructuring will only assign values to as many variables as are declared
//hence, a subset of the array is destructured
let languages = ['english', 'french', 'spanish', 'german', 'japanese' ]
let [johnNative, johnSecondary] = languages
console.log(johnNative)
console.log(johnSecondary)
//Since only two variables have been supplies, ES6 will assign them the first and second elements of the languages array only
//the other elements will be discarded

//it is also possible to assign only particular values to variables:
//This is done using commas to skip over elements
let [, , maryNative, marySecondary] = languages
console.log(maryNative)
console.log(marySecondary)
//The 2 commas in the destructuring command skip over english and french
//hence, spanish is assigned as the value of maryNative, and german the value of marySecondary

//This also works with objects:
let languages2 = {
    firstLanguage: 'slovakian',
    secondLanguage: 'czech',
    thirdLanguage: 'slovenian',
    fourthLanguage: 'croatian'
}
let { firstLanguage, thirdLanguage } = languages2
console.log(firstLanguage)
console.log(thirdLanguage)

//using rest parameter syntax
// rest parameter syntax can also be used to deconstruct arrays:
let fruits = ['apples', 'bananas', 'peaches', 'cherries', 'mangoes' ]

let [favourite, secondFavourite, ...others] = fruits
console.log(favourite) //logs applies
console.log(secondFavourite) //logs bananas
console.log(others) // logs an array of peaches, cherries, mangoes

//rest parameter syntax also works with objects:
let favouriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'sausages',
    andrea: 'bread'
}
let { brian, anna, ...rest} = favouriteFoods
console.log(brian) //logs pizza
console.log(anna) //logs pasta
console.log(rest) //logs an object containing sarah: 'sausages', andrea: 'bread'