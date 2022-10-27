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
	getAllHotelOwners,
	deleteAdmin,
} from "./Admin.controller";

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
	getAllHotelOwners,
	deleteAdmin,
};
