const todoList=require('../models/list');


/*fetching data from DB*/
module.exports.home=function(req,res){
        todoList.find({},function(err,todoList){
            if(err){
                console.log('Error in fetching lists from db');
                return;
            }
            return res.render('home',{
             title:"Task Catalog App",
             allLists:todoList
            });
        });
}


/*populating the DB*/
module.exports.create=function(req,res){

    todoList.create({
        name:req.body.name,
        genre:req.body.genre,
        priority:req.body.priority,
        date:req.body.date
        
    },function(err,newList){
        if(err){console.log('error in creating a contact!');
        return;}
        
        console.log('******',newList);
        return res.redirect('back');
    });
}


/* for deleting a list*/
module.exports.findByIdAndDelete=function(req,res){
    //get the id from query in the ul
    let id = req.query.id
    // find the contact in the database using id and delete
    todoList.findByIdAndDelete(id,function(err){
       if(err){
           console.log('error in deleting an object from database');
           return;
       }
       return res.redirect('back');/*back to same page*/
    });
}