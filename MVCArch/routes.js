// Require your controller files
var BarKeep = require('./CONTROLLERS/barkeep');

//We register routes with methods like app.get and app.post, etc.  How do we get 'app into this file from server.js

module.exports = (app) =>{
  
 //You could also just reference documents using the .get method
  app.get('/api/booze', BarKeep.read);  //the first part in parentheses can be made up but make is readable to the route, but the second part is the actual location where the data is.
 //You could also search for certain properties of your date ie: bubbly
  app.get('/api/booze/bubbly', BarKeep.effOnly); //effOnly is created as a location in the controller file 
  
  //This creates a new booze document
  app.post('/api/booze', BarKeep.create);    //This statement means, when there is a post request to the URL (.api/booze) and get the data it wants at BarKeep.  It uses the create method to obtain info
  
}
