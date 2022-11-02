import OrderModel from "../models/Order.model";

// Insert one order
export const insertOrder = async (orderData) => {
	return await OrderModel.create(orderData)
		.then(async (order) => {
			await order.save();
			return order;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all orders
export const getAllOrders = async () => {
	return await OrderModel.find({})
		.then((orders) => {
			return orders;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
