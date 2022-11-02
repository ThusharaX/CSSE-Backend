import ProcurementStaffService from "../services";
import logger from "../../util/logger";

// ProcurementStaff Login
export const loginProcurementStaff = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await ProcurementStaffService.authenticateProcurementStaff(email, password)
			.then(async (procurementStaff) => {
				const authToken = await procurementStaff.generateAuthToken();
				const data = {
					_id: procurementStaff._id,
					email: procurementStaff.email,
					token: authToken,
					permissionLevel: procurementStaff.permissionLevel,
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

// ProcurementStaff Register
export const registerProcurementStaff = async (req, res, next) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		contact: req.body.contact,
		nic: req.body.nic,
		permissionLevel: "PROCUREMENT_STAFF",
	};

	await ProcurementStaffService.insertProcurementStaff(user)
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

// Get ProcurementStaff Details
export const getProcurementStaffDetails = async (req, res, next) => {
	await ProcurementStaffService.getProcurementStaffDetails(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Edit ProcurementStaff Details
export const editProcurementStaffDetails = async (req, res, next) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};

	await ProcurementStaffService.editProcurementStaffDetails(req.params.id, user)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Delete ProcurementStaff
export const deleteProcurementStaff = async (req, res, next) => {
	await ProcurementStaffService.deleteProcurementStaff(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};
