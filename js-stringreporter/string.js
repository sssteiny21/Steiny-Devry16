//STRING REPORTER EXERCISE

//USER PROMPT
var userentry = prompt ("Please, enter any word");

// the word they entered verbatim
var sentence = userentry;
alert (userentry + ' is the word you entered!');
// shows the thrid character
var charspace = userentry[3];
alert ('The third character of your word is ' + [3] + ' ');
// shows how many characters in the word
var length = userentry.length;
alert ('There are ' + length + ' characters in your word');
// entered word in uppercase
var UpperCase = userentry.toUpperCase();
alert ('here is your word in uppercase ' + UpperCase);
//entered word in lowercase
var lowercase = userentry.toLowerCase();
alert ('here is your word in lowercase ' + lowercase);
// entered substring of word, using substring method
var subword = userentry.substring(2,5);
alert (('"')+ subword + ('"') + ' is a subword of your entry'); 

// Reversing a string using variable
///using the built in split function to create space (D,r,a,g,o,n), for example
var splitstring = userentry.split("")

///using the built in reverse function to create a new array (n,o,g,a,r,d) for example
var reverseArray = splitstring.reverse();

///using the built in join function to put word back together (nogarD) for example
var joinArray = reverseArray.join("");
alert (joinArray + ' is your word spelled back-words');



///function to reverse string
function reverseString(userentry) {
    // Step 1. Use the split() method to return a new array
    var splitString = userentry.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
console.log(reverseString(userentry));
alert (reverseString);
 
/// you could also combine the variables like this
function reverseString(userentry) {
  return userentry.split("").reverse().join("");
}
console.log(reverseString(userentry));


