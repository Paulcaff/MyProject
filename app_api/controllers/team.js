const mongoose = require('mongoose');
const player = mongoose.model('player');




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



 
var send = function(res, status, content){
    res.status(status);
    res.json(content);
}




 

