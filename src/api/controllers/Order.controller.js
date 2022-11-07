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

// Get all orders
export const getAllOrders = async (request, response, next) => {
	await OrderService.getAllOrders("orders")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Change order status
export const changeOrderStatus = async (request, response, next) => {
	await OrderService.changeOrderStatus(request.params.id, request.body.status)
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
