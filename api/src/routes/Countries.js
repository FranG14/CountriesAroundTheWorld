const { Router } = require('express');
const {getTenCountries, getCountries, getCountriesById, getCountriesByName, addTodo} = require('./Controllers/countries')
const router = Router();

router.get('/', getTenCountries);
router.get('/all', getCountries);
router.get('/search/', getCountriesByName)
router.get('/:id', getCountriesById)
router.post('/', addTodo)

module.exports = router;
