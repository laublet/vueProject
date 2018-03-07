import express from 'express';
import connection from '../connection/index';
import User from './../../models/User'
let list = express.Router();

list.get('/users' , (req, res) => {
	User.find({}, {username: 1 , email: 1} ,(err, users) => {
		if (err) res.status(500).json({success: false, message: err.message})
			else res.status(200).json({success: true, message: 'Here is the list of users!', content: users});
	})
});

list.get('/messages' , (req, res) => {
		User.find({}, { messages: 1},(err, users) => {
		if (err) res.status(500).json({success: false, message: err.message})
			else res.status(200).json({success: true, message: 'Here is the list of users!', content: users});
	})
});

export default list ;