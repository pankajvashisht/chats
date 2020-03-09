const { vaildation } = require('../../utils/DataValidation');
const app = require('../../libary/CommanMethod');
module.exports = async (Request, res, next) => {
	const requried = {
		first_name: Request.body.first_name,
		last_name: Request.body.last_name,
		email: Request.body.email,
		phone: Request.body.phone,
		phone_code: Request.body.phone_code,
		user_type: Request.body.user_type,
		password: Request.body.password,
		checkexist: 1
	};
	const non_required = {
		device_type: Request.body.device_type,
		device_token: Request.body.device_token,
		authorization_key: app.createToken(),
		otp: 1111 //app.randomNumber(),
	};
	try {
		Request.RequestData = await vaildation(requried, non_required);
		next();
	} catch (err) {
		return app.error(res, err);
	}
};
