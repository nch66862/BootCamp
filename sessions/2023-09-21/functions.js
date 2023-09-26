// Let's think back to our homework from this week.
// We had some repeat logic. Everything inside our loops was copy-pasted.

// Repeat logic is hard to maintain. If it changes in one place,
// you want to change it in all the places. Javascript allows you
// to write it once and 'call' it when you want it.

// Let's talk about the syntax for creating a function.
// 1. declare a function by typing 'function'
// 2. give it a name
// 3. use those parentheses at the end of the name, every time.
// 4. use those familiar curly braces
function myFunctionName() {

}
// This is the bare minimum for a named function. 

//The space in the curly braces is where all of the code you want to run will
// live. Let's create a new function and add some code to the body.
function getTheLyrics() {
    console.log("R")
    console.log("O")
    console.log("C")
    console.log("K")
    console.log("in the USA!")
}

// Imagine we are printing out the lyrics to our favorite lullaby.
// we know the chorus is sung three times in a row. We can throw
// those lyrics in a for loop and have the code write them for us.
console.log("They come from the cities")
console.log("They come from the smaller towns")
console.log("And beat up cars with guitars and drummers")
console.log("Goin' crack boom bam")
for (let i = 0; i < 3; i++) {
    getTheLyrics()
}
console.log("Rockin' in the U.S.A.")

// Try running this code and see how it turns out.
