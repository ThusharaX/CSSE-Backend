import OrderService from "../services";

// Insert one order
export const insertOrder = async (request, response, next) => {
	await OrderService.insertOrder(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
