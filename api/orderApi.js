async function createOrder(request, orderData) {
    return await request.post('/orders', {
    data: orderData
    });
    }
    
    async function getOrderById(request, orderId) {
    return await request.get(`/orders/${orderId}`);
    }
    
    async function updateOrderStatus(request, orderId, status) {
    return await request.patch(`/orders/${orderId}`, {
    data: { status }
    });
    }
    
    async function deleteOrder(request, orderId) {
    return await request.delete(`/orders/${orderId}`);
    }
    
    module.exports = {
    createOrder,
    getOrderById,
    updateOrderStatus,
    deleteOrder
    };