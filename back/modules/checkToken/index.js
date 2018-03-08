import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser'

let app = express();

let checkToken = (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === process.env.AUTHBEARER) {
    jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRETKEY, function (err, decode) {
      if (err) res.status(500).json({success: false, message: err})
        else {
          console.log(decode)
          req.decode = decode
          next()
        }
      });
  } else {
    res.status(403).json({success: false, message: 'You shall not pass !'})
  }
};

export default checkToken;