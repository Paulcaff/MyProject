const request = require('request');

const apiOptions = { 
  server : 'http://localhost:3000' 
  }; 
  if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://dashboard.heroku.com/apps/boiling-wave-48275/settings'; 
  }
  

/* GET home page */
const selectTeam = function(req, res){
  res.render('select',{
    title:'Team Selection'
  })
}

const display = function(req, res){
  res.render('display',{
    title:'Team Display'
  })
}

module.exports = { selectTeam, display };