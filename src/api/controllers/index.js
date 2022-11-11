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
	insertSite,
	getAllSites,
	getOneSite,
	updateSite,
	deleteSite,
	searchSites,
	getAllSitesBySiteManagerId,
} from "./Site.controller";

import { getAdminDetails, loginAdmin, registerAdmin, editAdminDetails, deleteAdmin } from "./Admin.controller";

import {
	getManagerDetails,
	loginManager,
	registerManager,
	editManagerDetails,
	deleteManager,
} from "./Manager.controller";

import { insertOrder, getAllOrders, changeOrderStatus, getOneOrder, deleteOrder } from "./Order.controller";
import { insertProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct } from "./Product.controller";

import {
	getSiteManagerDetails,
	loginSiteManager,
	registerSiteManager,
	editSiteManagerDetails,
	deleteSiteManager,
} from "./SiteManager.controller";

import {
	getProcurementStaffDetails,
	loginProcurementStaff,
	registerProcurementStaff,
	editProcurementStaffDetails,
	deleteProcurementStaff,
} from "./ProcurementStaff.controller";

import {
	getSupplierDetails,
	loginSupplier,
	registerSupplier,
	editSupplierDetails,
	deleteSupplier,
	getAllSuppliers,
} from "./Supplier.controller";

export default {
	//Sample Controllers
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,
	getAllSamplesByAdminId,

	//Site Controllers
	insertSite,
	getAllSites,
	getOneSite,
	updateSite,
	deleteSite,
	searchSites,
	getAllSitesBySiteManagerId,

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
	changeOrderStatus,
	getOneOrder,
	deleteOrder,

	// Product Controller
	insertProduct,
	getAllProducts,
	getOneProduct,
	updateProduct,
	deleteProduct,

	// Site Manager Controller
	getSiteManagerDetails,
	loginSiteManager,
	registerSiteManager,
	editSiteManagerDetails,
	deleteSiteManager,

	// Procurement Staff Controller
	getProcurementStaffDetails,
	loginProcurementStaff,
	registerProcurementStaff,
	editProcurementStaffDetails,
	deleteProcurementStaff,

	// Supplier Controller
	getSupplierDetails,
	loginSupplier,
	registerSupplier,
	editSupplierDetails,
	deleteSupplier,
	getAllSuppliers,
};
