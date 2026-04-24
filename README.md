
# API Automation Framework - Order Management System

This project is a Playwright-based API automation framework that tests a mock Order Management System (OMS) using a local JSON server.

---

## 🚀 Tech Stack
- Playwright
- Node.js
- JSON Server (mock API)
- JavaScript

---

## 📦 Setup Instructions
2. Install Dependencies
```bash
npm install

2. Start Mock API Server
```bash
npx json-server --watch db.json --port 3000
API runs at:
http://localhost:3000/orders

3. Run Tests
Open a second terminal:
```bash
npx playwright test

API Endpoints used
| Method | Endpoint    | Description |
|-----   |-------------|-------------|
| POST   | /orders     | Create Order|              
| GET    | /orders/:id | Get Order   |
| PATCH  | /orders/:id | Update Order|
| DELETE | /orders/:id | Delete Order|

Sample Payload
Create Order
```JSON
{
  "customerName": "John Doe",
  "item": "Phone",
  "quantity": 1,
  "status": "Pending"
}

🧪 Test Coverage
✔ Happy Path CRUD flow
✔ Negative test scenarios
✔ Edge cases (invalid IDs, missing fields)
✔ Data-driven testing with multiple payloads

▶️ Run All Tests
```bash
npx playwright test
