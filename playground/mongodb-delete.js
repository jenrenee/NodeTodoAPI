const {MongoClient, ObjectID} = require('mongodb');


const dbURL = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(dbURL, (error, db) => {
    if(error){
        return console.log('Unable to connect to MongoDB server.  Ensure it is up and running!');
    }
    console.log('Connected to MongoDB server!');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);

    // }, (error) => {
    //     console.log(`DELETE MANY FAILED ${error}`);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);

    // }, (error) => {
    //     console.log(`DELETE ONE FAILED ${error}`);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);

    // }, (error) => {
    //     console.log(`FIND ONE AND DELETE FAILED ${error}`);
    // });

    db.collection('Users').deleteMany({name: 'Jen'}).then((result) => {
        console.log(result);

    }, (error) => {
        console.log(`DELETE MANY FAILED ${error}`);
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a15cecb90f4171874cb60dc')
    }).then((result) => {
        console.log(result);

    }, (error) => {
        console.log(`FIND ONE AND DELETE FAILED ${error}`);
    });

    //IMPORTANT!!
    // db.close();
});