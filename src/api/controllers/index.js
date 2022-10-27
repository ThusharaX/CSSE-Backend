import {
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,
} from "./Sample.controller";

import { getAdminDetails, loginAdmin, registerAdmin, editAdminDetails, getAllHotelOwners } from "./Admin.controller";

export default {
	//Sample Controllers
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,

	// Admin Controller
	getAdminDetails,
	loginAdmin,
	registerAdmin,
	editAdminDetails,
	getAllHotelOwners,
};
