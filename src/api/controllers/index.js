import {
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,
	getAllSamplesByAdminId,
} from "./Sample.controller";

import {
	getAdminDetails,
	loginAdmin,
	registerAdmin,
	editAdminDetails,
	deleteAdmin,
} from "./Admin.controller";

import {
	getManagerDetails,
	loginManager,
	registerManager,
	editManagerDetails,
	deleteManager,
} from "./Manager.controller";

export default {
	//Sample Controllers
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,
	getAllSamplesByAdminId,

	// Admin Controller
	getAdminDetails,
	loginAdmin,
	registerAdmin,
	editAdminDetails,
	deleteAdmin,

	// Manager Controller
	getManagerDetails,
	loginManager,
	registerManager,
	editManagerDetails,
	deleteManager,
};
