const express = require('express');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
  res.render('puddence')
})

app.listen(8000)
