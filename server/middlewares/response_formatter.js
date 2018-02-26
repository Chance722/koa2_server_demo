const ApiError = require('../app/error/ApiError')

let response_formatter = async (ctx) => {
	// //先执行路由
	// await next()

	if(ctx.body) {
		ctx.body = {
			code: 0,
			message: 'success',
			data: ctx.body
		}
	}else {
		ctx.body = {
			code: 0,
			message: 'success'
		}
	}

}

let url_filter = (pattern) => {
	return async (ctx, next) => {
		let reg = new RegExp(pattern)
		//先执行路由
		try {
			await next()
		}catch (error) {
			//如果异常类型是API异常并且通过正则验证的url，将错误信息添加到响应体中返回。
			if(error instanceof ApiError && reg.test(ctx.originalUrl)) {
				ctx.status = 200;
                ctx.body = {
                    code: error.code,
                    message: error.message
                }
			}

			//TODO	添加log4.js
			//继续抛出 让外层中间件处理日志
			// throw error
		}
		
		if(reg.test(ctx.originalUrl)) {
			response_formatter(ctx)
		}
			
	}

}

module.exports = url_filter