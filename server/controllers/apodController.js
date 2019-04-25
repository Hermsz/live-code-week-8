const ApodModel = require('../models/apod')
const axios = require('axios')


class ApodController {

  static createApod(req, res) {
    axios
      .get(`https://api.nasa.gov/planetary/apod?&date=${req.body.date.slice(0, 10)}&api_key=${process.env.NASA_API}`)
      .then(( {data} ) => {

        ApodModel.create({
          date: data.date,
          title: data.title,
          desc: data.explanation,
          url: data.url,
          mediaType: data.media_type
        })

        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static findAllApod(req, res) {
    ApodModel
      .find()
      .then(allApod => {
        res.status(200).json(allApod)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static findOneApod(req, res) {
    ApodModel
      .findById(req.params.id)
      .then(foundApod => {
        res.status(200).json(foundApod)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

}

module.exports = ApodController

