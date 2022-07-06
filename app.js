const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();


//Mongoose

const mongoose = require('mongoose');
const mongodb = 'mongodb+srv://ThienChi:PwBd7m9xkL32L9HW@clusterzoo.auqan.mongodb.net/zoo?retryWrites=true&w=majority';
const database = mongoose.connection;
mongoose.connect(mongodb,
    {
      useNewUrlParser : true,
      useUnifiedTopology : true
    })

database.on('error',console.error.bind(console,'connection error :'),)
database.on('open',() =>{
  console.log('connected to database')
})

// Config Générique express


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Mes routes


const animalsRouter = require('./routes/animals');
app.use('/animals', animalsRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
