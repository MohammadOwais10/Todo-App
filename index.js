const express=require('express');
const port=3000;

const app=express();

/*connecting mongoDB using mongoose*/
const db=require('./config/mongoose');

/*find and delete*/
const { findByIdAndDelete } = require('./models/list');

/*creating the DB schema*/
const todoList=require('./models/list');

app.set('views', './views');
//set up the view engine
app.set('view engine','ejs');

app.use(express.urlencoded());
app.use(express.static('assets'));


//use express router
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        //console.log('Erroe:',err);  OR below
        console.log(`Error in rumnning in server: ${err}`);
    }
    console.log(`Server is runnning on port:${port}`);
});