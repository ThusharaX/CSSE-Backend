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

export default router;
