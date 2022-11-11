const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
	{
		requiredDate: {
			type: Date,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		agreedPrice: {
			type: String,
			required: true,
		},
		quantity: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ["PENDING", "PLACED", "ACCEPT", "REJECT", "DELIVERED", "PAID", "SEND_APPROVE", "RECEVIED"],
			default: "PENDING",
			required: true,
		},
		// product id refers to the order table which product has been ordered
		productID: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},
		// Site Manager id refers to orders table who make order
		siteManagerID: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "SiteManager",
			required: true,
		},
		// Supplier id refers to orders table who make order
		supplierID: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Supplier",
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

module.exports = mongoose.model("Order", OrderSchema);
