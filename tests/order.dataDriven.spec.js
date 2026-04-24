const { test,expect } = require('@playwright/test');

const testData = [
{ customerName: "Alice", item: "Laptop", quantity: 1 },
{ customerName: "Bob", item: "Tablet", quantity: 2 },
{ customerName: "Charlie", item: "Phone", quantity: 3 }
];

for (const data of testData) {

test(`Data Driven - Create order for ${data.customerName}`, async ({ request }) => {

const res = await request.post('/orders', {
data
});

expect(res.status()).toBe(201);

const body = await res.json();

expect(body.customerName).toBe(data.customerName);
expect(body.item).toBe(data.item);
expect(body.quantity).toBe(data.quantity);
});
}