const http = require('http');

const server = http.createServer();
server.listen(8080);    // 8080으로 포트를 지정하겠다

/** 서버가 어떤 포트로 떴는지 확인할 수 있다. */
server.on('listening', () => {
    console.log('listen on 8080!!!')
})    

// request 처리하기
// server.on('request', (req, res) => {
//     console.log(req.headers);
//     res.write('<h1>Node server</h1>');
//     res.end();
// })

// 원하는 정보만 가져오기
// server.on('request', (req, res) => {
//     const { headers, method, url } = req;
//     const userAgent = headers['user-agent'];
//     console.log(`method : ${method}`);
//     console.log(`url : ${url}`);
//     console.log(`userAgent : ${userAgent}`);
//     res.write('<h1>Node server</h1>');
//     res.end();  
// })

// post나 put method의 body 처리
// server.on('request', (req, res) => {

//     const { headers, method, url } = req;
//     const userAgent = headers['user-agent'];
//     let body = [];
//     req.on('error', (err) => {
//         console.log(err);
//     }).on('data', (chunk) => {
//         body.push(chunk);
//     }).on('end', () => {
//         body = Buffer.concat(body).toString();
//         console.log(body);
//     })

//     // res.statusCode = 404;
//     res.writeHead(200, {
//         'Content-Type' : 'application/json'     
//     })     
//     // 위 코드와 동일 
//     // res.setHeader('Content-Type', 'application/json');
//     res.write('<html>');
//     res.write('<body>');
//     res.write('<h1>Node server</h1>');
//     res.write('</body>');
//     res.write('</html>');

//     res.end(); 
// })

server.on('request', (req, res) => {
    res.on('eroor', (err) => {
        console.log(err);
        res.statusCode = 404;
        res.end();
    });
    if(req.method === 'POST'){
        req.pipe(res)   // request로 들어온 것들을 response로 복사하는 역할
    }
    else{
        res.statusCode = 404;
        res.end();
    }
})