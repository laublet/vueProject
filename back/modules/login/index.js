import express from 'express';
import {_client} from '../../index';
import jwt from 'jsonwebtoken';
import config from './config';

let login = express.Router();
let app = express();
const dbName = 'vueProject';

app.set('superSecret', config.secret);

login.get('/' , (req, res) => {
	res.status(200).send("login is working")
});

login.post('/test', function (req, res) {
	var body = req.body;
	if (body.username && body.password) {
		var db = _client.db(dbName);
		db.collection('users').find({username : body.username}).toArray(function(err, docs){
			if (docs.length >0) {
				let doc = docs[0];
				if(doc.password == body.password) {
					const payload = {
						username: req.body.username,
						password: req.body.password,
					};
					let token = jwt.sign(payload, app.get('superSecret'), {
					});
					res.status(200).json({
						success: true,
						message: 'Enjoy your token!',
						token: token
					});
				}
				else res.status(412).send({message: 'Wrong password'});
			}
			else res.status(404).send({message: 'This username does not exist'});
		});
	}
	else res.status(412).send({message: 'You should provide an username AND a password'});
});

export default login ;