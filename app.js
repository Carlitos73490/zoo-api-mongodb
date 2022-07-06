import createError from "http-errors";
import {router} from './routes/animals.routes.js'
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import {config} from 'dotenv'
config()

export const app = express();


//Mongoose

const mongodb = process.env.DATABASE_URL;
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


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//Mes routes


app.use('/animals', router);

//const zookeepersRouter = require('./routes/zookeepers.routes');
//app.use('/zookeepers', zookeepersRouter);



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

