const mongoose = require('mongoose');
const team = mongoose.model('team');

module.exports.findTeamUser = function(req, res){
      
    if(req.params){ 
        team
            .find({username: req.body.username})
            .exec(function(err, user){
                if(team == 0){
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
     if(req.params){
          
         team
             .create({
                 username: req.body.username,
                 team: [{
                    number :req.body.number,
                    position: req.body.position,
                    name: req.body.name,
                    weight: req.body.weight,
                    age: req.body.age,
                    image: req.body.image
                  }]
             },            
             function(err, team){
                
                  if(err){ 
                      console.log("here"+ err)
                     send (res, 404, err);
                 }
                 else{
                     send (res, 200, team);
                 }
             });
    
     }
     else{
         send (res, 404, "URL Problem");
         console.log("here"+ err)
     }
 }

 var send = function(res, status, content){
    res.status(status);
    res.json(content);
}