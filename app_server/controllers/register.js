const request = require('request');
const teampages = require('../controllers/team');
var apiOptions = {server : 'http://localhost:3000'};
 
  if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://dashboard.heroku.com/apps/boiling-wave-48275/settings'; 
  }

  const registerUser = function(req,res){
  
    console.log("aaaaa");
    console.log(req.body.password);
    console.log(req.body.confirm);

    if(req.body.password === req.body.confirm && req.body.password != ""){

        var path = '/api/user';
      requestOptions={
        url: apiOptions.server + path,
        method : 'POST',
        json :{
          firstname : req.body.firstname,
          lastname : req.body.lastname,
          username : req.body.username,
          email : req.body.email,
          password : req.body.password,
          
        }
      } 
        request(
          requestOptions,
          function(err, response, body){ 
            if (response.statusCode == 200) { 
            console.log("user registered");
             
            teampages.selectTeam(req,res);
            
            } else { 
              res.render('register',{
                title: 'Login',
                message: 'Register Failed !!! Make sure all fields are filled'  
              })
            } 
        })
        
  }
  else{
    res.render('register',{
      title: 'Register',
      message: 'Passwords not matching !!! Create account to log in'  
    }) 
  } 
  };

  const loginUser = function(req,res){
  
    console.log("logging in");
    console.log(req.body.password);
    if(req.body.password === req.body.confirm && req.body.password != ""){
      var path = '/api/userpaul';
     requestOptions={
       url: apiOptions.server + path,
       method : 'GET',
       json :{
         username : req.body.username,
         password : req.body.password,
         
       }
     } 
      request(
        requestOptions,
        function(err, response, body){ 
          if (response.statusCode == 200) { 
          console.log("user logging in");
          teampages.selectTeam(req,res); 
          } else { 
            res.render('register',{
              title: 'Login',
              message: 'User not found!!! Create account to log in'  
            })
          } 
      })
    }
    else{
      res.render('index',{
        title: 'Login',
        message: 'passwords not matching or entered'  
      })
     
      
    
    }
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

module.exports = { register, index, registerUser,loginUser};