const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;
     if(url === '/'){
        response.write("A mensagaem que ele acessou");
     }else{
        response.write("url errada");
     }
    response.end();
})

server.listen(3000, () => {
    console.log("Subiu");
})