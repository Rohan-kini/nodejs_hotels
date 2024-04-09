const express = require('express')
const app = express();
const db=require("./db");

const bodyParser=require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello Customer...what would you like to have?')
});

const menuroutes=require("./routes/menuroutes");
app.use('/menu',menuroutes);

const personroutes=require("./routes/personroutes");
app.use('/person',personroutes);



app.listen(3000,()=>{
  console.log("Listening on port 3000");
});