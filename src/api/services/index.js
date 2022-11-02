import {
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,
	getAllSamplesByAdminId,
} from "./Sample.service";

import { getAdminDetails, authenticateAdmin, insertAdmin, editAdminDetails, deleteAdmin } from "./Admin.service";

import {
	getManagerDetails,
	authenticateManager,
	insertManager,
	editManagerDetails,
	deleteManager,
} from "./Manager.service";


import { insertOrder } from "./Order.service";

import { insertProduct } from "./Product.service";

import {
	getSiteManagerDetails,
	authenticateSiteManager,
	insertSiteManager,
	editSiteManagerDetails,
	deleteSiteManager,
} from "./SiteManager.service";


export default {
	// Sample services
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,
	getAllSamplesByAdminId,

	// Admin Service
	getAdminDetails,
	authenticateAdmin,
	insertAdmin,
	editAdminDetails,
	deleteAdmin,

	// Manager Service
	getManagerDetails,
	authenticateManager,
	insertManager,
	editManagerDetails,
	deleteManager,


	// Order Service
	insertOrder,

	// Product Service
	insertProduct,

	// SiteManager Service
	getSiteManagerDetails,
	authenticateSiteManager,
	insertSiteManager,
	editSiteManagerDetails,
	deleteSiteManager,

};
