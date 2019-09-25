/* GET home page */
const selectTeam = function(req, res){
  res.render('select',{
    title:'Team selection'
  })
}

const display = function(req, res){
  res.render('display',{
    title:'Team Display'
  })
}

module.exports = { selectTeam, display };