var express = require('express');
var router = express.Router();

var Pusher = require('pusher');

var pusher = new Pusher({
  appId:  process.env.APP_ID,
  key: process.env.APP_KEY,
  secret: process.env.APP_SECRET,
  cluster: process.env.CLUSTER,
  encrypted: true
});

// /* Vote
router.post('/', function(req, res, next) {
  pusher.trigger('poll', 'vote', {
    points: 10,
    framework: req.body.framework
  });
  res.send('Voted');
});

module.exports = router;
