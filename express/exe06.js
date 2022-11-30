const express = require('express');

const app = express();

app.get('/', (requeste, response)=>{
    if(Object.keys(requeste.query).length == 0){
        response.send("Você não enviou os dados");
    }else{
        response.send(requeste.query);
    }
})

app.listen(3500 , function(){
    console.log("Subiu");
})