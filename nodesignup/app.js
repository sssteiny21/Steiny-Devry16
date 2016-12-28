var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.port || 8080,
    app = express();

// This is the POST/REDIRECT/GET method below //
app.get('/', (req, res)=>{
  console.log('do you work')
  res.sendFile('display.html', {root : './'});
});

app.post('/formsubmit', (req, res)=>{
  res.redirect('/success');
  });

app.get('/success', (req, res)=>{
  res.sendFile('success.html', {root : './'});  //you could also use res.send to just send text  res.send('ie')
});

app.listen(port, ()=>{
  console.log(`Server Up and Runnin on ${port}`);
});