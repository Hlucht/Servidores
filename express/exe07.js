const express = require('express');

const app = express();
    
const fs = require('fs');

const acessos = 0;

app.get('/', (requeste, response)=>{
    const html = fs.readFileSync('index.html').toString()
    console.log(html)
    response.send(`${html}`)
})

app.get('/formulario', (request, response) => {
    response.send(`O usuário ${request.query.name} que possui ${request.query.age} anos, residente na cidade de ${request.query.city} conectou !`);
    acessos++
    console.log("O servidor foi conectado "+ acessos+ "vezes");
})


app.listen(3500 , function(){
    console.log("Subiu");
})

