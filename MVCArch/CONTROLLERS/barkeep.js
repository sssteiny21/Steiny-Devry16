//require the model we are dealing with //These controllers files are responsible for creating the data and interacting with it
var Booze = require('../MODELS/booze.js');

module.exports = {
  //creating new documents are typically done with a POST request.  date now lives on 'req.body'
  create : (req, res) =>{   //this can also be written create: function (req, res){}
    
    // Take your request body and use it to make a new document
    var newBooze = new Booze(req.body);
    //Save your doc to DB //You must save document newBooze.save((err, doc) =>{
    newBooze.save((err, doc)=> {
      res.send(doc); //this is sending down the newly created document of data
     });
    
  },
  
  //Creating a route to use in your routes folder to read and find your document
  read : (req, res) =>{
    Booze.find({}, (err, boozes) =>{
      res.send(boozes);
    });
  },
  
  //this is creating a route to use in the route folder to find specific properties in your objects
  
  effOnly : (req, res) =>{
    Booze.find({effervescence : true}, (err, effys)=>{
      res.send(effys);
    });
  }
}