import ProductService from "../services";

// Insert one product
export const insertProduct = async (request, response, next) => {
	await ProductService.insertProduct(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
