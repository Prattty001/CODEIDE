const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const PORT =  3000;

// Set up view engine (if needed for rendering views)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev')); // Logs HTTP requests
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: false })); // Parses URL-encoded bodies
app.use(cookieParser()); // Parses cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serves static files

// Enable CORS
// const corsOptions = {
//   origin: 'http://localhost:3000', // Allow requests from the frontend
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
//   credentials: true, // Allow credentials (e.g., cookies, authentication headers)
// };
app.use(cors());

// Routes
app.use('/api', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  if (req.accepts('json')) {
    res.json({
      success: false,
      error: {
        message: err.message,
        status: err.status,
      },
    });
  } else {
    res.render('error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
