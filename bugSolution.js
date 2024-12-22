const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const onError = (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1); // Exit with an error code
  } else {
    console.error(`Server error: ${error.message}`);
    process.exit(1);
  }
};

server.on('error', onError);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});