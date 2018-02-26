const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

let userModel = sequelize.define('users', {
	id	   : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
	name   : { type: Sequelize.STRING(100) },
	pass   : { type: Sequelize.STRING(100), allowNull: false }
}, {
	freezeTableName :  true, //默认false修改表名为复数, true不修改表名, 与数据库同步
	tableName       :  'users',
	timestamps      :  false
})

module.exports = userModel