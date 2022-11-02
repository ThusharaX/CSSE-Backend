import { Router } from "express";
import controller from "../controllers";
import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("CSSE Project API");
	next();
});

// Sample endpoints
router.post("/sample/", middleware.admin_auth, controller.insertSample); // insert one sample
router.get("/sample/", controller.getAllSamples); // get all samples
router.get("/sample/search/:search", controller.searchSamples); // search samples
router.get("/sample/:id", controller.getOneSample); // get one sample
router.put("/sample/:id", middleware.admin_auth, controller.updateSample); // update one sample
router.delete("/sample/:id", middleware.admin_auth, controller.deleteSample); // delete one sample
router.get("/samples/admin/:id", middleware.admin_auth, controller.getAllSamplesByAdminId); // get all samples by admin id

// Admin endpoints
router.post("/admin/login", controller.loginAdmin);
router.post("/admin/signup", controller.registerAdmin);
router.get("/admin/:id", middleware.admin_auth, controller.getAdminDetails);
router.put("/admin-edit/:id", middleware.admin_auth, controller.editAdminDetails);
router.delete("/admin-delete/:id", controller.deleteAdmin);

// Manager endpoints
router.post("/manager/login", controller.loginManager);
router.post("/manager/signup", controller.registerManager);
router.get("/manager/:id", middleware.manager_auth, controller.getManagerDetails);
router.put("/manager-edit/:id", middleware.manager_auth, controller.editManagerDetails);
router.delete("/manager-delete/:id", controller.deleteManager);

// Order endpoints
router.post("/order/", controller.insertOrder);
router.get("/order/", controller.getAllOrders);

// Product endpoints
router.post("/product/", controller.insertProduct);
router.get("/product/", controller.getAllProducts);
router.get("/product/:id", controller.getOneProduct);
router.put("/product-edit/:id", controller.updateProduct);

// SiteManager endpoints
router.post("/site-manager/login", controller.loginSiteManager);
router.post("/site-manager/signup", controller.registerSiteManager);
router.get("/site-manager/:id", middleware.siteManager_auth, controller.getSiteManagerDetails);
router.put("/site-manager-edit/:id", middleware.siteManager_auth, controller.editSiteManagerDetails);
router.delete("/site-manager-delete/:id", controller.deleteSiteManager);

// ProcurementStaff endpoints
router.post("/procurement-staff/login", controller.loginProcurementStaff);
router.post("/procurement-staff/signup", controller.registerProcurementStaff);
router.get("/procurement-staff/:id", middleware.procurementStaff_auth, controller.getProcurementStaffDetails);
router.put("/procurement-staff-edit/:id", middleware.procurementStaff_auth, controller.editProcurementStaffDetails);
router.delete("/procurement-staff-delete/:id", controller.deleteProcurementStaff);

// Supplier endpoints
router.post("/supplier/login", controller.loginSupplier);
router.post("/supplier/signup", controller.registerSupplier);
router.get("/supplier/:id", middleware.supplier_auth, controller.getSupplierDetails);
router.put("/supplier-edit/:id", middleware.supplier_auth, controller.editSupplierDetails);
router.delete("/supplier-delete/:id", controller.deleteSupplier);

export default router;
