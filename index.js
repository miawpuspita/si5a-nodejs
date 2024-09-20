// inisialisasi model http
const http = require('http');

// buat server
const server = http.createServer((req, res)=>
{
    // res.writeHead(200, { 'content-Type' : 'text/html'});
    // res.write('selamat pagi');

    res.writeHead(200, { 'content-Type' : 'application/json'});
    res.write(JSON.stringify({
        'message': 'selamat pagi',
        'status' : 'success'
    }));
    res.end();
} );

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`server berjalan di http://${host}:${port}`);

});
