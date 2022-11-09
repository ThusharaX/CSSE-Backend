import SiteModel from "../models/Site.model";

// Insert one site
export const insertSite = async (siteData) => {
	return await SiteModel.create(siteData)
		.then(async (site) => {
			await site.save();
			return site;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all sites
export const getAllSites = async () => {
	return await SiteModel.find({})
		.then((sites) => {
			return sites;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one site
export const getOneSite = async (siteId) => {
	return await SiteModel.findById(siteId)
		.then((site) => {
			if (site) {
				return site;
			} else {
				throw new Error("Site not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one site
export const updateSite = async (siteId, siteData) => {
	return await SiteModel.findByIdAndUpdate(siteId, siteData, {
		new: true,
	})
		.then((site) => {
			if (site) {
				return site;
			} else {
				throw new Error("Site not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one site
export const deleteSite = async (siteId) => {
	return await SiteModel.findByIdAndDelete(siteId)
		.then((site) => {
			if (site) {
				return site;
			} else {
				throw new Error("Site not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search site name or address
export const searchSites = async (searchTerm) => {
	return await SiteModel.find({
		$or: [{ siteName: { $regex: searchTerm, $options: "i" } }, { address: { $regex: searchTerm, $options: "i" } }],
	})
		.then((sites) => {
			return sites;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all sites for admin_id=adminId
export const getAllSitesBySiteManagerId = async (siteManagerID) => {
	return await SiteModel.find({ siteManagerID: siteManagerID })
		.then((sites) => {
			return sites;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
