/*var letterCapitalize = function(str){
console.log(letterCapitalize('hello'));

/*var letterCapitalize = function(s) {
  return s
  	.split(' ')
  	.map(function(word) {
	  	return word[0].toUpperCase() + word.slice(1);
	  })
	  .join(' ');
}*/


//This returns the square root of base and base to the exponent power
/*function power(base, exponent){
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for(var count = 0; count < exponent; count++)
  result *= base;
  return result;
};
console.log(power(10));
console.log(power(2,10));  */

//RECURSIVE STYLE OF power function (base to the exponent power) A function that calls itself is called recursive
/*function power(base, exponent){
  if(exponent == 0)
  return 1;
  else
  return base * power(base, exponent - 1);
}
console.log(power(4,3)); */


/*function multiplier(factor){
  return function(number) {
    return number * factor;
  };
}  //this is simply a frozen function above until it gets called below within the variable twice

var twice = multiplier(5);
console.log(twice(5));*/

//Recursive function that finds the current history to obtain target ()
/*function findSolution(target){
  function find(start, history){
    if (start == target)
    return history;
    else if (start > target)
    return null;
    else
      return find(start + 5, "(" + history +"+5)") ||
             find(start * 3, "(" + history +"*3)");
    }
    return find(1, "1");
  }
  console.log(findSolution(13));*/


//This function simply prints the number of chickens and cows on a farm with the number always being a 3 digit number
  /*function printFarmInventory(cows, chickens){
    var cowString = String(cows);
    while (cowString.length < 3)  //this returns a 3 digit number as it adds 0's before the argument
      cowString = "0" + cowString;
      console.log(cowString + " Cows");
    var chickenString = String(chickens);
    while (chickenString.length < 3)
    chickenString = "0" + chickenString;
    console.log(chickenString + " Chickens");
  }
  printFarmInventory(10,15); //it will return whatever amount of animals you give it */


//This function nicely aligns a printout of numbers or inventroy in this case
/*  function zeroPadding(number, numberWidth){
    var string = String(number);
    while (string.length < numberWidth)
      string  = "0" + string;
    return string;
  }
  function printFarmInventory(cows, chickens, pigs){
    console.log(zeroPadding(cows, 5) + " Cows");
    console.log(zeroPadding(chickens, 5) + " Chickens");
    console.log(zeroPadding(pigs, 5) + " Pigs");
    }
    printFarmInventory(7, 16, 3); */


//Eloquent JS Chapter 3 exercises ( return minimum without using Math.min)  You can use Math.min in your variables below

// var x = 10, y = -20;
// var z = Math.min(x, y);

//EXERCISE 1
//this is the functions without it
/*function min(x,y){
    if (x < y)
    return x;
    else if (x > y)
    return y;
  }
    console.log (min(12, 31)); */

//EXERCISE 2 RECURSION TO FIND EVEN/ODD
/* function isEven(num){
  if (num % 2 == 0)
   return true;
  else return false;
}
console.log (isEven(50));
console.log (isEven(75));
console.log (isEven(-1));
console.log (isEven(0));
console.log (isEven(1)); */

//EXERCISE 3 BEAN COUNTING
//Find the Capital B's in a string and return how many it finds
/*function countBs (str){
  var howMany = 0;
  for (var i = 0; i < str.length; i++)  //iterates over the whole string
   if (str.charAt(i) === "B"){
     howMany++
   }
  return howMany;
}
  console.log(countBs("BabBBly"));*/

//find a certain character in string and return how many it finds.  In this case 'y'
/* function countChar(str, letter){
  var howMany = 0;
  for(var i=0; i < str.length; i++)
    if (str.charAt(i) === letter)
    howMany++;
    return (howMany);
}
console.log(countChar("yakettyyakyaky", "y")); */
