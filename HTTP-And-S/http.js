const http = require('http');

const server = http.createServer(function(req, res) {
    res.end("Hello World");
});


server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
