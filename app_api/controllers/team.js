const mongoose = require('mongoose');
const player = mongoose.model('player');



//returns all players
module.exports.findPlayer = function(req, res){
    if(req.params){ 
        player
            .find()
            .exec(function(err, player){
                if(!player){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }
                else{
                    send (res, 200, player);
                }
            });
   
    }
    else{
        send (res, 404, "URL Problem");
    }
}

//find player by position and return all player objects matching position
module.exports.findPlayerByPosition = function(req, res){
    if(req.params){ 
        player
            .find({position: "Outhalf"},'name')
            .exec(function(err, player){
                if(!player){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }
                else{
                    send (res, 200, player);
                }
            });
   
    }
    else{
        send (res, 404, "URL Problem");
    }
}

module.exports.createPlayer = function(req, res){
   // send(res,100,"body.position");
    if(req.params){
         
        player
            .create({
                position: req.body.position,
                name: req.body.name,
                weight: req.body.weight,
                age: req.body.age,
                image: req.body.image
            },            
            function(err, player){
               
                 if(err){ 
                    send (res, 404, err);
                }
                else{
                    send (res, 200, player);
                }
            });
   
    }
    else{
        send (res, 404, "URL Problem");
    }
}

//find player and update age
module.exports.updateAge = function(req, res){


    if(req.params){ 
        player
            .findById(req.params.playerId)
            .exec(function(err, player){
                if(!player){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }

                player.age = 100;
                player.save(function(err, worked){
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

//find player and update position
module.exports.updatePosition = function(req, res){


    if(req.params){ 
        player
            .findById(req.params.playerId)
            .exec(function(err, player){
                if(!player){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }

                player.position = "Sub";
                player.save(function(err, worked){
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

//find player and update name
module.exports.updateName = function(req, res){


    if(req.params){ 
        player
            .findById(req.params.playerId)
            .exec(function(err, player){
                if(!player){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }

                player.name = "Nakajima";
                player.save(function(err, worked){
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

//find player and update image path
module.exports.updateImage = function(req, res){


    if(req.params){ 
        player
            .findById(req.params.playerId)
            .exec(function(err, player){
                if(!player){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }

                player.image = "../../images/nothere.jpg";
                player.save(function(err, worked){
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

//find player and update weight
module.exports.updateWeight = function(req, res){


    if(req.params){ 
        player
            .findById(req.params.playerId)
            .exec(function(err, player){
                if(!player){
                    send (res, 404, "the player was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }

                player.weight = 400;
                player.save(function(err, worked){
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

module.exports.deletePlayer = function(req, res){
    if(req.params){ 
        player
            .remove({username: "Nakajima"})
            .exec(function(err, player){
                if(!player){
                    send (res, 404, "the user was not found");
                }
                else if(err){ 
                    send (res, 404, err);
                }
                else{
                    send (res, 200, player);
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




 

