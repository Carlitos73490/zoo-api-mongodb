import createError from "http-errors";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import {config} from 'dotenv'
import {router as animalsRouter} from './routes/animals.routes.js'
import {router as zooKeeperRouter} from './routes/zookeepers.routes.js'
import {router as authRouter} from './routes/auth.routes.js'
import morgan from 'morgan';

export const app = express();

//DotEnv init
config()

// Config Générique express

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//Mongoose
const mongodb = process.env.DATABASE_URL;
const database = mongoose.connection;
mongoose.connect(mongodb,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

database.on('error', console.error.bind(console, 'connection error :'))
database.on('open', () => console.log('connected to database'))

// Mes routes
app.use('/animals', animalsRouter);
app.use('/zookeepers', zooKeeperRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

