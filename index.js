const express=require('express');
const app=express();
const port=8000;

/*
//use express router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
*/
app.listen(port,function(err){
    if(err){
        //console.log('Erroe:',err);  OR below
        console.log(`Error in rumnning in server: ${err}`);
    }
    console.log(`Server is runnning on port:${port}`);
});