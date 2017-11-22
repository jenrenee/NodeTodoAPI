const {MongoClient, ObjectID} = require('mongodb');


const dbURL = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(dbURL, (error, db) => {
    if(error){
        return console.log('Unable to connect to MongoDB server.  Ensure it is up and running!');
    }
    console.log('Connected to MongoDB server!');

    // the .find method returns a pointer or cursor
    //  to find other methods (besides .toArray), check out the mongodb api documetation at
    //      http://mongodb.github.io/node-mongodb-native/2.2/api/Cursor.html
    // the .toArray returns an array of the document - .toArray returns a Promise so we can use .then
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('Got TODOs');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log(`Failed to get collection!  ${error}`);
    // });

    // //db.collection('Todos').find({_id: '5a15ccbd126be02cb89fbd0e'}).toArray().then((docs) => {
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a15d805354ab279eb929921')
    // }).toArray().then((docs) => {
    //     console.log('Got TODOs');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log(`Failed to get collection!  ${error}`);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`TODOs count ${count}`);
    // }, (error) => {
    //     console.log(`Failed to get collection!  ${error}`);
    // });

   db.collection('Users').find({name: 'Mike'}).toArray().then((docs) => {
        console.log('Got User names');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log(`Failed to get collection!  ${error}`);
    });

    //IMPORTANT!!
    //db.close();
});