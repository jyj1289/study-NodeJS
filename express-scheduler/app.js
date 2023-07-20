const scheduler = require('node-schedule')
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Express start on port 3000')
    scheduler.scheduleJob('0*****', () => {
        console.log(new Date() + 'Running Schedule!!!');
    })
});