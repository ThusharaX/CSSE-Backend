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

// Get all products
export const getAllProducts = async () => {
	return await ProductModel.find({})
		.then((products) => {
			return products;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one product
export const getOneProduct = async (productId) => {
	return await ProductModel.findById(productId)
		.then((product) => {
			if (product) {
				return product;
			} else {
				throw new Error("Product not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one product
export const updateProduct = async (productId, productData) => {
	return await ProductModel.findByIdAndUpdate(productId, productData, {
		new: true,
	})
		.then((product) => {
			if (product) {
				return product;
			} else {
				throw new Error("Product not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
