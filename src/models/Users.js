const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:docker@localhost:5432');
const Posts = require('./Posts');

class Users extends Model {}

Users.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Users'
});

Users.hasMany(Posts);
Posts.belongsTo(Users);

module.exports = Users;