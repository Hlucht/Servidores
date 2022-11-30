const express = require('express');

const app = express();

app.get('/', (requeste, response)=>{
    console.log("Conectou");
    response.send("Você se conectou com sucesso");

})

app.listen(3500 , function(){
    console.log("Subiu");
})