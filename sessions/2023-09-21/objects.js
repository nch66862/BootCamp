// This is a javascript object. It contains multiple data types.
// It even contains another object.
// Let's break it down.
// You declare it like any other variable using 'let'
// and giving it a name.
let instagramPost = { // It begins and ends using curly braces. The closing brace is on line 20.
    picture: "somethingsomething.png", // 'picture' is its first 'property'. You declare a property by giving it a name followed by ':'. 
    caption: "somethingCatchy", // each property of the object ends with a comma, except the last one.
    comments: [ // 'comments' is an array that begins here on line 6 and ends on line 15.
        { // This is the beginning of an object. The first element in this array.
            comment: "amazing",
            commenter: "user1"
        }, // notice the comma that separates the elements of the array.
        {
            comment: "wow",
            commenter: "user2"
        }
    ],
    numberOfLikes: 0 // no comma because it is the last element.
}

// Notice that all of this data is used to describe an instagram post. This is generally
// the style of data that will be given to describe things on a website. 

// You can add properties to an object using 'dot notation'.
instagramPost.postingUser = "Shady May"
console.log(instagramPost)

// Existing properties can be overwritten by reassigning their value.
instagramPost.comments = []
console.log(instagramPost)

// Property data types can even be re-assigned. Although, this is usually
// an unintentional bug in your code.
instagramPost.comments = ""
console.log(instagramPost)

// Properties can be accessed using dot notation. For example, if I want
// to print out the name of the commenter that said "amazing", this is
// how I would do it
console.log(instagramPost.comments[0].commenter)

// If I did not know where the comment was in the array, I could use an
// array method to return the comment that said "amazing"
const matchingComment = instagramPost.comments.find(c => c.comment === "amazing")
console.log(matchingComment.commenter)

// This array method uses a Lambda function (identified by the use of '=>').
// We will talk about these soon.