const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

emitter.emit("customEvent", "Hello World!!", "Computer");
emitter.emit("customEvent", "That's pretty cool", "Amit");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "Good Bye!!", "process");
    process.exit();
  }

  emitter.emit("customEvent", data.toString().trim(), "terminal");
});
