var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 8080,
    Router = require('./routes'),
    app = express(); //You can join all these variable into one.  Your only ever running this file in NODE, using NODEMAN.  you must require the paths


//CONNECT TO YOUR DB
mongoose.connect('mongodb://localhost/newyears');

//MOUNT MIDDLEWARE
app.use( 
    express.static('public'),
    bodyParser.json(), 
    bodyParser.urlencoded({extended : true}),
    morgan('dev')
);  

//Call your routes!
Router(app); //This is used to pass the express app object we have been using in the routes folders.  This puts those route requests in a place in this main server file

/* app.get('/', (req, res) =>{    // req =request res = response  --These are the parameter objects
  res.send('<h1> Welcome to the home page!</h1>');
}) */

// app.get('/about', (req, res) =>{
  
// })



app.listen(port, ()=>{   // Needed when building an express server
  console.log(`Server running on ${port}!`);
});
