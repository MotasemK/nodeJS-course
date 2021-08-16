// CRUD create reade update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectId } = require("mongodb");

// localhost ip = 127.0.0.1
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id.id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);
    /*
    db.collection("users").insertOne(
      {
        _id: id,
        name: "bashar",
        age: 29,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }

        console.log(result.insertedId);
      }
    );
*/
    /*db.collection("users").insertMany(
      [
        {
          name: "Fayez",
          age: 25,
        },
        {
          name: "Majd",
          age: 24,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }

        console.log(result.insertedIds);
      }
    );*/
    /*
    db.collection("tasks").insertMany(
      [
        {
          description: "covering mongodb",
          completed: false,
        },
        {
          description: "Studying NodeJS",
          completed: false,
        },
        {
          description: "Going to gym",
          completed: true,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }

        console.log(result.insertedIds);
      }
    );
    */
  }
);
