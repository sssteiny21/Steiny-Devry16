//model your file (in this case, booze collection)  //This file gives us the model to describe your data and the variable to interact with
var mongoose = require('mongoose');


//define our data schema
var boozeSchema = mongoose.Schema({
  abv             : Number,
  name            : String,
  flavorNotes     : Array,
  effervescence   : {type : Boolean, default : false}
});

//Create a name and pass on our boozeSchema  or create model (collection)  THIS LINE IS EXTREMELY IMPORTANT!
mongoose.model('Booze', boozeSchema);