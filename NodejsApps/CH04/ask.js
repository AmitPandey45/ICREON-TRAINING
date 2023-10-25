const fs = require("fs");

let questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

let answers = [];
let answerStream;

function ask(i = 0) {
  process.stdout.write(`\n\n  ${questions[i]}`);
  process.stdout.write(`  >  `);
}

ask();

process.stdin.once("data", (data) => {
  const name = data.toString().trim();
  const file = data.toString().trim().replace(" ", "-");
  const fileName = `./Logs/${file}.log`;
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
  }

  answerStream = fs.createWriteStream(fileName);
  answerStream.write(`Question Answers for ${name}\n=======\n`);
});

process.stdin.on("data", (data) => {
  let answer = data.toString().trim();

  answerStream.write(`Question: ${questions[answers.length]}\n`);

  answerStream.write(`Answer: ${answer}\n`, () => {
    if (answers.length < questions.length) {
      ask(answers.length);
    } else {
      process.exit();
    }
  });

  answers.push(answer);
});

process.on("exit", () => {
  answerStream.close();
  process.stdout.write("\n\n");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]}`
  );
  process.stdout.write("\n\n");
});
