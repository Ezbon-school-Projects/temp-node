const http = require('http');

const server = http.createServer((req,res) => {
  if(req.url === '/'){
    res.end('Welcome to our home page');
  }else if(req.url === '/about'){
    res.end('Here is our short history');
  }else{
    res.end(`
      <p>Opps!!!</p> 
      <h1>We can not seem to find the age you are lookng for</h1>
      <a href="/">Back to home page</a>
    `);
  }
  
})

server.listen(5000);