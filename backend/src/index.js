const express = require('express');
const routes = require('./routes');
const cors = require('cors');

var app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(3333, function () {
    console.log('app listening on port ' + 3333 + '!');
});