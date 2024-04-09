const express = require('express')
const app = express();
const db=require("./db");
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello Customer...what would you like to have?')
});

const menuroutes=require("./routes/menuroutes");
app.use('/menu',menuroutes);

const personroutes=require("./routes/personroutes");
app.use('/person',personroutes);

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log("Listening on port 3000");
});