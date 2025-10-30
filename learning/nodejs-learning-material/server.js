import http from "http"; // comes with node
const PORT = process.env.PORT;

const server = http.createServer((request, response) => {
    /** 
     * 
     *  setting a 500 with error message 
    response.writeHead(500, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Server Error" }));

     * **/
    console.log(request.url);
    console.log(request.method);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Hello World</h1>");
    // response.end(); // when using a framework like ex press, this would happen automatically
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
