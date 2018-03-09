import express from 'express';
import connection from '../connection/index';
import User from './../../models/User'
let list = express.Router();

list.get('/users' , (req, res) => {
	console.log('test')
	User.find({}, {username: 1 , email: 1} ,(err, usersList) => {
		if (err) res.status(500).json({success: false, message: 'test'})
			else res.status(200).json({success: true, message: 'Here is the list of users!', content: usersList});
	})
});

list.get('/messages' , (req, res) => {
	// console.log(req.decode.email);
		User.find({email: req.decode.email}, { message: 1},(err, usersMessages) => {
			// console.log(usersMessages);
		if (err) res.status(500).json({success: false, message: err.message})
			else res.status(200).json({success: true, message: 'Here are your message!', content: usersMessages});
	})
});

list.get('/messages/all' , (req, res) => {
	// console.log(req.decode.email);
		User.find({}, { message: 1},(err, usersMessages) => {
			// console.log(usersMessages);
		if (err) res.status(500).json({success: false, message: err.message})
			else res.status(200).json({success: true, message: 'Here are your message!', content: usersMessages});
	})
});

export default list ;