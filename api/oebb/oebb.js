var express = require('express');
var router = express.Router();

var oebb = require('oebb');
const axios = require('axios');

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.get('/auth', function (req, res) {
  axios.get('https://tickets.oebb.at/api/domain/v4/init',
  {
    params: req.query,
    headers: {
      'Content-Type': req.headers['content-type'] ?? 'application/json'
    }
  })
  .then(response => {
    res.status(response.status).send(response.data);
  })
  .catch(error => {
    console.log('error:', error);
    res.status(error.response.status).send(error.response);
  })
})

router.get("/station/search", function (req, res) {
  console.log('query:', req.query);
  console.log('headers:', req.headers);
  axios.get('https://tickets.oebb.at/api/hafas/v1/stations',
  {
    params: req.query,
    headers: {
      'Content-Type': req.headers['content-type'] ?? 'application/json',
      'AccessToken' : req.headers['accesstoken'] ?? '',
      'x-ts-supportid' :  req.headers['x-ts-supportid'] ?? '',
      'session' : req.headers['session'] ?? '',
      'chanel' : req.headers['chanel'] ?? 'inet'
    }
  })
  .then(response => {
    res.status(response.status).send(response.data);
  })
  .catch(error => {
    console.log('error:', error);
    res.status(error.response.status).send(error.response);
  })
})

module.exports = router;
