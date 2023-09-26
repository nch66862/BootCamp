// Declare the available computer options
let computerChoices = ["rock", "paper", "scissors"]

// Declare the computer's initial choice
let computerChoiceIndex = 0

// Declare the user's choice
const userChoice = "rock"

// Declare counters for all three scenarios
let computerWins = 0
let tie = 0
let userWins = 0

// Declare a counter to track the loops (reference only. we want to 
// hit our target of 48. Not 47 or 49.)
let loops = 0

// set up the for loop. First, the index. Second, the loop terminator.
// Last, the indexer
for (let i = 0; i < 48; i++) {
    // When the computer choice is out of bounds, reset the computer's
    // choice to the first index (index 0). Ex: If computerChoiceIndex
    // is 3, that means computerChoices[3] will reference a value that
    // does not exist in the array.
    if (computerChoiceIndex > computerChoices.length - 1) {
        computerChoiceIndex = 0
    }

    // Store the computer's choice in a new constant
    const computerChoice = computerChoices[computerChoiceIndex]

    // Log the choice of each player, if wanted.
    // console.log("Computer choice: " + computerChoice)
    // console.log("User choice: " + userChoice)

    // If both player chose the same, it's a tie
    if (computerChoice === userChoice) {
        tie++

    // If the computer chose rock, the user could've only
    // chosen scissors or paper because it wasn't a tie
    } else if (computerChoice === "rock") {
        if (userChoice === "paper") {
            userWins++
        } else {
            computerWins++
        }

    // If the computer chose paper, the user could've only
    // chosen rock or scissors because it wasn't a tie
    } else if (computerChoice === "paper") {
        if (userChoice === "rock") {
            computerWins++
        } else {
            userWins++
        }

    // If the computer didn't choose rock or paper, it
    // must've chosen scissors. The user could've chosen rock
    // or paper.
    } else {
        if (userChoice == "rock") {
            userWins++
        } else {
            computerWins++
        }
    }

    // Make the computer choose something else in the next loop
    computerChoiceIndex++

    // Count this loop (just for reference)
    loops++
}

// Log the results of all the games
console.log("For loop results:")
console.log("User wins: " + userWins)
console.log("Computer wins: " + computerWins)
console.log("Ties: " + tie)
console.log ("Looped " + loops + " times")


// Since I am writing the while-loop in the same file,
// I will reset my variables
computerChoiceIndex = 0
computerWins = 0
tie = 0
userWins = 0
loops = 0

// Create a new variable to terminate the while-loop
let counter = 0

// loop until the counter is not less than 196
while (counter < 196) {
    // Follow the same steps as the for-loop
    if (computerChoiceIndex > computerChoices.length - 1) {
        computerChoiceIndex = 0
    }
    const computerChoice = computerChoices[computerChoiceIndex]
    // console.log("Computer choice: " + computerChoice)
    // console.log("User choice: " + userChoice)
    if (computerChoice === userChoice) {
        tie++
    } else if (computerChoice === "rock") {
        if (userChoice === "paper") {
            userWins++
        } else {
            computerWins++
        }
    } else if (computerChoice === "paper") {
        if (userChoice === "rock") {
            computerWins++
        } else {
            userWins++
        }
    } else {
        if (userChoice == "rock") {
            userWins++
        }
    }
    computerChoiceIndex++
    loops++

    // remember to incremement the counter or the loop
    // will run without stopping
    counter++
}

// Log the results
console.log("")
console.log("While loop results:")
console.log("User wins: " + userWins);
console.log("Computer wins: " + computerWins);
console.log("Ties: " + tie);
console.log ("Looped " + loops + " times")
