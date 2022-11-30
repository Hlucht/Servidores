const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === '/usuario'){
        response.end("Você se conectou na base de dados do usuário");
    }else if (request.url === '/proutos'){
        response.end("Você irá cadastrar um novo produto");
    }else{
        response.end("ERROR");
    }
})