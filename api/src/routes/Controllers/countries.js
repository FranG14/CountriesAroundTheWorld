const { Country, Todo } = require('../../db')
const axios = require('axios')
const { BASE_URL, SEARCH_NAME, SEARCH_CODE } = require('../../../constants');
const { Op } = require('sequelize');


const getRequest = async () => {
    try {
        const resp = await axios.get(`https://restcountries.eu/rest/v2/all`);
        return resp.data;
    } catch (error) {
        console.log('Cannot get countries')
        console.error(error)
    }
};

async function getCountries(req, res, next) {
    let data = await getRequest()
    const count = await Country.count()
    if (count < 250) {
        for (let i = 0; i < data.length; i++) {
            await Country.findOrCreate({
                where: {
                    id: data[i].alpha3Code,
                    name: data[i].name,
                    flag: data[i].flag,
                    region: data[i].region,
                    capital: data[i].capital,
                    subregion: data[i].subregion,
                    area: data[i].area,
                    population: data[i].population
                }
            })
        }
    }
    Country.findAll({ include: 'activities' }).then((country) => {
        res.send(country)
    })
};

async function getTenCountries(req, res, next) {
    let data = await getRequest()
    const count = await Country.count()
    if (count < 250) {
        for (let i = 0; i < data.length; i++) {
            await Country.findOrCreate({
                where: {
                    id: data[i].alpha3Code,
                    name: data[i].name,
                    flag: data[i].flag,
                    region: data[i].region,
                    capital: data[i].capital,
                    subregion: data[i].subregion,
                    area: data[i].area,
                    population: data[i].population
                }
            })
        }
    }
    let dataFirstTen = []
    for (let i = 0; i < 10; i++){
        dataFirstTen.push(data[i])
    }
    res.json(dataFirstTen)
};

async function getCountriesByName(req, res, next) {
    let countryName = req.query.name;
    let capName = countryName.charAt(0).toUpperCase() + countryName.slice(1)
    let searchResultA = await Country.findAll({
        where: {
            name: {
                [Op.like]: `%${capName}%`
            }
        }
    })
    let searchResultB = await Country.findAll({
        where: {
            name: {
                [Op.like]: `%${countryName}`
            }
        }
    })
    let unifiedSearch = searchResultA.concat(searchResultB)
    res.json(unifiedSearch)
}

async function getCountriesById(req, res, next) {
    let urlId = req.params.id
    const country = await Country.findByPk(urlId, { include: 'activities' })
    console.log(country)
    res.json(country)
}

async function addTodo(req, res, next) {
    let body = req.body;
    let todo = await Todo.create({
        title: body.title,
        difficulty: body.difficulty,
        length: body.length,
        season: body.season,
    })
    let array = body.countries
    console.log(array)
    array.forEach(async country => {
        let countryTodo = await Country.findByPk(country)
        countryTodo.addActivities(todo)
    })
    res.json(todo)
}
module.exports = {
    getTenCountries,
    getCountries,
    getCountriesByName,
    getCountriesById,
    addTodo
}
