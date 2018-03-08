import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import morgan from 'morgan'
import dotEnv from 'dotenv'
dotEnv.config()
import checkToken from './modules/checkToken/index'
import connection from './modules/connection/index'
import list from './modules/list/index'
import login from './modules/login/index'
import users from './modules/users/index'

let app = express();

app.use(morgan('dev'))

//Load database connection
connection()

app.use(function (req, res, next) {
	res.header(`Access-Control-Allow-Origin`, `*`);
	res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
	res.header(`Access-Control-Allow-Headers`, `Content-Type`);
	next();});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/users', users);
app.use('/login', login);
app.use(checkToken)
app.use('/list', list);

let host = process.env.HOST;
let port = process.env.PORT || 8080;
app.listen(port, () => console.log('App listen on port: ' + host + port))


