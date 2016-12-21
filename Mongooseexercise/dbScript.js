var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zoo');

var animalSchema = mongoose.Schema ({
  name : String,
  diet : String,
  
});

var visitorSchema = mongoose.Schema ({
  name : String,
  favoriteAnimals : Array,
});

var Animal = mongoose.model("animal", animalSchema);
var Visitor = mongoose.model("visitor", visitorSchema);

/*var animals = new Animal (
  {  
  name : "elephant",
  diet : "coconuts"
  });  //You can recreate this with new info to update and save your database
  
animals.save ((err, animal)=>{
    console.log(err, animal);     
  });

var visitors = new Visitor (
  {
  name : "Carlos",
  favoriteAnimals : "elephant"  
  });

  {
  name : "Rodrigo",
  favoriteAnimals : ["elephant", "whale", "alien"]  
  
  {
  name : "Dude",
  favoriteAnimals : ["lion", "monkey", "chimp"] 
  }); 


  
    visitors.save ((err, human)=>{
    console.log(err, human);
  });
 console.log('After Save!');*/

/* This finds the list of documents in the Animal collection you have created
Animal.find({}, (err, animals)=>{
  //console.log('Err :', animals);
   console.log('animals : ', animals);
   return Animal.name
});*/

Animal.findOneAndUpdate(
  {name : "elephant"},
  {diet : "cheetahs"},
  {new : true},
  (err, animal)=>{
   console.log('animals: ', animals);
  });
          






