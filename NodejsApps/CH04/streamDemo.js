const fs = require("fs");

// fs.readFile("./chat-logs/amit-dilip-chat.log", "UTF-8", (err, chatLog) => {
//   if (err) {
//     console.log(err);
//     throw err;
//   }

//   console.log(chatLog);
//   console.log(`File Read: ${chatLog.length}`);
// });

// console.log("Reading the file...");

console.log("Reading the file...");
let data = "";

const stream = fs.createReadStream("./chat-logs/amit-dilip-chat.log", "UTF-8");

stream.once("data", (chunkData) => {
  console.log("Read stream started");
  console.log("=============");
  console.log(`Chunk data once: ${chunkData}`);
  console.log(`Chunk data once length: ${chunkData.length}`);
});

stream.on("data", (chunkData) => {
  console.log(`Chunk data on: ${chunkData}`);
  console.log(`Chunk data on length: ${chunkData.length}`);
  data += chunkData;
});

stream.on("end", () => {
  console.log(`Chat data: ${data}`);
  console.log(`Data length: ${data.length}`);
});
