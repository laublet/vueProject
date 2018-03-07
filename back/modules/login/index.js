import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from './../../models/User'
import Token from './../../models/Token'
let login = express.Router();
let app = express();

login.post('/', (req, res) => {
	if (req.body.email && req.body.password) {
		User.findOne({ email: req.body.email }, function (err, user) {
			if (err) res.status(500).json({success: false, message: err.message})
				if (!user) {
					res.status(401).json({success: false, message: 'User not found' })
				} else if (user) {
					if (!user.comparePasswords(req.body.password)) {
						res.status(401).json({success: false, message: 'Wrong password..' })
					} else {
						jwt.sign(
							{ email: user.email,
								id: user._id
							},
								process.env.SECRETKEY,
								function (err, result) {
									let newToken = new Token({token: result});
									newToken.save(function (err, e) {
										if (err) {
											res.status(500).json({success: false, message: err.message})
										} else {
											res.status(200).json({success: true, message: 'Here is your AwesomeToken !', content: {token: process.env.AUTHBEARER + ' ' + result, userId: user._id}})
										}
									})
								})
					}
				}
			})
	} else {
		res.status(412).json({success: false, message: 'Email and/or password are mising..'})
	}
})

export default login ;