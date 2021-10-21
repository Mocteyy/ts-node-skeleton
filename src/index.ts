import express from 'express';

const myApp = express();

myApp.listen(8080, function (){
    console.log('Hi world');
    
})