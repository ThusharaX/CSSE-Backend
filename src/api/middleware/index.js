import { admin_auth } from "./AdminAuth.middleware";
import { manager_auth } from "./ManagerAuth.middleware";
import { procurementStaff_auth } from "./ProcurementStaffAuth.middleware";
import { siteManager_auth } from "./SiteManagerAuth.middleware";
import { supplier_auth } from "./SupplierAuth.middleware";

export default {
	admin_auth,
	manager_auth,
	procurementStaff_auth,
	siteManager_auth,
	supplier_auth,
};
