const mongoose = require('mongoose');

module.exports.getTeam = function(req,res){
    res.status(200);
    res.json({"status":"worked"});
};