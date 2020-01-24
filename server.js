
const express = require('express');
const app = express();
const { matchesUA } = require('browserslist-useragent')
const path = require('path');
const compression = require('compression');

app
  .use(compression())
  .get('*', (req, res) => {
      const userAgent = req.get('User-Agent');
      const isModern = matchesUA(userAgent, {
        browsers: [
          "Chrome > 60",
          "Safari > 11",
          "iOS > 11",
          "Firefox >= 60"
        ],

        allowHigherVersions: true,
     })
     let publicDir = isModern ? '/dist/modern' : '/dist/legacy';
     let publicPath = publicDir + '/index.html';
     if(req.path.match(/js$/) !== null){
       res.setHeader("Content-type","text/javascript");
       publicPath = publicDir + req.path;
     }
      if(req.path.indexOf(".css") !== -1 ){
       res.setHeader("Content-type","text/css");
       publicPath = publicDir + req.path;
     }
   
     res.sendFile(path.join(__dirname + publicPath));

  })
  .listen(5000, function() {
    console.log('Application start with http');
  });

