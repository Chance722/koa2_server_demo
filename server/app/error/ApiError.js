const ApiErrorNames = require('./ApiErrorNames')

/**
 *	API异常类
 */

 class ApiError extends Error {
 	constructor(error_name) {
 		super()
 		
 		let error_info = ApiErrorNames.getErrorInfo(error_name)
 		this.name = error_name
 		this.code = error_info.code
 		this.message = error_info.message
 	}
 }

 module.exports = ApiError