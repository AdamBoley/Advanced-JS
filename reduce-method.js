//The reduce method is used to reduce or compress multiple values into a single value 

//a simple example:
const nums = [0, 1, 2, 3, 4]
let sum = nums.reduce((acc, curr) => acc + curr)
console.log(sum)
//how this works:
//The reduce method takes 2 parameters instead of 1
//acc is short for accumulator
//curr is short for currentValue
//acc is the value that will be returned, in this case, the sum of the values
//A more verbose and more descriptive way:
let sum1 = nums.reduce((accumulator, currentValue) => {
    console.log(
        'Accumulator:', accumulator,
        'CurrentValue:', currentValue,
        'Total:', accumulator + currentValue
    )
    return accumulator + currentValue
})
console.log(sum1)
//When run, the console shows that the reduce method as used here is adding an element to a running total
//One number is added each time the array is looped over
//The array is looped over 4 times

//Note that the array contains 5 elements, but the function only executes 4 times
//This is because the value of the accumulator can be specified as a second parameter - the console.log is the first parameter
//If the initial value of the accumulator is not specified, then the reduce method will default to the first element of the array
//In this case, the first element is 0
//Again, this time specifying 0 as the value of the accumulator:
let sum2 = nums.reduce((accumulator, currentValue) => {
    console.log(
        'Accumulator:', accumulator,
        'CurrentValue:', currentValue,
        'Total:', accumulator + currentValue
    )
    return accumulator + currentValue
}, 0)//second parameter, the initial value of accumulator goes here
console.log(sum2)
//When run, the reduce function will execute 5 times, once for each element of the array
//However, since the first element is 0, that is added to the initial value, also 0, for a total of 0
//If instead, an initial accumulator value of 10 is specified:
let sum3 = nums.reduce((accumulator, currentValue) => {
    console.log(
        'Accumulator:', accumulator,
        'CurrentValue:', currentValue,
        'Total:', accumulator + currentValue
    )
    return accumulator + currentValue
}, 10)
console.log(sum3)
//When run, the reduce function executes 5 times, once for each element of the array
//However, the total is now 20, since the sum of the array element is 10, which has been added to 10
//This gives, surprisingly, 20

//It is considered good practice to always specify an initial value


const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
];

//2 common uses of the reduce method, performed on a complex dataset:

//total specific object properties:

//Our goal is total up the years of experience in the team above

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0)
console.log(totalExperience)
//This is similar to the above, only we are accessing the yrsExperience property of the currentValue
//currentValue points to each object of the array, since each object is an array element
//This code will throw a bug if the initial value of the accumulator is not specified as 0

//restructuring data:
//we want to restructure the dataset above so that the total experience by profession is produced
//we should get {developer: 12, designer: 4}, since the two developers have a total of 12 years' experience
//and the two designers have a total of 4 years experience

let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession
    if (!acc[key]) { //checks whether the key exists in the accumulator already. If not (hence the !), add it in
        acc[key] = curr.yrsExperience
    }
    else { //if the key does exist in the accumulator, add the years of experience
        acc[key] += curr.yrsExperience
    }
    return acc
}, {})
console.log(experienceByProfession)
//The empty object - the pair of curly braces at the end, specifies that the initial value of the accumulator is an empty object

//This is flexible - it will respond to any changes in the teamMembers array
//If new people join:
const newTeamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
        name: 'Mark',
        profession: 'Manager',
        yrsExperience: 10
    },
    {
        name: 'Stuart',
        profession: 'TechSupport',
        yrsExperience: 7
    }
];

let experienceByProfession1 = newTeamMembers.reduce((acc, curr) => {
    let key = curr.profession
    if (!acc[key]) { //checks whether the key exists in the accumulator already. If not (hence the !), add it in
        acc[key] = curr.yrsExperience
    }
    else { //if the key does exist in the accumulator, add the years of experience
        acc[key] += curr.yrsExperience
    }
    return acc
}, {})
console.log(experienceByProfession1) //logs the years of experience of the new team members

