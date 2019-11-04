const request = require('request');
var apiOptions = {server : 'http://localhost:3000'};
 
  if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://dashboard.heroku.com/apps/boiling-wave-48275/settings'; 
  }

  const registerUser = function(req,res){
  console.log("aaaaa");
    var path = '/api/user';
   requestOptions={
     url: apiOptions.server + path,
     method : 'POST',
     json :{
       firstname : req.body.firstname,
       lastname : req.body.lastname,
       username : req.body.username,
       email : req.body.email,
       password : req.body.password
     }
   } 
    request(
      requestOptions,
      function(err, response, body){ 
        if (response.statusCode == 200) { 
        console.log("user registered"); 
        } else { 
        console.log("failed"); 
        } 
    })
  };
    



  

const register = function(req, res){
  res.render('register',{
    title:'Register'
  })
};

const index = function(req, res){
  res.render('index',{
    title:'Login'
  })
};

module.exports = { register, index, registerUser};