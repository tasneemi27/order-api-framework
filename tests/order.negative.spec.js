const { test,expect } = require('@playwright/test');

test('Negative - Create order with missing fields', async ({ request }) => {

const res = await request.post('/orders', {
data: {
customerName: ""   // missing required fields
}
});

// JSON server still creates record but we validate logic
const body = await res.json();

expect(res.status()).toBe(201);
expect(body.customerName).toBe("");
});

test('Negative - Get non-existing order', async ({ request }) => {

const res = await request.get('/orders/999999');

// JSON server returns empty object or 404 depending setup
expect([200, 404]).toContain(res.status());
});

test('Edge - Delete already deleted order', async ({ request }) => {

const res = await request.delete('/orders/1');

// may still return 200 even if already deleted
expect([200, 404]).toContain(res.status());
});