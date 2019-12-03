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
                     console.log("broke here");
                    for(var i=0; i<15; i++){
                          team.team.set(i,{
                              name: "",
                       // team.team.insert({"name":["","","","","","","","","","","","","","",""]})
                         
                
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

 module.exports.teamPlayersAdd = function(req, res){
    console.log('DDD')
    var username = "oooo";
    if(username){
        team
        .find({username: "oooo"})
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
        team.team.set(req.query.number -1,{
            
            name: req.query.name,         

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
    console.log('B1')
    var username = "oooo";
    if(username){
        team
        .find({username: "oooo"})
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