/**
 *	数据库初始化建表文件
 */

const mysql = require('./mysql')
const tab = require('./tab')

//初始化用户表
mysql.createTable(tab.users)
