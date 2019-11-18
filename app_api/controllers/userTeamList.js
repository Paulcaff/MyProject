const mongoose = require('mongoose');
const team = mongoose.model('team');

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

module.exports.teamCreate = function(req, res){
    // send(res,100,"body.position");
     if(req.params){
          
         team
             .create({
                 username: req.body.username,
                 players: [{
                    position: req.body.position,
                    name: req.body.name,
                    weight: req.body.weight,
                    age: req.body.age,
                    image: req.body.image
                  }]
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

const teamCreate = function (req, res) {
    team
        .create({
      name: req.body.name,
      address: req.body.address,
      facilities: req.body.facilities.split(","),
      coords: [parseFloat(req.body.lng), parseFloat(req.body.lat)],
      openingTimes: [{
        days: req.body.days1,
        opening: req.body.opening1,
        closing: req.body.closing1,
        closed: req.body.closed1,
      }, {
        days: req.body.days2,
        opening: req.body.opening2,
        closing: req.body.closing2,
        closed: req.body.closed2,
      }]
    }, (err, location) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(location);
      }
    });
  };









 
var send = function(res, status, content){
    res.status(status);
    res.json(content);
}