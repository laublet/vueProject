import express from 'express'
// import connection from '../connection/index'
import bcrypt from 'bcrypt'
import User from './../../models/User'

let users = express.Router();

users.post('/', (req, res) => {
  if (req.body.email && req.body.username &&req.body.password) {
    User.findOne({ email: req.body.email}, function (err, bob) {
      if (bob === null) {
        let newUser = new User(req.body)
        newUser.hash_password = bcrypt.hashSync(req.body.password, 10)
        newUser.save(function (err, lol) {
          if (err) {
            res.status(400).json({success: false, message: err.message})
          } else {
            lol.hash_password = undefined
            res.status(200).json({success: true, message: 'Tadaaa ! New user registed', content: lol})
          }
        })
      } else {
        res.status(412).json({success: false, message: 'This email is already taken'})
      }
    })
  } else {
    res.status(412).json({success: false, message: 'You need to enter an email and a password !'})
  }
})

export default users ;