//1st thing in Angular is to declare a module // use ng-app directive in your html file to call module //
//PART 1 of Intro to Angular
angular.module("btnmessage", []);


angular
   .module('btnmessage')
   .controller('clickme', btnController);


//btnController is my call back function // you use ng-controller directive in your html file to call the name of th function
btnController.$inject = ['$scope']; 


function btnController ($scope){
     
  $scope.btnclick = function() {
    $scope.greeting = "I can't believe you touched me!";
    console.log('hello button was clicked', $scope);
     return 'You clicked my button';
   }
   {
  $scope.btnlist = function () {
     $scope.items = [
    "hockey gloves",  
    "shin pads",   
    "helmet"
     ];
    console.log('buy me button was clicked', $scope);
     return 'You clicked my button';
   }
   }
}
  
  /*{
    name  : "hockey gloves",
    img   : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvNRvwtTmIVVQsICCu89DfNDEwcqE0UXpJOnzHadqrvgzpv6-D",
    price : 99.00
  },
  {
    name  : "shin pads",
    img   : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwYTRxyADfDdTmoc30bhf52E1Deea4MCe46s0iDsxH6RRQTZCZ",
    price : 88.00 
  },
  {
    name  : "helmet",
    img   : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfM_gpE4qjAhC18OdLHIZUbCSmhdTzyG2ab0gW2UOj90bCyjZO",
    price : 10.00
  }   
];
  
}
*/
