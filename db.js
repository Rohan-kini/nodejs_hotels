const mongoose=require('mongoose');
require('dotenv').config();

const mongoURL=process.env.local_db_url;   //this url was for local database....


//const mongoURL=process.env.DB_URL;  //this is online databaase server atlas it is..

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Mongodb connection successfull");
});

db.on('error',(err)=>{
    console.log("Mongodb connection error",err);
});

db.on('disconnected',()=>{
    console.log("Mongodb connection disconnected");
});

module.exports=db;
