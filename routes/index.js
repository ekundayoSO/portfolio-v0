const express = require('express');
const router = express.Router();

router.get('/resume', (req, res) => {
  res.render('resume', { title: 'Express.js Application' });
});

router.get('/intro', (req, res) => {
  res.render('about', { title: 'About' });
});


module.exports = router;