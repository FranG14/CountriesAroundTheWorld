const { Todo, Country } = require('../../db')
const {BASE_URL, SEARCH_NAME, SEARCH_CODE} = require('../../../constants')

// async function addTodo(req, res, next) {
//     let body = req.body;
//     let todo = await Todo.create({
//         name: body.name,
//         difficulty: body.difficulty,
//         length: body.length,
//         season: body.season,
//         id: body.id
//     })
//     let array = body.countries
//     array.forEach(async country => {
//         let countryTodo = await Country.findByPk(country)
//         countryTodo.setTodo(todo)
//     })
//     res.json(todo)




    //     if (!todo) return res.send({error: 500, message: 'El body esta vacio'});
    //     try {
    //         const createdTodo = await Todo.create(todo)
    //         res.send(createdTodo);
    //     }
    //     catch (error) {
    //         next(error);
    //     }
    // }
// }

module.exports = {
    addTodo
}
// traer paises mios y api
// agregar paises (body)
// traer uno solo(id)
// editar(id, body)
// borrar(id)