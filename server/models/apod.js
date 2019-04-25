const mongoose = require('mongoose')
const Schema = mongoose.Schema
const axios = require('axios')

const ApodSchema = new Schema({
  date: {
    type: String,
  },
  title: {
    type: String
  },
  desc: {
    type: String
  },
  url: {
    type: String,
  },
  mediaType: {
    type: String
  }
})







// ApodSchema.pre('save', function (next) {
//   axios
//     .get(`https://api.nasa.gov/planetary/apod?&date=${req.body.date.slice(0, 10)}&api_key=${process.env.NASA_API}`)
//     .then(({ data }) => {
//       console.log(data, 'ini di presave')
//       this.date = data.date
//       this.title = data.title
//       this.description = data.explanation
//       next()
//     })
//     .catch(err => {
//       console.log.log(err)
//     })
// })

const Apod = mongoose.model('Apod', ApodSchema)
module.exports = Apod