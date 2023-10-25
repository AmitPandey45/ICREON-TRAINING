const waitTime = 5000;
console.log(`setting a ${waitTime / 1000} seconds delay`);
const timerFinished = function () {
  clearInterval(interval);
  console.log("=====Done====");
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;

const incrementTime = () => {
  const percentage =
    currentTime === 0 ? 0 : Math.floor((currentTime / waitTime) * 100);
  console.log(`waiting... ${percentage}% done`);

  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log(`current time => ${currentTime / 1000} second(s)`);
  currentTime += waitInterval;
};

const interval = setInterval(incrementTime, waitInterval);
