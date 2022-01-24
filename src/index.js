const express = require('express')
const path = require('path')

const app = express()

const dir = path.join(__dirname, "../public")
app.use(express.static(dir))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/404.html"))
})

app.get('/public/Assignment1.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/Assignment1.html"))
})

app.get('/public/Assignment2.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/Assignment2.html"))
})

app.get('/public/imagepage.html', (req, res) => {
  res.senfFile(path.join(__dirname, "../public/imagepage.html"))
})
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})