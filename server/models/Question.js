var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var QuestionSchema = new mongoose.Schema({
    question: {
    	type: String,
    	required: true,
        minlength: 10,
    	trim: true
    },
    description: {
    	type: String,
    	required: false,
    	trim: true
    },
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
},{timestamps: true});

mongoose.model('Question', QuestionSchema);