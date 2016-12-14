'use strict'  /*YOU HAVE TO USE 'use strict' WHEN YOU ARE APPLYING THE THIRD CONSTRUCTOR */
/* THIS IS THE COMPLETE CONSTRUCTION OF AN OBJECT WITH ATTACHED METHODS */

/* This is a constructor 
function Cereal (name, sweetness, crunchFactor, mascotName){
  this.name = name;
  this.sweetness = sweetness;
  this.crunchFactor = crunchFactor;
  this.mascotName = mascotName; */ 

/* example of the wrong way to attach a method but it works 
  this.disappear = function(){
    return this.name + 'disappears so quickly in my house!';
  }
} */
  
  /*THERE IS A BETTER WAY TO ATTACH METHODS TO YOUR OBJECTS, in this example disappear is the method 
Cereal.prototype.disappear = function(){
  return this.mascotName + " just stole your " + this.name;    
 }
}  */

  /*---------------------------------------------------------------*/

/* THIS IS THE NEWER SYNTAX TO CONSTRUCT AN OBJECT AND ATTACH METHODS.  */
class Cereal {
  constructor(name, sweetness, crunchFactor, mascotName){
    this.name = name;
    this.sweetness = sweetness;
    this.crunchFactor = crunchFactor;
    this.mascotName = mascotName;
  }
  
  /*THIS IS USING THE NEW PROTOTYPE METHOD*/
disappear(){
  return this.mascotName + " just stole your " + this.name;   
  }
 } 
 


/*this is a new instance of the class*/
var capnCrunch = new Cereal(
  "capnCrunch",
   10,
   10,
   "CaptainCrunch"
);

var greenies = new Cereal(
  "greenies",
   8,
   5,
   "Leaf Man"
);
