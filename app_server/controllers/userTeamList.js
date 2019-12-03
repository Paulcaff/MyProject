const request = require('request');
var apiOptions = {server : 'http://localhost:3000'};
 
  if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://dashboard.heroku.com/apps/boiling-wave-48275/settings'; 
  }
  
  

/* GET home page */
const createUserTeam = function(req, res){
  console.log("ddddddddddd")
  var path = '/api/userteam';
     requestOptions={
       url: apiOptions.server + path,
       method : 'GET',
       json :{         
       }
     } 
      request(
        requestOptions,
        function(err, response, body){
          console.log(response.statusCode); 
          if (response.statusCode == 200) {
            console.log(body);
            res.render('select',{
              title:'Team Selection', 

              //playersel: body
              
            })

          } else{ 
          console.log("players not Found",err);
          res.render('select',{
            title:'Team Select', 
          })
          } 
      })

  }

  const addSelectedPlayer = function(req, res){
    console.log("CCC")
    console.log(req.params);
    var path = '/api/userteamPlayers';
       requestOptions={
         url: apiOptions.server + path,
         method : 'POST',
         json :{       
         },
         qs:{
           name:req.params.name,
           number:req.params.number
         }
       } 
        request(
          requestOptions,
          function(err, response, body){
            console.log(response.statusCode); 
            if (response.statusCode == 200) {
              console.log('EEE');
              res.redirect('/select');
  
            } else{ 
            console.log("players not Found here",err);
            res.render('select',{
              title:'Team Select', 
            })
            } 
        })
  
  }

  module.exports.teamCreate = function(req, res){
    // send(res,100,"body.position");
    
     if(req.params.username){
        console.log("getting called OOOOOOOOOOOOOOOO") 
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




module.exports = { createUserTeam, addSelectedPlayer };