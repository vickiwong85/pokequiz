var models = require('../models');


module.exports = {
  getPoke: function (req, res) {
    return models.pokemon.getPoke()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  getGreat: function (req, res) {
    return models.pokemon.getGreat()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  getUltra: function (req, res) {
    return models.pokemon.getUltra()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  getMaster: function (req, res) {
    return models.pokemon.getMaster()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
};
