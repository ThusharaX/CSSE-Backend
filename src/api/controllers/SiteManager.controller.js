import SiteManagerService from "../services";
import logger from "../../util/logger";

// SiteManager Login
export const loginSiteManager = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await SiteManagerService.authenticateSiteManager(email, password)
			.then(async (siteManager) => {
				const authToken = await siteManager.generateAuthToken();
				const data = {
					_id: siteManager._id,
					email: siteManager.email,
					token: authToken,
					permissionLevel: siteManager.permissionLevel,
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

// SiteManager Register
export const registerSiteManager = async (req, res, next) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		contact: req.body.contact,
		nic: req.body.nic,
		permissionLevel: "SITE_MANAGER",
	};

	await SiteManagerService.insertSiteManager(user)
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

// Get SiteManager Details
export const getSiteManagerDetails = async (req, res, next) => {
	await SiteManagerService.getSiteManagerDetails(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Edit SiteManager Details
export const editSiteManagerDetails = async (req, res, next) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};

	await SiteManagerService.editSiteManagerDetails(req.params.id, user)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Delete SiteManager
export const deleteSiteManager = async (req, res, next) => {
	await SiteManagerService.deleteSiteManager(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};
