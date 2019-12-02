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
                 team: [{}]
                  
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

 module.exports.teamPlayersAdd = function(req, res){
    // send(res,100,"body.position");
    var username = req.body.username;
    if(username){
        team
        .find({username: req.body.username})
            .exec(
                function(err,team){
                    if(team.length == 0){
                        send (res, 400, "the user was not found");
                    }
                    else{
                        console.log("heeeeeereeeeee")
                        doAddPlayer(req,res,team[0]);
                        send (res, 200, team);
                    }
                }
            );

    } else {
        send(res,404, "not Found, username required");
    }
}


var doAddPlayer = function(req,res,team){
   console.log("Team" + team.username);
    if(!team){
        send(res,404,"team not found");
    }
    else{
        team.team.set(req.body.number -1,{
            position: req.body.position,
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            image: req.body.image,
            number: req.body.number

        });
        team.save(function(err,team){
            if(err){
                send(res,400,err);
            }
        })
    }
}

module.exports.teamPlayersAll = function(req, res){
    // send(res,100,"body.position");
    var username = "pcaff";
    if(username){
        team
        .find({username: "pcaff"})
            .exec(
                function(err,team){
                    if(team.length == 0){
                        send (res, 400, "the user was not found");
                    }
                    else{
                        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                        send (res, 200, team[0].team);
                    }
                }
            );

    } else {
        send(res,404, "not Found, username required");
    }
}




 var send = function(res, status, content){
    res.status(status);
    res.json(content);
}