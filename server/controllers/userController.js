const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('../helpers/jwtConvert')

class UserController {

  static register(req, res) {
    User
      .create({
        email: req.body.email,
        password: req.body.password
      })
      .then(newUser => {
        res.status(201).json(newUser)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static login(req, res) {
    User
    .findOne({
      email: req.body.email
    })
    .then(foundUser => {
      if(!foundUser) {
        res.status(401).json('You are not registered')
      } else {
        const verifyPassword = bcrypt.compareSync(req.body.password, foundUser.password)
        if(!verifyPassword) {
          res.status(401).json({
            message: `Wrong password`
          })
        } else {
          let token = jwt.sign({
            id: foundUser._id,
            email: foundUser.email
          }, process.env.JWT_SECRET )
          req.headers.token = token
          res.status(200).json(
            {
            accessToken: token
            })
        }
      }
    })
    .catch(err => {
        res.status(500).json(err)
      })
  }


  

}

module.exports = UserController
