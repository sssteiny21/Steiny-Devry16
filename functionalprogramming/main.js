//Functional Programming practice 11-21-16 Week2
var oceans = [
  "Pacific", 
  "Atlantic",
  "Antarctic",
  "Artic", 
  "Indian", 
  "Bering Strait",
  "Caspian Sea",
];

//Map is now a higher order function //parameters of value index and order need to be in that order //mwe are not calling this function
//this is a "callback" function.  We are referencing it for the map function to call it.  This loops over the oceans and call the function for each ocean.

///this is an anonymous function that just runs
oceans.map(function(value, index, array){
  console.log(value, index, array);
});

//this is a named function called 'oceanMap'.  It is a name function
function oceanMap (value, index, array){
  console.log(value, index, array);
}
oceans.map(oceanMap);

//anoth example of 'callback functions' we don't call for it but setINterval  keeps running every 400 milliseconds
//setInterval(function(){
  //console.log("woohoo!")
//}, 400);

//Using the 'filter' function for oceans that start with A
function oceansFilter (value, index) {
  console.log (value)
  return value[0].toUpperCase() === 'A'  //you could also use '!==' to show all oceans that don't start with 'A' using the bang operator
}

var OceansThatStartwithA = 
    oceans.filter(oceansFilter);

console.log (OceansThatStartwithA);
// filtered is [Oceans that start with A]

///REDUCE METHOD

var startingMoney = 500;
var purchases = [ {    bought : "Monkey",    cost   : 100  },
                  {    bought : "Pullover",  cost   : 200  },
                  {    bought : "scarf",     cost   : 12.75} ]

//How much do we got left?
function debit(runningTotal, purchase){
  console.log("RunningTotal", runningTotal)
  console.log("Purchase", purchase.bought, purchase.cost);
  console.log('Amt Left', runningTotal - purchase.cost);
  console.log('=-=-=-=-=-=-=-=--=-=-');
 
 
  return runningTotal - purchase.cost
  
}
var currentBalance = purchases.reduce( debit, startingMoney );

console.log(currentBalance);
 
