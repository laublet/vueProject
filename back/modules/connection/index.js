import express from 'express';
import mongoose from 'mongoose'
import login from '../login/index';
import users from '../users/index';

let app = express();

mongoose.Promise = global.Promise
//Connect to Database
let connection = () => {
	mongoose.connect(process.env.MONGOURL, {}, function (err) {
  if (err) { throw err; } else {
    console.log('Connection to the Database etablished (' + process.env.MONGOURL + ')...');
  }
})
}

export default connection;
