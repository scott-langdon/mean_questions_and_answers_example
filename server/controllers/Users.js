var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    getCurrentUser: function(req, res){
        res.json(req.session.user);
    },
    create: function(req,res){
        User.findOne({username: req.body.username}).exec(function(err, user){
            if(user){
                res.json({duplicate: true});
            } else{
                if (req.body.password != req.body.pw_confirm){
                    res.sendStatus(400);
                }else{
                    var user = new User(req.body); 
                    user.save(function(err,user){ 
                        if (err){
                            res.sendStatus(500); 
                        }else{
                            req.session.user = user; 
                            res.send(user);
                        }
                    });
                }
            }
        })
   },
    login:function(req,res){
        User.findOne({username:req.body.username}).exec(function(err,user){
          if (user){
            if(user.password != req.body.password){
                                res.sendStatus(400);
            }else{
                req.session.user = user;
                res.send(user);
            }
          }else{
            res.sendStatus(400);
          }
        })
    },
    logout: function(req, res){
        console.log("destroying session");
        req.session.destroy();
        res.json({loggedOut: true});
    }
}