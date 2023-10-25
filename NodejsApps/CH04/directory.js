const fs = require("fs");

if (fs.existsSync("your-files-here")) {
  console.log("Directory already exist");
} else {
  fs.mkdir("your-files-here", (err) => {
    if (err) {
      console.log(`ERROR: ${err}`);
      throw err;
    }

    console.log("Directory created");
  });
}
