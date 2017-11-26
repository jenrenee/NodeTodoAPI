//import { isBoolean } from 'util';

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner',
// });

// var newTodo = new Todo({
//     text: 'Go to dog park'
// });

// newTodo.save().then((doc) => {
//     console.log('SAVED TODO ', doc)
// }, (error) => {
//     console.log('Unable to save ', error);
// });

//*****************************************************************************
// USER MODEL
//*****************************************************************************
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var newUser = new User({
    email: 'me@mine.com'
});

newUser.save().then((result) => {
    console.log('SAVED NEW USER');
    console.log(JSON.stringify(result, undefined, 2));
}, (error) => {
    console.log(error)
});