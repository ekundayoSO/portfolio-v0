const express = require('express');
const { getResume, getIntro, getProjects } = require('../controllers/controllers');
const router = express.Router();

router.get('/resume', getResume);

router.get('/intro', getIntro);

router.get('/projects', getProjects);


module.exports = router;