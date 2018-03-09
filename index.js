const express = require('express')
var app = express();
const path = require('path')
var url = require('url');
const PORT = process.env.PORT || 5000

  //static pages will be found in dir public
  app.use(express.static(path.join(__dirname, 'public')))
  //static pages will be found in views
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

  app.get('/rate', function(req,res){
    handleRate(req,res);
  })
  app.get('/', (req, res) => res.render('pages/index'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function handleRate(request, response){
    var requestUrl = url.parse(request.url, true);

    var weight = Number(requestUrl.query.Weight);
    var mType = requestUrl.query.mailType;

    calRate(response,weight,mType);
  }

  function calRate(response,weight,mType){
    var cost = 0;
    switch (mType) {
      case "Letters (Stamped)":
        switch (weight) {
          case 1:
            cost = .50;
            break;
          case 2:
            cost = .71;
            break;
          case 3:
            cost = .92;
            break;
          default:
            cost = 1.13;
        }
        break;
      case "Letters (Metered)":
      switch (weight) {
        case 1:
          cost = .47;
          break;
        case 2:
          cost = .68;
          break;
        case 3:
          cost = .89;
          break;
        default:
          cost = 1.10;
      }
        break;
      case "Large Envelopes (Flats)":
      switch (weight) {
        case 1:
          cost = 1.00;
          break;
        case 2:
          cost = 1.21;
          break;
        case 3:
          cost = 1.42;
          break;
        case 4:
          cost = 1.63;
          break;
        case 5:
          cost = 1.84;
          break;
        case 6:
          cost = 2.05;
          break;
        case 7:
          cost = 2.26;
          break;
        case 8:
          cost = 2.47;
          break;
        case 9:
          cost = 2.68;
          break;
        case 10:
          cost = 2.89;
          break;
        case 11:
          cost = 3.10;
          break;
        case 12:
          cost = 3.31;
          break;
        case 13:
          cost = 3.52;
          break;
        }
        break;
      case "First-Class Package Service—Retail":
      switch (weight) {
        case 1:
          cost = 3.50;
          break;
        case 2:
          cost = 3.50;
          break;
        case 3:
          cost = 3.50;
          break;
        case 4:
          cost = 3.50;
          break;
        case 5:
          cost = 3.75;
          break;
        case 6:
          cost = 3.75;
          break;
        case 7:
          cost = 3.75;
          break;
        case 8:
          cost = 3.75;
          break;
        case 9:
          cost = 4.10;
          break;
        case 10:
          cost = 4.45;
          break;
        case 11:
          cost = 4.80;
          break;
        case 12:
          cost = 5.15;
          break;
        case 13:
          cost = 5.50;
          break;
        }
        break;
    }

    var price = {Rate:cost,weight:weight,mType:mType};
    response.render('displayRate',price);
  }
