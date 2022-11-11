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

// Change order status
export const changeOrderStatus = async (orderId, status) => {
	return await OrderModel.findByIdAndUpdate(orderId, { status: status })
		.then(async (order) => {
			if (order) {
				return {
					message: "Order status changed successfully",
					status: status,
				};
			} else {
				throw new Error("Order not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one order

export const getOneOrder = async (orderId) => {
	return await OrderModel.findById(orderId)
		.then((order) => {
			if (order) {
				return order;
			} else {
				throw new Error("Order not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete order
export const deleteOrder = async (orderId) => {
	return await OrderModel.findByIdAndDelete(orderId)
		.then((order) => {
			if (order) {
				return {
					message: "Order deleted successfully",
				};
			} else {
				throw new Error("Order not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
