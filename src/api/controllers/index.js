import {
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,
	getAllSamplesByAdminId,
} from "./Sample.controller";

import { getAdminDetails, loginAdmin, registerAdmin, editAdminDetails, deleteAdmin } from "./Admin.controller";

import {
	getManagerDetails,
	loginManager,
	registerManager,
	editManagerDetails,
	deleteManager,
} from "./Manager.controller";

import { insertOrder, getAllOrders } from "./Order.controller";
import { insertProduct, getAllProducts, getOneProduct, updateProduct } from "./Product.controller";

import {
	getSiteManagerDetails,
	loginSiteManager,
	registerSiteManager,
	editSiteManagerDetails,
	deleteSiteManager,
} from "./SiteManager.controller";

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

	// Order Controller
	insertOrder,
	getAllOrders,

	// Product Controller
	insertProduct,
	getAllProducts,
	getOneProduct,
	updateProduct,

	// Site Manager Controller
	getSiteManagerDetails,
	loginSiteManager,
	registerSiteManager,
	editSiteManagerDetails,
	deleteSiteManager,
};
