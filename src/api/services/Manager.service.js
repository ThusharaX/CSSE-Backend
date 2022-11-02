import ManagerModel from "../models/Manager.model";

export const authenticateManager = async (email, password) => {
	return await ManagerModel.findOne({ email })
		.then(async (manager) => {
			if (manager && (await manager.matchPassword(password))) {
				return manager;
			} else {
				throw new Error("Invalid Email or Password!");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const insertManager = async (manager) => {
	return await ManagerModel.create(manager)
		.then(async (manager) => {
			await manager.generateAuthToken();
			return manager;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get Manager Details
export const getManagerDetails = async (userId) => {
	return await ManagerModel.findById(userId)
		.then((Manager) => {
			return Manager;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update Manager Details
export const editManagerDetails = async (userId, Manager) => {
	return await ManagerModel.findByIdAndUpdate(userId, Manager, { new: true })
		.then((Manager) => {
			return Manager;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete Manager
export const deleteManager = async (userId) => {
	return await ManagerModel.findByIdAndDelete(userId)
		.then((Manager) => {
			return Manager;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
