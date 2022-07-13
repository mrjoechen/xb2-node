const greeting = 'hello ~~'
console.log(greeting)

const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.headers['user-agent']);
    console.log(req.url);
    // res.writeHead(200, {
    //     "Content-Type": "text/html"
    // });
    // res.write(`<input />`);
    // res.write("hello");

    const data = {
        "id":1,
        "user":"admin",
        "age":18
    };
    const json = JSON.stringify(data);
    res.writeHead(200, {
        "Content-Type":"application/json; charset=utf-8"
    });
    res.write(json);
    res.end();
});
server.listen(8686, () => {
    console.log("started!");
});
