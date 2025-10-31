import http from "http"; // comes with node
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

// commonjs gives direct access, but with es modules we can get the same effect by creating these:
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (request, response) => {
    try {
        if (request.method === "GET") {
            let filepath;
            if (request.url === "/") {
                filepath = path.join(__dirname, "public", "index.html");
            } else if (request.url === "/about") {
                filepath = path.join(__dirname, "public", "about.html");
            } else {
                throw new Error("Not Found");
            }

            const data = await fs.readFile(filepath);
            response.setHeader("Content-Type", "text/html");
            response.write(data);
            response.end();
        } else {
            throw new Error("Method not allowed");
        }
    } catch (error) {
        response.writeHead(500, {
            "Content-Type": "text/plain",
        });
        response.end("Server Error");
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
