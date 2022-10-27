import { insertSample, getAllSamples, getOneSample, updateSample, deleteSample, searchSamples } from "./Sample.service";

import { getAdminDetails, authenticateAdmin, insertAdmin, editAdminDetails, getAllHotelOwners } from "./Admin.service";

export default {
	// Sample services
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,

	// Admin Service
	getAdminDetails,
	authenticateAdmin,
	insertAdmin,
	editAdminDetails,
	getAllHotelOwners,
};
