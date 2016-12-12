angular.module("coffeeshop", []); // Creating a module named 'SamuelLJackson' that has 0 dependencies

// angular.module('NAME') // retrieves an existing module. Notice it is missing the injector array



angular.module("coffeeshop")
  .controller("coffee", coffeeController);

function coffeeController () {
  var yCtrl = this;
  
 
  // $scope is the object that will expose data to the view
 yCtrl.greeting = "Welcome to my coffeshop!";
}