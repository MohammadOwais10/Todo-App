const mongoose=require('mongoose');

const ListSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});


const  todoList=mongoose.model('todoList',ListSchema);

module.exports= todoList; 