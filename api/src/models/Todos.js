const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    const Todo = sequelize.define('todo', {
        title: {
            type: DataTypes.STRING,
        },
        id: {
            primaryKey : true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.STRING
        },
        length: {
            type: DataTypes.STRING
        },
        season: {
            type: DataTypes.STRING
        }
    })
};
