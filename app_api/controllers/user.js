const mongoose = require('mongoose');
const user = mongoose.model('user');
module.exports.findUser = function(req, res){
    if(req.params){ 
        user
            .find()
            .exec(function(err, user){
                if(!user){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }
                else{
                    send (res, 200, user);
                }
            });
   
    }
    else{
        send (res, 404, "URL Problem");
    }
}

module.exports.createUser = function(req, res){
   
     if(req.params){
          
         user
             .create({
                 firstname: req.body.firstname,
                 lastname: req.body.lastname,
                 username: req.body.username,
                 email: req.body.email,
                 password: req.body.password
             },            
             function(err, user){
                
                  if(err){ 
                     send (res, 404, err);
                 }
                 else{
                     send (res, 200, user);
                 }
             });
    
     }
     else{
         send (res, 404, "URL Problem");
     }
 }

 
var send = function(res, status, content){
    res.status(status);
    res.json(content);
}
  