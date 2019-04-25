const router = require('express').Router()
const ApodController = require('../controllers/apodController')
const { authentication } =require('../middlewares/authentication')

router.use(authentication)
router.post('/', ApodController.createApod)
router.get('/', ApodController.findAllApod)
router.get('/:id', ApodController.findOneApod)

module.exports = router