// CRUD create reade update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId

const { MongoClient, ObjectId } = require("mongodb");

// localhost ip = 127.0.0.1
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);
    /*
    db.collection("users").findOne(
      { _id: new ObjectId("611a1b3303a324a2cb51e7bd") },
      (error, user) => {
        if (error) {
          return console.log("Unable to fetch");
        }

        console.log(user);
      }
    );
*/

    // returns cursor refers to the data location in the database
    /*     
     db.collection("users")
      .find({ age: 25 })
      .toArray((error, users) => {
        console.log(users);
      });
*/

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
