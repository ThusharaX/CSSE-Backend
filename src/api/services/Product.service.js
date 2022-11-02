import ProductModel from "../models/Product.model";

// Insert one product
export const insertProduct = async (productData) => {
	return await ProductModel.create(productData)
		.then(async (product) => {
			await product.save();
			return product;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
