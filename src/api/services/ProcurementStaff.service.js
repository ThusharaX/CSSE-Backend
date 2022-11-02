import ProcurementStaffModel from "../models/ProcurementStaff.model";

export const authenticateProcurementStaff = async (email, password) => {
	return await ProcurementStaffModel.findOne({ email })
		.then(async (procurementStaff) => {
			if (procurementStaff && (await procurementStaff.matchPassword(password))) {
				return procurementStaff;
			} else {
				throw new Error("Invalid Email or Password!");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const insertProcurementStaff = async (procurementStaff) => {
	return await ProcurementStaffModel.create(procurementStaff)
		.then(async (procurementStaff) => {
			await procurementStaff.generateAuthToken();
			return procurementStaff;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get ProcurementStaff Details
export const getProcurementStaffDetails = async (userId) => {
	return await ProcurementStaffModel.findById(userId)
		.then((ProcurementStaff) => {
			return ProcurementStaff;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update ProcurementStaff Details
export const editProcurementStaffDetails = async (userId, ProcurementStaff) => {
	return await ProcurementStaffModel.findByIdAndUpdate(userId, ProcurementStaff, { new: true })
		.then((ProcurementStaff) => {
			return ProcurementStaff;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete ProcurementStaff
export const deleteProcurementStaff = async (userId) => {
	return await ProcurementStaffModel.findByIdAndDelete(userId)
		.then((ProcurementStaff) => {
			return ProcurementStaff;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
