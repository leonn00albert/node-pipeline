const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><br><p>this is an update!</p>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})