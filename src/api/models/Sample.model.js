const mongoose = require("mongoose");

const SampleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	// admin_id refers to the admin who created the sample
	admin: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Admin",
		required: true,
	},
});

module.exports = mongoose.model("Sample", SampleSchema);
