module.exports = function(req, res, next){
  res.header('Acess-Controll-Allow-Origin', '*')
  res.header('Acess-Controll-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Acess-Controll-Allow-Methods', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}