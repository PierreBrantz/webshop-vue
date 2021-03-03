var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const port = process.env.PORT || 8080;
app = express();
app.enable("trust proxy");

app.use(function(req, res, next) {
 

  
   
    var secureUrl = "https://webshopbepi-app.herokuapp.com";
    res.writeHead(301, { Location: secureUrl });
    res.end();
  
  next();
});

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  console.log("inside get");
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);