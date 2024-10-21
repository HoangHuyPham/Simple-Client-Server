import express from 'express'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { api } from './routes';

var app = express();

const PORT = 3000

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', api);


app.listen(PORT, ()=>console.log(`Server start at ${PORT}`))

module.exports = app;
