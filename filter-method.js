//Simple filtering

//define a simple array of objects:
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
];

//Say we want to filter this array for people who are over the age of 21

const legalDrinkingAge = people.filter(person => person.age >= 21)
console.log(legalDrinkingAge) //logs a new array containing only the first object

//Say we want to filter just the Paul object out of the array:
// We can filter by paul's age, 18
const paul = people.filter(person => person.age === 18)
console.log(paul) //returns an array containing 1 element - the object of paul

//or we can filter by paul's name:
const paul1 = people.filter(person => person.name === 'Paul')
console.log(paul1)//returns an array containing 1 element - the object of paul

//to return the object itself:
const paulObject = paul[0]
console.log(paulObject)

//Filtering can become quite complex, so for complex data sets, it is common for the callback function - 
//that is, the function that does the filtering, to be defined externally and then called in

const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  //Say we want to filter this complex data set for job interview candidates
  //Our criterion is for candidates to have at least 5 years of experience in one skill
  //If done correctly, this should filter out Ariel, as she has a maximum of 4 years experience
  // We can filter using an arrow function, but this will require curly braces for the complex logic

const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
    return strongSkills.length > 0 //returns true or false
})
console.log(candidates)

//This is pretty complex, since the callback function is also complex
//Better to abstract the callback function to its own function and then call it:

const hasStrongSkills = student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
    return strongSkills.length > 0
}

const candidates1 = students.filter(hasStrongSkills)
console.log(candidates1)

//These filtering methods return an array of objects
//But a prospective employer would be interested in only the candidates' names

const studentNames = candidates.map(candidate => candidate.name)
console.log(studentNames) //returns an array of mark and jason

//Filter method challenge:
//We want to filter the students array for those students who have maths scores of 90 or greater
let students2 = [
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
        results: {science: 84, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 67, english: 87, art: 95},
    }
];


const topMaths = students2.filter(student => student.results.maths >= 90)
console.log(topMaths) //returns and array of objects
//If we wanted to return an array of just the names:
const names = topMaths.map(student => student.name)
console.log(names)
