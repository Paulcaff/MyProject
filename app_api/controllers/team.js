const mongoose = require('mongoose');
const player = mongoose.model('player');


// module.exports.getTeam = function(req,res){
//     res.status(200);
//     res.json({"status":"worked"});
// };

module.exports.findPlayer = function(req, res){
      
    player
    .find({age: { $gte : 20}}, null, {limit: 20})
    .exec(function(err, location){ 
       send (res, 200, location);
    });
   
};
 
        var send = function(res, status, content){
            res.status(status);
            res.json(content);
        }

