import SupplierModel from "../models/Supplier.model";

export const authenticateSupplier = async (email, password) => {
	return await SupplierModel.findOne({ email })
		.then(async (supplier) => {
			if (supplier && (await supplier.matchPassword(password))) {
				return supplier;
			} else {
				throw new Error("Invalid Email or Password!");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const insertSupplier = async (supplier) => {
	return await SupplierModel.create(supplier)
		.then(async (supplier) => {
			await supplier.generateAuthToken();
			return supplier;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get Supplier Details
export const getSupplierDetails = async (userId) => {
	return await SupplierModel.findById(userId)
		.then((Supplier) => {
			return Supplier;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update Supplier Details
export const editSupplierDetails = async (userId, Supplier) => {
	return await SupplierModel.findByIdAndUpdate(userId, Supplier, { new: true })
		.then((Supplier) => {
			return Supplier;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete Supplier
export const deleteSupplier = async (userId) => {
	return await SupplierModel.findByIdAndDelete(userId)
		.then((Supplier) => {
			return Supplier;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
