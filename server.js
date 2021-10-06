const http = require('http');

const requestListener = function (req, res) {
    console.log(reg.url)

    const requestListener = function (req, res) {
      console.log(req.url)
  
      let search = req.url.split("?")
      console.log(search)
      let parameters = search.split('=')
      console.log(parameters)
      let key = parameters[0]
      let value = parameters[1]
      console.log(key, value)
      let sql = "INSERT INTO players (name) VALUES ('"+value+"');"
      console.log(sql)
  
      res.writeHead(200);
      res.end('<b>Hello, World!</b> Tulid: '+req.url);
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);
