import express from 'express';
import connection from '../connection/index';
import config from '../login/config';
import {_client} from '../../index';
import Mongoclient from 'mongodb';
import jwt from 'jsonwebtoken';

let testing = express.Router();
let app = express();
app.set('superSecret', config.secret);

testing.get('/' , (req, res) => {
	res.status(200).send("testing fonctionne")
});

testing.post('/' , (req, res) => {
	let token = req.body.token || req.query.token || req.headers['x-access-token'];
	if (token) {
		console.log(token);
		jwt.verify(token, app.get('superSecret'), function (err, decode) {
			if (err) {
				return res.json({ success: false, message: 'Invalid token '})
			} else {
				req.decode = decode;
				console.log(req.decode);
				res.status(200).send('Welcome Captain Youz');
			}
		});
	} else {
		return res.status(403).send({
			success: false,
			message: 'No token provided'
		});
	}
});

export default testing ;