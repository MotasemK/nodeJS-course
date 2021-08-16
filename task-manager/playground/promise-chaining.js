require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("611a7232bfa6c352445c1498", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
