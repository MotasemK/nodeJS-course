require("../src/db/mongoose");
const Task = require("../src/models/tasks");

Task.findByIdAndDelete("611ab66a4f74b26b4400ff49")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
