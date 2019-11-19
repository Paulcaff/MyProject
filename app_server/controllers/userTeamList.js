const request = require('request');
var apiOptions = {server : 'http://localhost:3000'};
 
  if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://dashboard.heroku.com/apps/boiling-wave-48275/settings'; 
  }
  
  

/* GET home page */
const createUserTeam = function(req, res){
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
          console.log(response); 
          if (response.statusCode == 200) {
            console.log(body);
            res.render('select',{
              title:'Team Display HEREEEEE', 
              //players: body
              
            })

          } else{ 
          console.log("players not Found",err);
          res.render('display',{
            title:'Team Display', 
          })
          } 
      })

}



module.exports = { createUserTeam };