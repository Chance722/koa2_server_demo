const userService = require('../../services/user_service')

class UserController {

	static async getUser(ctx) {

		return userService.getUser(ctx)

	}

	static async addUser(ctx) {

		return userService.addUser(ctx)

	}

}

module.exports = UserController