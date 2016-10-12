var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');
module.exports = {
	index: function(req, res) {
    Question.find({}).populate('_user').exec(function(err, questions) {
      if(err) {
        res.status(500).json(err);
      } else {
        res.json(questions);
      }
    });
  },
  show: function(req, res) {
    Question.findOne({_id: req.params.id}).populate([
    {
      path: '_user',
      select: '_id username'
    },
    {
      path: 'answers',
      populate: {
        path: '_user',
        select:'_id username'
      }
    }
      ]).exec(function(err, question) {
      if(err) {
        res.status(500).json(err);
      } else {
        res.json(question);
      }
    })
  },
	create: function(req, res){
		var question = new Question({_user:req.session.user._id, question:req.body.question, description:req.body.description});
    question.save(function(err, question) {
      if(err) {
        res.status(500).json(err);
      } else {
        User.update({_id:req.session.user._id}, { $addToSet: {_questions: question._id } }, function(err, data) {
          if(err) {
            res.status(500).json(err);
          } else {
						res.json({created:true});
          }
        });
      }
    });
	}
}