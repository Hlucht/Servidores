const http = require('http');

const server = http.createServer( (request, response) => {
    response.write("Uma resposta para o cliente");
    console.log("Conectou");

    response.end();
})

server.listen(3000, () => {
    console.log("Subiu");
})