import express from 'express';
import connection from '../connection/index';
import Mongoclient from 'mongodb';
import {_client} from '../../index';

let users = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'vueProject';

users.get('/test' , (req, res) => {
	res.status(200).send("users is working")
});

users.post('/old' , (req, res) => {
	let db = _client.db(dbName);
	let dbCol = db.collection('users')
	let user = {
		username: req.body.username,
		email: req.body.email,
		password : req.body.password,
		message : req.body.message,
	};

	dbCol.insertOne(user, function (err, result){
		if(err) {
			res.status(404).send(err);
		} else {
			res.status(200).send('user created');
		}
	});
});

users.post('/' , (req, res) => {
	let db = _client.db(dbName);
	let dbCol = db.collection('users')
	if (req.body.username && req.body.email && req.body.password ) {
		db.collection('users').find({email : req.body.email }).toArray(function (err, docs) {
			console.log ('Getting DB datas');
			console.log (req.body.username);
			console.log (docs.length);
			if (docs.length > 0) {
				console.log ('This username and/or email is already taken !');
				res.status(404).send ("This username and/or email is already taken !")
			} else {
				let user = {
					username: req.body.username,
					email: req.body.email,
					password : req.body.password,
					message : req.body.message,
				};
				dbCol.insertOne(user, function (err, result){
					if(err) {
						res.status(404).send(err);
					} else {
						res.status(200).send('Congrat ! User created !');
					}
				});
			}
		});

	} else {
		res.status(404).send ("You need to fill the obligatory input")
	}
})

export default users ;