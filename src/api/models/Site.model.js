const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema(
	{
		siteName: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		contact: {
			type: String,
			required: true,
		},
		siteManagerID: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "SiteManager",
			required: true,
		},
		deletedAt: {
			type: Date,
			required: false,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Site", SiteSchema);
