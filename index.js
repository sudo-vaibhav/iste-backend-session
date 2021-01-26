const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log(req.query['m'])
  return res.send(new Date())
})

app.listen(3000, () => {
  console.log('server is running')
})
