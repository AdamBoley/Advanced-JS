// No spread operator
let array1 = [1, 2, 3]
let array2 = array1
console.log('first array: ', array1)
console.log('second array: ', array2)
//both console.logs print the same values

//say we want to add an additional element to the second array - use the push method:
array2.push(4)
console.log('first array: ', array1)
console.log('second array: ', array2)
//logging both arrays shows that a fourth element has been pushed to both arrays
//this is because both variables point to the same object. 
//The two arrays are effectively the same object and have the same location in memory
//hence, pushing 4 to array2 also pushes 4 to array1

// Copying an array

// the above issue can be solved using the spread operator
let array3 = [4, 5, 6]
let array4 = [...array3]
console.log('third array: ', array3)
console.log('fourth array: ', array4)
//logging the third and fourth arrays produces the same values
//however, since the spread operator has been used, array4 is a different object to array3
//array4 has been constructed from array3, so they have different locations in memory
//Hence, array4 can be modified without also modifying array3:
array4.push(7)
console.log('third array: ', array3)
console.log('fourth array: ', array4)

// Copying an object
//The same rules hold for objects too:

let object1 = 
    {a: 1, 
    b: 2, 
    c: 3}

let object2 = {...object1}
//The spread operator constructs object2 from the key - value pairs of object1
console.log('first object: ', object1)
console.log('second object: ', object2)

//object 2 may not be safely updated:

object2.d = 4
object2.a = 77

console.log('first object: ', object1)
console.log('second object: ', object2)

//The spread operation and update operation can be combined:
let object3 = {...object1, b: 6, d: 8}
//This constructs object 3 using object1, but also adds a d key with a value of 8, and updates the b key with a value of 6
console.log('first object: ', object1)
console.log('second object: ', object2)
console.log('third object: ', object3)

// Copying only part of an array/object
//the spread operator can be used to construct arrays from objecta and objects from arrays

let array5 = [...array1, {...object1}, ...array3, 9, 2, 23]
console.log('fifth array: ', array5)


//spread-operator challenge:
//update John's subjects array with 'Electronics'
let students = [
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
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [...students[0].subjects]
//creates a new array from John's subjects
console.log(subjects)
//logs ['maths', 'english', 'cad']

const update = (item, val) => [...item, val]
// arrow function creates a new array that the array that is passed in, and adds a val

let updatedSubjects = update(subjects, 'Electronics')
//calls the update function and passes in the subjects array created above, and the value to be added, Electronics
console.log(updatedSubjects)
//works as intended
console.log(students[0])
//logs out the profile for John to check that he original array hasn't been modified

