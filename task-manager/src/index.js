const express = require("express");
require("./db/mongoose");
const taskRouter = require("./routers/task");
const userRouter = require("./routers/user");
const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requsets are disabled");
//   } else {
//     next();
//   }
// });

// Maintenance Mode Handler
// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down check back soon!");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const Task = require("./models/tasks");
const User = require("./models/user");

const main = async () => {
  // Fetching user data for a specific task
  /*
  const task = await Task.findById("611c3d902b0f6d865006a761");
  await task.populate("owner").execPopulate();
  console.log(task.owner);
  */
  // Fetching task data for a specific user
  /*
  const user = await User.findById("611c3c8b24d37891948d8748");
  await user.populate("myTasks").execPopulate();
  console.log(user.myTasks);
  */
};

main();
