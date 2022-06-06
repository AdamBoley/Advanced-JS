//The map method
//Mimics the function of a For Loop

//First, the old way, using a For Loop:
//Define a simple array of numbers:
let nums = [1, 2, 3, 4, 5]

//We want to create a new array containing the elements of the first array multiplied by 2:
let nums2 = []
for (let num of nums) {
    nums2.push(num * 2)
}
console.log(nums2)

//This can be done using the map method:
const multiplyByTwo = function (num) {
    return num * 2
}

const mapResults = nums.map(multiplyByTwo)
console.log(mapResults)
//This is quite verbose, as we are defining a function and then calling it in the map method's brackets
//This is often unnecessary, as simple functions can be written inside the map method's brackets direcly:

const mapResults2 = nums.map(function(num) {return num * 2})
console.log(mapResults2)
//The function has simply been moved direcly into the brackets

//This can be simplified even further using an arrow function:

const mapResults3 = nums.map(num => num * 2)
//may also be written as: nums.map(num => {return num * 2}), which include a specific return statement
console.log(mapResults3)

//Map will also work with arrays of objects:

const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
];

const studentsWithIds = students.map(student => [student.name, student.id])
//returns and array of arrays
console.log(studentsWithIds)
//Note how the creation of the singular variable student is implicit

//Further challenge:
//instead of returning an array as above, return the students as objects with the name and id properties intact
//Also, how might ages be added?

//const studentsAsObjects = students.map(student => [{id: student.id, name: student.name}])
//console.log(studentsAsObjects)



// map method challenge:
let students1 = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

let [john, ...rest] = students1.map(student => [student.name, student.results])

console.log(john) // logs john's results
console.log(rest) // logs the results of the other students