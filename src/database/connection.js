const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:docker@localhost:5432');

module.exports = async () => {
    try {
        await sequelize.authenticate();
        console.log('deu bom fml');
    } catch (e) {
        console.log('ih deu ruim: ' + error)
    }
}