import { log } from "console";
import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const logConnection = () => {
  console.log("> connected");
};

// Subscribe
myEmitter.addListener("connected", logConnection);

// Use
myEmitter.emit("connected");

// Unsubscribe
// myEmitter.removeListener("connected", logConnection);
myEmitter.off("connected", logConnection);

// With data
myEmitter.on("message", (data) => {
  log(`> data: ${data}`);
});

myEmitter.emit("message", "hello there!");

// Use only ONCE
myEmitter.once("off", () => {
  log("> only ONCE");
});

myEmitter.emit("off");
myEmitter.emit("off");

// Maximum number of listeners
log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(3);
log(myEmitter.getMaxListeners());

// Count specified active listeners
log(myEmitter.listenerCount("message"));

// Get all listeners as array
log(myEmitter.listeners("message"));

// add in listeners array
myEmitter.prependListener("message", () => log("prependListener"));

myEmitter.emit("message", 123);

// handling errors
myEmitter.on("error", (error) => log("! error: ", error.message));

myEmitter.emit("error", new Error("custom"));

//
// TARGETS EventTarget
//

const target = new EventTarget();

const logTarget = () => {
  log("<< connected - logTarget");
};

target.addEventListener("connected", logTarget);
target.dispatchEvent(new Event("connected"));
