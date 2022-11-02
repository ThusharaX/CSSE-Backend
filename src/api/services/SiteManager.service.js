import SiteManagerModel from "../models/SiteManager.model";

export const authenticateSiteManager = async (email, password) => {
	return await SiteManagerModel.findOne({ email })
		.then(async (siteManager) => {
			if (siteManager && (await siteManager.matchPassword(password))) {
				return siteManager;
			} else {
				throw new Error("Invalid Email or Password!");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const insertSiteManager = async (siteManager) => {
	return await SiteManagerModel.create(siteManager)
		.then(async (siteManager) => {
			await siteManager.generateAuthToken();
			return siteManager;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get SiteManager Details
export const getSiteManagerDetails = async (userId) => {
	return await SiteManagerModel.findById(userId)
		.then((SiteManager) => {
			return SiteManager;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update SiteManager Details
export const editSiteManagerDetails = async (userId, SiteManager) => {
	return await SiteManagerModel.findByIdAndUpdate(userId, SiteManager, { new: true })
		.then((SiteManager) => {
			return SiteManager;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete SiteManager
export const deleteSiteManager = async (userId) => {
	return await SiteManagerModel.findByIdAndDelete(userId)
		.then((SiteManager) => {
			return SiteManager;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
