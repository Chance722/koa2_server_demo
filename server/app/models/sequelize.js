/**
 *	Sequelize实例化文件
 */
const Sequelize = require('sequelize')
const config = require('../../config/database')

let sequelize = new Sequelize(
		config.database.DATABASE,
		config.database.USERNAME,
		config.database.PASSWORD,
		{
			host    : config.database.HOST,
			port    : config.database.PORT,
			dialect : 'mysql',
			define  : { timestamps : false },
			native  : false
		}
	)

module.exports = sequelize
