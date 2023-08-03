const http = require('https');

const sever = http.createServer(function(req, res){
    res.end('hello');
})

sever.listen(8080, 'localhost');