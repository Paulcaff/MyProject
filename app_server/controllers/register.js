
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

module.exports = { register, index };