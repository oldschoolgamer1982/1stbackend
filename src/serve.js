const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Sergio')
})
 
app.listen(3000)