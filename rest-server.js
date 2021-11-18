const http = require('http');

const users = [{name: 'Цимбалистий Максим', age: 18}]
const HOSTNAME = '127.0.0.1'
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'Im ok, from Max'
    res.setHeader('Content-Type', 'text/json');
    res.end(JSON.stringify(users));
  });
  
  server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
  });