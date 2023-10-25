const collectAnswers = require("./lib/collectAnswerDD");

// rl.question("How do you like Node?", (answer) => {
//   console.log(`Your answer: ${answer}`);
// });

const questions = [
  "What is your name?",
  "Where do you live?",
  "What are going to do with Node.js?",
];

const answerEvents = collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!!");
  console.log(answers);
  process.exit();
});

answerEvents.on("answer", (answer) => console.log(`Your answer is ${answer}`));
