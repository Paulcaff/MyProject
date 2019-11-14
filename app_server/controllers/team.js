const request = require('request');
var apiOptions = {server : 'http://localhost:3000'};
 
  if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://dashboard.heroku.com/apps/boiling-wave-48275/settings'; 
  }
  
  const getPlayers = function(req,res){
  
      
  
    };

/* GET home page */
const selectTeam = function(req, res){
  var path = '/api/players';
     requestOptions={
       url: apiOptions.server + path,
       method : 'GET',
       json :{         
       }
     } 
      request(
        requestOptions,
        function(err, response, body){
          console.log(response); 
          if (response.statusCode == 200) {
            console.log(body);
            res.render('select',{
              title:'Team Display', 
              players: body
              
            })

          } else{ 
          console.log("players not dound",err);
          res.render('display',{
            title:'Team Display', 
          })
          } 
      })

}

const display = function(req, res){

  var path = '/api/players';
     requestOptions={
       url: apiOptions.server + path,
       method : 'GET',
       json :{         
       }
     } 
      request(
        requestOptions,
        function(err, response, body){
          console.log(response); 
          if (response.statusCode == 200) {
            console.log(body);
            res.render('display',{
              title:'Team Display', 
              players: body
              
            })

          } else{ 
          console.log("players not dound",err);
          res.render('display',{
            title:'Team Display', 
          })
          } 
      })

  
}

module.exports = { selectTeam, display,getPlayers };