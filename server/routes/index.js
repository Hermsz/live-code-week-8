const router = require('express').Router()
const user = require('./user')
const apod = require('./apod')

router.use('/users', user)
router.use('/apods', apod)

module.exports = router