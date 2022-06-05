/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addThreeNumbers (a, b, c) {
    return a + b + c
}
 let sum = addThreeNumbers(3, 5, 7)
 console.log(sum)

// Arrow Function With Parameters

const addFourNumbers = (a, b, c, d) => {
    return a + b + c + d
}
let sum2 = addFourNumbers(2, 4, 6, 8)
console.log(sum2)

// Single Line Arrow Function With Parameters

const addFiveNumbers = (a, b, c, d, e) => a + b + c + d + e

let sum3 = addFiveNumbers( 1, 3, 5, 7, 11)
console.log(sum3)

// the arrow function below only takes in a single parameter, so brackets around it are not necessary
const saySomething = message => console.log(message)
saySomething('Hello there') // general kenobi

// arrow functions that take in no parameters must use a pair of empty brackets:

const sayHello = () => console.log('hello')
sayHello() // logs hello


// Implicit Returns

// Returning Multiple Lines

// arrow functions can return multiple lines, but these need to be wrapped in parentheses

const returnMultipleLines = () => (
    `This is a
    multiple line
    string`
    //note the back-tick / tilde notation
)
console.log(returnMultipleLines())


// Challenge

let students = [
    //declares an array of objetcts, each object containing a results sub-object
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];


const averagePoints = (arr, subject) => {
    let allResultsInSubject = 0
    let howManyResults = 0
    //declaring these here is necessary for the function to work

    for (let i in arr) {
        // loops over the students array
        const studentObject = arr[i]
        //captures each subject of the array by index
        
        const resultObject = studentObject['results']
        //accesses the results sub-object 
        
        if (subject in resultObject) {
            // checks to see if the supplied parameter is in the results sub-object
            let oneResultInSubject = resultObject[subject]
            // if so, assigns the value of that subject to oneResultInSubject as a string
            
            allResultsInSubject += parseInt(oneResultInSubject)
            //adds the value of parseInt value of oneResultInSubject to allResultsInSubject
            howManyResults += 1
            //adds 1 to the value of howManyResults
        }
        
    }
    
    return allResultsInSubject / howManyResults
    //divides the total score of all students who have results in the subject by the number of students who have results
    //gives an effective average
}

//let result = averagePoints(students, 'maths')
//console.log(result)
let mathsResult = averagePoints(students, 'maths')
console.log('the average maths result is ' + mathsResult)

let englishResult = averagePoints(students, 'english')
console.log('the average english result is ' + englishResult)

let cadResult = averagePoints(students, 'cad')
console.log('the average cad result is ' + cadResult)

let scienceResult = averagePoints(students, 'science')
console.log('the average science result is ' + scienceResult)

let artResult = averagePoints(students, 'art')
console.log('the average art result is ' + artResult)


/*
May also be rendered more simply below:

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
      if(subject in itm.results) {
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

*/