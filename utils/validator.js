const { expect } = require('@playwright/test');

async function validateStatus(response, expectedStatus) {
expect(response.status()).toBe(expectedStatus);
}

async function validateField(body, field) {
expect(body).toHaveProperty(field);
}

module.exports = {
validateStatus,
validateField
};