var models = require('../models');


module.exports = {
  login: function (req, res) {
    var params = req.query;
    return models.pokemon.login(params)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  create: function (req, res) {
    var params = req.body.params;
    return models.pokemon.create(params)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err)
    })
  },
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
  },
  updateDollars: function (req, res) {
    console.log(req.body.params)
    var params = req.body.params
    return models.pokemon.updateDollars(params)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  updateCount: function (req, res) {
    console.log(req.body.params)
    var params = req.body.params;
    return models.pokemon.updateCount(params)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  add: function (req, res) {
    console.log(req.body.params)
    var params = req.body.params;
    return models.pokemon.add(params)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  list: function (req, res) {
    var params = req.query;
    return models.pokemon.list(params)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err)
    })
  }
};
