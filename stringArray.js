// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


function stringToArray(inputString) {
    const wordsArray = inputString.split(' ');
    return wordsArray;
  }
  
  const inputString = "I love arrays they are my favorite";
  const result = stringToArray(inputString);
  console.log(result); 

// const words = "I love arrays they are my favorite"
// const spliteWords = words.split(" ")

// console.log(spliteWords);