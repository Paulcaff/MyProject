const mongoose = require('mongoose');
const user = mongoose.model('user');


module.exports.findUser = function(req, res){
    if(req.params){ 
        user
            .find()
            .exec(function(err, user){
                if(!user){
                    send (res, 404, "the user was not found");
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

module.exports.findUserByUsername = function(req, res){
      
        if(req.params){ 
            user
                .find({username: req.body.username, password :req.body.password})
                .exec(function(err, user){
                    if(user == 0){
                        send (res, 209, "the user was not found");
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

module.exports.teamCreate = function(req, res){
    // send(res,100,"body.position");
    console.log("getting called OOOOOOOOOOOOOOOO")
     if(req.params){
          
         team
             .create({
                 username: req.body.username,
                 team: [{}]
                  
             },            
             function(err, team){
                
                  if(err){ 
                      console.log("here"+ err)
                     send (res, 404, err);
                 }
                 else{
                    for(var i=0; i<15; i++){
                         team.team.set(i,{
                             name: "",
                         
                
                        });
                        team.save(function(err,team){
                            if(err){
                                send(res,400,err);
                            }
                        })
                    } 
                    
                    send (res, 200, team);

                 }
             });
    
     }
     else{
         send (res, 404, "URL Problem");
         console.log("here"+ err)
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
                       // teamCreate(req,res);
                        send (res, 200, user);
                    }
                });
        
        }
        else{
            send (res, 404, "URL Problem");
        }

  
 }

//update firstname
module.exports.updateFirstname = function(req, res){


    if(req.params){ 
        user
            .findById(req.params.userId)
            .exec(function(err, user){
                if(!user){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }

                user.firstname = "Naka";
                user.save(function(err, worked){
                    if(err){
                        send(res, 404, err)
                    }
                    send(res, 200, worked)
                })
            });
   
    }
    else{
        send (res, 404, "URL Problem");
    }
}

//update username
module.exports.updateLastname = function(req, res){


    if(req.params){ 
        user
            .findById(req.params.userId)
            .exec(function(err, user){
                if(!user){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }

                user.lastname = "jima";
                user.save(function(err, worked){
                    if(err){
                        send(res, 404, err)
                    }
                    send(res, 200, worked)
                })
            });
   
    }
    else{
        send (res, 404, "URL Problem");
    }
}

//update username
 module.exports.updateUsername = function(req, res){


    if(req.params){ 
        user
            .findById(req.params.userId)
            .exec(function(err, user){
                if(!user){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }

                user.username = "Nakajima";
                user.save(function(err, worked){
                    if(err){
                        send(res, 404, err)
                    }
                    send(res, 200, worked)
                })
            });
   
    }
    else{
        send (res, 404, "URL Problem");
    }
}

module.exports.updateEmail = function(req, res){


    if(req.params){ 
        user
            .findById(req.params.userId)
            .exec(function(err, user){
                if(!user){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }

                user.email = "Nakajima@EMAIL---UPDATED.com";
                user.save(function(err, worked){
                    if(err){
                        send(res, 404, err)
                    }
                    send(res, 200, worked)
                })
            });
   
    }
    else{
        send (res, 404, "URL Problem");
    }
}

module.exports.updatePassword = function(req, res){


    if(req.params){ 
        user
            .findById(req.params.userId)
            .exec(function(err, user){
                if(!user){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }

                user.password = "Nakajima123";
                user.save(function(err, worked){
                    if(err){
                        send(res, 404, err)
                    }
                    send(res, 200, worked)
                })
            });
   
    }
    else{
        send (res, 404, "URL Problem");
    }
}

module.exports.deleteUserByUsername = function(req, res){
    if(req.params){ 
        user
            .remove({username: "paulcaff"})
            .exec(function(err, user){
                if(!user){
                    send (res, 404, "the user was not found");
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

 
var send = function(res, status, content){
    res.status(status);
    res.json(content);
}
  