import SupplierService from "../services";
import logger from "../../util/logger";

// Supplier Login
export const loginSupplier = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await SupplierService.authenticateSupplier(email, password)
			.then(async (supplier) => {
				const authToken = await supplier.generateAuthToken();
				const data = {
					_id: supplier._id,
					email: supplier.email,
					token: authToken,
					permissionLevel: supplier.permissionLevel,
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

// Supplier Register
export const registerSupplier = async (req, res, next) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		contact: req.body.contact,
		permissionLevel: "SUPPLIER",
	};

	await SupplierService.insertSupplier(user)
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

// Get Supplier Details
export const getSupplierDetails = async (req, res, next) => {
	await SupplierService.getSupplierDetails(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Edit Supplier Details
export const editSupplierDetails = async (req, res, next) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};

	await SupplierService.editSupplierDetails(req.params.id, user)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Delete Supplier
export const deleteSupplier = async (req, res, next) => {
	await SupplierService.deleteSupplier(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};
