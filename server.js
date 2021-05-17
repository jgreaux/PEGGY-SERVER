const express = require('express')
const app = express()
const port = 3000

const hello = require('./api/hello');

app.use(express.static('public'))

app.get('/api/hello', (req, res) => {
    res.send(hello(req))
  })
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })