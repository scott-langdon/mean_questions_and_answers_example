var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var AnswerSchema = new mongoose.Schema({
    answer: {
    	type: String,
    	minlength: 5,
    	required: true,
    	trim: true
    },
    description: {
    	type: String,
    	required: false,
    	trim: true
    },
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
  likes: {type: Number, default: 0}
},{timestamps: true});

mongoose.model('Answer', AnswerSchema);