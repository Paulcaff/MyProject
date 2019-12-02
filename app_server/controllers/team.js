const request = require('request');
var apiOptions = {server : 'http://localhost:3000'};
 
  if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://dashboard.heroku.com/apps/boiling-wave-48275/settings'; 
  }
  
  const getPlayers = function(req,res){
    };

/* GET home page */
 const selectTeam = function(req, res){
   getAllPlayers(req, res);
   //_renderSelectTeam(p, s);
//   var path = '/api/userteam';
//      requestOptions={
//        url: apiOptions.server + path,
//        method : 'GET',
//        json :{         
//        }
//      } 
//       request(
//         requestOptions,
//         function(err, response, body){
//          // console.log(response); 
//           if (response.statusCode == 200) {
//             console.log(body);
//             res.render('select',{
//               title:'Team Display', 
//               playersel: body
              
//             }) 

//           } else{ 
//           console.log("players not found");
//           res.render('select',{
//             title:'Team Select', 
//           })
//           } 
//       })

 }



const getSelPlayers = function(req, res, p){
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
         // console.log(response); 
          if (response.statusCode == 200) {
            console.log('BBB');
            console.log(body);
            res.render('select',{
             title:'Team Display', 
             playersel: body,
             players:p
             
            }) 

          } else{ 
          console.log("players not found");
          res.render('select',{
            title:'Team Select', 
          })
          } 
      })

}

const getAllPlayers = function(req, res){
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
         // console.log(response); 
          if (response.statusCode == 200) {
            console.log('AAA');
            getSelPlayers(req,res,body);
          
            //res.render('select',{
            //  title:'Team Display', 
            //  playersel: body
            //  
            //}) 

          } else{ 
          console.log("players not found");
          res.render('select',{
            title:'Team Select', 
          })
          } 
      })

}

const _renderSelectTeam = function(players, selPlayers){
  res.render('select', {
    title:'Team Select',
    players: players,
    sel: selPlayers
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
          console.log("players not found",err);
          res.render('display',{
            title:'Team Display', 
          })
          } 
      })

  
}

module.exports = { selectTeam, display,getPlayers };