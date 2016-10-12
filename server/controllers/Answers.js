var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
module.exports = {
    like: function(req, res){
      Answer.update({_id: req.params.id}, { $inc: {likes: 1}}, function(err, data){
        if(err){
          res.status(500).json(err);
        } else{
          res.json({updated: true})
        }
      })
    },
	create: function(req, res){
		var answer = new Answer({_user:req.session.user._id, answer:req.body.answer, description:req.body.description, _question:req.params.id});
    answer.save(function(err, answer) {
      if(err) {
        res.status(500).json(err);
      } else {
        User.update({_id:req.session.user._id}, { $addToSet: {_answers: answer._id } }, function(err, data) {
          if(err) {
            res.status(500).json(err);
          } else {
            Question.update({_id:req.params.id}, {$addToSet: {answers: answer._id}}, function(err, data){
              if(err){
                res.status(500).json(err);
              } else {
						    res.json({created:true});   
              }
            })
          }
        });
      }
    });
	}
}