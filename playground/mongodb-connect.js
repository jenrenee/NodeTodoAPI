// const MongoClient = require('mongodb').MongoClient;
// the below line is the same as the above line but now using object destructuring
//const {MongoClient} = require('mongodb');
//MORE DESTRUCTURING (ObjectID lets us make new objectIDs on the fly)
const {MongoClient, ObjectID} = require('mongodb');

//creating a new object id
// var obj = new ObjectID();
// console.log(obj);


//*********************************************************************************
// //object destructuing
// var user = {name: 'myName', age: 20};
// //  destructured the user object - pulling off the name property to create
// //  a new name variable and setting it equal to the above value (myName)
// var {name} = user;
// console.log(name);
//*********************************************************************************

const dbURL = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(dbURL, (error, db) => {
    if(error){
        return console.log('Unable to connect to MongoDB server.  Ensure it is up and running!');
    }
    console.log('Connected to MongoDB server!');

    //ADD TO MONGODB
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error,result) => {
    //     if (error){
    //         return console.log('Failed to insert todo ', error);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Jennifer',
    //     age: 48,
    //     location: 'Boise, ID'
    // }, (error,result) => {
    //     if (error){
    //         return console.log('Failed to insert user ', error);
    //     }

    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //     //  DECODE THE TIMESTAMP (in GMT) FROM THE _id
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    //IMPORTANT!!
    db.close();
});