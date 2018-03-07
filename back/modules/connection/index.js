import express from 'express';
import login from '../login/index';
import users from '../users/index';
import Mongoclient from 'mongodb';

let app = express();
// let _client = '';
const url = 'mongodb://localhost:27017';
const dbName = 'JWT';

//Connect to Database
let connection = () => {
	let _client = '';
	let app = express();
	return new Promise ((resolve, reject) => {
		return Mongoclient.connect(url,  (err, client) => {
			if (err) console.log('Erro! ', err);
			else {
				console.log("Connected successfully to server");
				_client = client;
				return resolve(_client);
			}
		});
	})
}

export default connection;
