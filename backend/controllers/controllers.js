const getResume = (req, res) => {
  res.render('resume', null);
};

const getIntro = (req, res) => {
  res.render('about', null);
};

const getProjects = (req, res) => {
  res.render('projects', null);
};

module.exports = {getResume, getIntro, getProjects};