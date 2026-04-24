const { test,expect } = require('@playwright/test');

let orderId;

test('Happy Path - Create, Read, Update, Delete Order', async ({ request }) => {

// CREATE
const createRes = await request.post('/orders', {
data: {
customerName: "John Doe",
item: "Phone",
quantity: 1,
status: "Pending"
}
});

expect(createRes.status()).toBe(201);

const createBody = await createRes.json();
expect(createBody).toHaveProperty('id');

orderId = createBody.id || createBody._id;
expect(orderId).toBeDefined();

// READ
const getRes = await request.get(`/orders/${orderId}`);
expect(getRes.status()).toBe(200);

const getBody = await getRes.json();
expect(getBody.customerName).toBe("John Doe");

// UPDATE
const updateRes = await request.patch(`/orders/${orderId}`, {
data: {
status: "Shipped"
}
});

expect(updateRes.status()).toBe(200);

const updateBody = await updateRes.json();
expect(updateBody.status).toBe("Shipped");

// DELETE
const deleteRes = await request.delete(`/orders/${orderId}`);
expect(deleteRes.status()).toBe(200);
});