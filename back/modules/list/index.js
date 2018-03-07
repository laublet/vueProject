import express from 'express';
import connection from '../connection/index';
import config from '../login/config';
import {_client} from '../../index';
import Mongoclient from 'mongodb';
import jwt from 'jsonwebtoken';

let list = express.Router();
let app = express();
const dbName = 'vueProject';

app.set('superSecret', config.secret);

list.get('/' , (req, res) => {
	res.status(200).send("list fonctionne")
});

list.post('/' , (req, res) => {
	let token = req.body.token || req.query.token || req.headers['x-access-token'];
	if (token) {
		console.log(token);
		var db = _client.db(dbName);
		jwt.verify(token, app.get('superSecret'), function (err, decode) {
			if (err) {
				return res.json({ success: false, message: 'Invalid token '})
			} else {
				db.collection('users').find({}).toArray(function (err, docs) {
					res.status (200).send ({ message:'Here is the list users', notes: docs });
					// docs.forEach (function (doc){
					// 	console.log ('title: '+ doc.title);
					// });
				});
				req.decode = decode;
				console.log(req.decode);
				res.status(200).json({ success: false, }).send("Captain Youz");
			}
		});
	} else {
		return res.status(403).send({
			success: false,
			message: 'No token provided'
		});
	}
});

export default list ;