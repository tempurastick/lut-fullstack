// argv
console.log(process.argv);

// process.env - system vars
console.log(process.env.LOGNAME);

// pid

console.log(process.pid);

// cwd
console.log(process.cwd());

// title
console.log(process.title);

// memory usage
console.log(process.memoryUsage());

// uptime of process
console.log(process.uptime());

process.on("exit", (code) => {
    console.log(`About to exit with code: ${code}`);
});

// exit process
process.exit(0);
// doesn't get executed because process already exited
console.log("Hello from after exit");
