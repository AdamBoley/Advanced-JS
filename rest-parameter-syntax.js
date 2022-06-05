//standard function call

const sumAll = (a, b, c) => a + b + c
let sum = sumAll(1, 2, 3)
console.log('sum:', sum)

//JS ignores excess arguments
//Unlike Python, which will throw errors if too many or too few arguments are passed in

let sum2 = sumAll(1, 2, 3, 4, 5, 6)
console.log('sum2:', sum2)
//still logs 6, since the function only accepts three parameters

//This can be overcome by using ...rest:
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c
    for (let i of rest) {
        sum += i
    }

    return sum
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6)
console.log('sum3:', sum3)
//...rest is an array, so it must be iterated over using a FOR OF loop
//This handles any excess arguments gracefully

let sum4 = sumRest(3, 6, 9)
console.log('sum4:', sum4)
//Note that the function call in sum4 only provides three arguments, so the function runs as expected
//But it does not need to call the FOR OF loop, since no excess arguments were passed in

let sum5 = sumRest(1, 2)
console.log('sum5:', sum5)
//this doesn't work, since too few arguments were passed in

const sumOnlyRest = (...rest) => {
    let sum = 0
    for (let i of rest) {
        sum += i
    }
    return sum
}
let sum6 = sumOnlyRest(1, 4, 6, 7, 2)
console.log('sum6', sum6)

let sum7 = sumOnlyRest(1, 4, 2, 34, 109, 986, 4, 87, 90, 47, 101, 5, 7, 8)
console.log('sum7', sum7)
//In this case, sumOnlyRest only takes in one parameter, the ...rest array, so it can handle any number of arguments

//Note that ...rest is not technically necessary - only the ... is necessary. Rest can be replaced:

const sumOnlyAll = (...all) => {
    let sum = 0
    for (let i of all) {
        sum += i
    }
    return sum
}
let sum8 = sumOnlyAll(1, 3, 5, 7, 9, 11)
console.log('sum8:', sum8)

//rest parameter syntax challenge:
// append letters to the mixedLetters array
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
//initial array
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l']
//spreads the mixedLetters array to construct the moreMixedLetters array, and adds additional letters
console.log(moreMixedLetters)

const updateSortReverse = (arr, ...letters) => {
    let newArray = [...arr]
    console.log(newArray)
    //spreads the passed in array to create newArray
    for(let letter of letters) {
        newArray.push(letter)
    }
    //loops over the passed in letters array, and pushes each new letter to the end of newArray
    console.log(newArray)
    newArray.sort()
    //sorts newArray alphabetically
    newArray.reverse()
    //reverses newArray
    return newArray
}

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o')
// n, m and o are excess parameters, so will form the letters array in the function
console.log(reverseSort)
//logs function output
console.log(mixedLetters)
//logs mixedLetters to ensure that it remains unchanged