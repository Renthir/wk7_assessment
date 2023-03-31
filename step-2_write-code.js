/*
1) Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
*/
function addToZero(nums) {
    for(let i = 0; i< nums.length; i++) {
        for(let k = i + 1; k < nums.length; k++){
            if(nums[i] + nums[k] === 0){
                return true
            }
        }
    }
    return false
}

//Space Complexity: O(1) Constant

// console.log(addToZero([]))
// console.log(addToZero([1]))
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))

/*
2) Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
*/
function hasUniqueChars(string) {
    for(let i = 0; i< string.length; i++) {
        for(let k = i + 1; k < string.length; k++){
            if(string[i] === string[k]){
                return false
            }
        }
    }
    return true
}

//Space Complexity: O(1) Constant

// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))

/*
3) A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
Write a function to check a sentence to see if it is a pangram or not.
*/
function isPangram(string) {
    //define alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    //loop through alphabet
    loop1:
    for(let i = 0; i < alphabet.length; i++){
        //loop through string to find each letter, once done move to next letter
        loop2:
        for(let k = 0; k < string.length; k++){
            if(string[k] === alphabet[i]){
                continue loop1
            }
            //if the inner loop reaches the end of the string and hasn't found anything, return false
            if(k === string.length - 1){
                return false
            }
        }
    }
    //once all letters are checked, return true
    return true
}

//Space Complexity: O(1) Constant

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))

/*
4) Write a function, findLongestWord, that takes a list of words and returns the length of the longest one.
*/
function findLongestWord(words){
    wordLength = 0
    words.forEach(elem => {
        if(elem.length > wordLength){
            wordLength = elem.length
        }
    });
    return wordLength
}

//Space Complexity: O(1) Constant

// console.log(findLongestWord(["hi", "hello"]))