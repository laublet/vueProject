import express from 'express';
import connection from '../connection/index';
import Mongoclient from 'mongodb';
import {_client} from '../../index';

let users = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'JWT';

users.get('/' , (req, res) => {
	res.status(200).send("users is working")
});

users.post('/' , (req, res) => {
	let db = _client.db(dbName);
	let dbCol = db.collection('test')
	let user = {
		username: req.body.username,
		password : req.body.password,
	};

	dbCol.insertOne(user, function (err, result){
		if(err) {
			res.status(404).send(err);
		} else {
			res.status(200).send('user created');
		}
	});
});

export default users ;