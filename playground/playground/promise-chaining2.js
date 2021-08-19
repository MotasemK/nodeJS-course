require("../../task-manager/src/db/mongoose");
const Task = require("../../task-manager/src/models/tasks");

/*
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
  */
// 611a9636fe1479100849589d
const deleteTaskAndCount = async (id) => {
  const deletedTask = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("611a9636fe1479100849589d")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
