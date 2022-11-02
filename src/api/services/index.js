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

import { insertOrder, getAllOrders } from "./Order.service";

import { insertProduct, getAllProducts, getOneProduct, updateProduct } from "./Product.service";

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
	getAllOrders,

	// Product Service
	insertProduct,
	getAllProducts,
	getOneProduct,
	updateProduct,
};
