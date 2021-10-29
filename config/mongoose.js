//require library
const mongoose=require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/TodoListApp_db');

//acquire the connection ---it checK if it is successful
const db=mongoose.connection;

//Error
db.on('error',console.error.bind(console,'error connecting to db'));
//up and running the print the message
db.once('open',function(){
    console.log('Successfully connected to the datadbase');
});