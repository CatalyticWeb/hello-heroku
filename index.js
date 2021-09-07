const express = require('express');
const app = express();

app.get('/', function (req, res) {

    res.send('<h1>Hello Node.js on Heroku</h1><p>by Harrison</p><p1><a href="https://github.com/CatalyticWeb/hello-heroku/blob/main/index.js" target="_blank">Code available here<a/></p1>');

});

app.get('/about', function (req, res) {

    res.sendFile('/README.md', { root: __dirname });

});

app.listen(process.env.PORT || 3000);
