const express = require('express')
const app = express();
const db=require("./db");
require('dotenv').config();

const passport=require('./auth');


const bodyParser=require('body-parser');
app.use(bodyParser.json());



// Middleware Function
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to ${req.originalUrl}`);
  next(); // Move on to the next phase
};

app.use(logRequest);


app.use(passport.initialize());
const localauthmiddleware=passport.authenticate('local',{session:false})   //jaha chaiye vaha use kar tu yeh auth ab....person ya slash ya menu..

app.get('/', function (req, res) {
  res.send('Hello Customer...what would you like to have?')
});

const menuroutes=require("./routes/menuroutes");
app.use('/menu',menuroutes);

const personroutes=require("./routes/personroutes");
app.use('/person',localauthmiddleware,personroutes);

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log("Listening on port 3000");
});