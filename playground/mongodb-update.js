const {MongoClient, ObjectID} = require('mongodb');


const dbURL = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(dbURL, (error, db) => {
    if(error){
        return console.log('Unable to connect to MongoDB server.  Ensure it is up and running!');
    }
    console.log('Connected to MongoDB server!');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a15e626354ab279eb929cd4')
    }, {
        $set:{completed: true}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log('DB updated');
        console.log(result);
    },  (error) => {
        console.log('DB update failed ', error);
    })

    //*******************************************************************
    //  Even though I set returnOriginal = false (above), the result
    //  is showing "completed" = false (original).  Doing this to see
    //  if the the changed worked and can be picked up with new call
    //-----UPDATE ----
    // THE REASON THE FOR NOT WORKING PROPERLY IS A TYPO - I MISSPELLED
    //  returnOriginal!!
    //*******************************************************************
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a15e626354ab279eb929cd4')
    // }).toArray().then((docs) => {
    //     console.log('Got TODOs');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log(`Failed to get collection!  ${error}`);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5a15cdffb68fd725c0aa63d6')
    // }, {
    //     $set:{name: "Jennifer"},
    //     $inc: {age: 2}
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log('DB updated');
    //     console.log(result);
    // },  (error) => {
    //     console.log('DB update failed ', error);
    // })

    //IMPORTANT!!
    // db.close();
});