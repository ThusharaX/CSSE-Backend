const jwt = require("jsonwebtoken");
import logger from "../../util/logger";
import SupplierModel from "../models/Supplier.model";

export const supplier_auth = async (request, response, next) => {
	try {
		const secret = process.env.JWT_SECRET;

		if (secret) {
			if (request.headers.authorization && request.headers.authorization.startsWith("Bearer")) {
				const authToken = request.headers.authorization.split(" ")[1];
				const decode = jwt.verify(authToken, secret);
				const supplier = await SupplierModel.findOne({
					_id: decode,
					authToken: authToken,
				});

				if (!supplier) {
					const useNotFoundResponse = JSON.stringify({
						status: 401,
						message: "User not found in the system",
					});
					throw new Error(useNotFoundResponse);
				}

				request.authToken = authToken;
				request.supplier = supplier;

				logger.info(`Authentication Token for ID ${supplier._id} is Accepted`);
				next();
			} else {
				response.status(401);
				throw new Error("Not authorized, no token");
			}
		} else {
			throw new Error("Token Secret is not found");
		}
	} catch (error) {
		logger.warn(error.message);
		return request.handleResponse.unauthorizedRespond(response)(error.message);
	}
};
