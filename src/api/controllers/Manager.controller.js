import ManagerService from "../services";
import logger from "../../util/logger";

// Manager Login
export const loginManager = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await ManagerService.authenticateManager(email, password)
			.then(async (manager) => {
				const authToken = await manager.generateAuthToken();
				const data = {
					_id: manager._id,
					email: manager.email,
					token: authToken,
					permissionLevel: manager.permissionLevel,
				};

				request.handleResponse.successRespond(response)(data);
			})
			.catch((error) => {
				const errorResponseData = {
					errorTime: new Date(),
					message: error.message,
				};

				logger.error(JSON.stringify(errorResponseData));
				request.handleResponse.errorRespond(response)(errorResponseData);
				next();
			});
	} else {
		logger.error("Username or Password is missing");
		request.handleResponse.errorRespond(response)("Username or Password is missing");
		next();
	}
};

// Manager Register
export const registerManager = async (req, res, next) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		contact: req.body.contact,
		nic: req.body.nic,
		permissionLevel: "MANAGER",
	};

	await ManagerService.insertManager(user)
		.then((data) => {
			logger.info(`New user with ID ${data._id} created`);
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			logger.error(error.message);
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Get Manager Details
export const getManagerDetails = async (req, res, next) => {
	await ManagerService.getManagerDetails(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Edit Manager Details
export const editManagerDetails = async (req, res, next) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};

	await ManagerService.editManagerDetails(req.params.id, user)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Delete Manager
export const deleteManager = async (req, res, next) => {
	await ManagerService.deleteManager(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};
