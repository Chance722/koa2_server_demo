const ApiError = require('../error/ApiError')
const ApiErrorNames = require('../error/ApiErrorNames')
const dataUtils = require('../helper/dataUtils')
const userModel = require('../models/user')

class userService {

	static async getUser(ctx) {
		//如果id为空 则抛出API异常
		if(!ctx.query.id) {
			throw new ApiError(ApiErrorNames.USER_NOT_EXIST)
		}

		let user = await userModel.find({
			where: {
				id: ctx.query.id
			}
		})

		if(user) {
			ctx.body = {
				username: user.name,
				password: user.pass
			}
		}else {
			throw new ApiError(ApiErrorNames.USER_NOT_EXIST)
		}

	}

	static async addUser(ctx) {
		if( dataUtils.isEmpty(ctx.query.name) || dataUtils.isEmpty(ctx.query.password) ) {
			throw new ApiError(ApiErrorNames.LACK_PARAMS_ERROR)
		}

		let res = userModel.create({
			name: ctx.query.name,
			pass: ctx.query.password
		})


	}

}

module.exports = userService