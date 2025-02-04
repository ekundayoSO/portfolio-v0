const express = require('express');
const hoganMiddleware = require('hogan-express');
const projectPath = require('path');

// Express configuration
const app = express();
app.set('views', projectPath.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hoganMiddleware); // Use hoganMiddleware directly here
app.use(express.static(projectPath.join(__dirname, 'public')));

// Routes
const routes = require('./routes/index');
app.use('/', routes);

// Start server
const port = 7000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
