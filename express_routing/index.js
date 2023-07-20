const express = require('express');
const app = express();

app.listen(3000);

app.use('/' , require('./router'));
app.use('/user', require('./user-Router'))
app.use('/board', require('./board-router'))