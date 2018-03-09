const express = require('express')
var app = express();
const path = require('path')
const PORT = process.env.PORT || 5000

  //static pages will be found in dir public
  app.use(express.static(path.join(__dirname, 'public')))
  //static pages will be found in views
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

  app.get('/', (req, res) => res.render('pages/index'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
