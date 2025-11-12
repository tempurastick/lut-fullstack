import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log(`hello ${name} world`);
}

function goodbyeHandler(name) {
    console.log(`goodbye ${name} world`);
}

// Register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// emit events
myEmitter.emit("greet", "John");
myEmitter.emit("goodbye", "John");

// error handling

myEmitter.on("error", (err) => {
    console.log("An Error Occured", err);
});

// simulate error
myEmitter.emit("error", new Error("Something went wrong"));
