// 객체를 모듈로 활용
const { SEND_MAIN_PING } = require('./constants');

console.log("객체 모듈 : " + SEND_MAIN_PING);

// 함수를 모듈로 활용
const sum = require('./module/sum');

console.log("함수 모듈 : " + sum(1, 2));

// module.index에서 관리하는 모듈 활용
const myModule = require('./module');

console.log(myModule.sum(1, 2));
console.log(myModule.minus(4, 2));

// core module
const http = require('http')

// npm 
// 예시로 express 모듈을 사용해보자
const express = require('express');
const app = express()

app.get('/', function (req, res){
    res.send('Hello World')
})

app.listen(3000)
