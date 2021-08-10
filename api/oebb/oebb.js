var express = require('express');
var router = express.Router();

var oebb = require('oebb');
const axios = require('axios');

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

const callGet = (url, params, headers, res) => {
  axios.get(url,
  {
    params: params,
    headers: headers
  })
  .then(response => {
    res.status(response.status).send(response.data);
  })
  .catch(error => {
    console.log('error:', error);
    res.status(error.response.status).send(error.response);
  })
}

const callPost = (url, body, headers, res) => {
  axios.post(url, body, {
    headers: headers
  })
  .then(response => {
    res.status(response.status).send(response.data);
  })
  .catch(error => {
    console.log('error:', error);
    res.status(error.response.status).send(error.response);
  })
}

router.get('/auth', function (req, res) {
  let headers = {
    'Content-Type': req.headers['content-type'] ?? 'application/json'
  }

  callGet('https://tickets.oebb.at/api/domain/v4/init', req.query, headers, res)
})

const getAutHeadersFrom = (req) => {
  return {
    'Content-Type': req.headers['content-type'] ?? 'application/json',
    'AccessToken' : req.headers['accesstoken'] ?? '',
    'x-ts-supportid' :  req.headers['x-ts-supportid'] ?? '',
    'session' : req.headers['session'] ?? '',
    'chanel' : req.headers['chanel'] ?? 'inet'
  }
}

router.get("/station/search", function (req, res) {
  let headers = getAutHeadersFrom(req);
  callGet('https://tickets.oebb.at/api/hafas/v1/stations', req.query, headers, res)
})

router.post("/travelActions", function (req, res) {
  let headers = getAutHeadersFrom(req);
  callPost('https://tickets.oebb.at/api/offer/v2/travelActions',
   req.body, headers, res)
})

module.exports = router;
