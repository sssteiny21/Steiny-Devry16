var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express()

//ROUTES

function logger (req, res, next) {
    console.log('Timber!')
    console.log('You are here : ', req.originalURL)
    next();
  }

function trespass (req, res, next) {
  //this function will check to see if we should let a user in
  
  // /secretkey?usercontrol=trespasser  (this is the path in the URL
  if (req.query.usercontrol === 'trespasser') {
    next();
 }
else {
  res.send('You may not enter!');
 }
}

app.use(logger);

app.get('/', (req, res) =>{    
  res.send('Grumpy Wizards make toxic brew for the Evil Queen and Jack');
});

app.get('/about', (req, res, next)=>{
   res.send(' i like long walks on the beach and have many leather bound books! My apartment smells of rich mahagony ');
});

app.get('/secretkey', trespass, (req, res, next)=>{
   res.send("I can't believe this is working");
   
  console.log("They have a secret key!");
});






app.listen(PORT, ()=>{   
  console.log(`Server running on ${PORT}!`);
});