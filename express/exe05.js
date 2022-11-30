const express = require('express');

const app = express();

var date = Date().slice(3, 21);

app.get('/', (requeste, response)=>{
    console.log("Conectou as -- "+ date);
    response.send("Você se conectou com sucesso");
})

app.listen(3500 , function(){
    console.log("Subiu");
})