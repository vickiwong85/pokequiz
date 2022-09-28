var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/login', controller.pokemon.login)
router.post('/login', controller.pokemon.create)
router.patch('/pokedollars', controller.pokemon.updateDollars)
router.patch('/count', controller.pokemon.updateCount)
router.post('/add', controller.pokemon.add)
router.get('/list', controller.pokemon.list)
router.get('/pokemon/pokeball', controller.pokemon.getPoke)
router.get('/pokemon/greatball', controller.pokemon.getGreat)
router.get('/pokemon/ultraball', controller.pokemon.getUltra)
router.get('/pokemon/masterball', controller.pokemon.getMaster)

module.exports = router;
