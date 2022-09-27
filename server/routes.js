var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/pokeball', controller.pokemon.getPoke)
router.get('/greatball', controller.pokemon.getGreat)
router.get('/ultraball', controller.pokemon.getUltra)
router.get('/masterball', controller.pokemon.getMaster)

module.exports = router;
