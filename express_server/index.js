const express = require('express');
const app = express();
const router = express.Router();

app.listen(3000);

/*

// 하나의 미들웨어만 사용
// app.use((req, res) => {
//     res.send('Express Server!!!')
// })

// 여러개의 미들웨어 사용
// app.use((req, res, next) => {
//     console.log('Time:', Date.now());
//     next();
// })

// path가 들어오는 경우
// app.get('/user/:id', (req, res) => {
//     res.send('USER');
// })

// 라우트로 사용
app.post('/user', (req, res) => {
    res.send('POST USER');
})

// 여러개의 미들웨어를 사용하는 경우
app.get('/user/:id', (req, res, next) => {
    console.log('Request URL : ' , req.originalUrl);
    next();
}, (req, res, next) => {
    res.send('USER : ' + req.params.id);    // 경로 파라미터를 가져올 수도 있다.
    next();
} ,(req, res, next) => {
    console.log('HI');
})

// router 사용

router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
})

router.get('/test/:id', (req, res, next) => {
    console.log('Request URL : ', req.originalUrl);
    next();
}, (req, res, next) => {
    res.send('TEST : ' + req.params.id)
})

router.post('/test', (req, res) => {
    res.send('Test POST');
});

app.use('/', router);
*/

// 오류처리 미들웨어
// 기본제공 미들웨어
// app.use((err, req, res, next) => {
//     console.log(err.stack);
//     res.status(500).send('Something broke!');
// })

// 정적 미들처리
app.use(express.static(__dirname+'/public'))