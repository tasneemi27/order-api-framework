
---

# 📄 4. solution.md (DESIGN + TRADE-OFFS)

```markdown id="solutionfinal"

# Solution Design - API Automation Framework

## 1. Overview

This framework automates testing of an Order Management System using Playwright and a local JSON server as a mock backend.

It supports:
- CRUD operations
- Positive and negative test scenarios
- Data-driven testing
- Response validation

---

## 2. Architecture

Tests → API Layer → Mock Server (JSON Server)
### Layers:
- **Test Layer**: Defines test scenarios
- **API Layer**: Encapsulates HTTP requests
- **Utils Layer**: Logging + validation
- **Mock Layer**: JSON Server simulates backend

---

## 3. Design Decisions

### ✔ JSON Server (Mock Backend)
Chosen because:
- No authentication required
- Fast setup
- Predictable responses
- Ideal for API automation practice

---

### ✔ API Layer Abstraction
All API calls are centralized in `orderApi.js` to:
- Avoid duplication
- Improve maintainability
- Allow reuse across tests

---

### ✔ Data-Driven Testing
Implemented using arrays of test data to:
- Improve coverage
- Reduce duplicate test code
- Simulate real-world inputs

---

## 4. Trade-offs

### ❌ No real authentication layer
- Removed JWT/OAuth for simplicity
- Trade-off: less realistic enterprise simulation

---

### ❌ No database persistence
- JSON Server resets on restart
- Trade-off: no long-term state

---

### ❌ No schema validation
- No strict API contract enforcement
- Trade-off: less strict testing

---

## 5. Improvements (Future Work)

- Add CI pipeline (GitHub Actions)
- Add Allure/HTML reporting
- Replace JSON Server with real backend
- Add schema validation (AJV)
- Add logging to file

---

## 6. Conclusion

This framework demonstrates:
- API automation structure
- Real-world testing patterns
- Scalable test design
- Clean separation of concerns



## AI Prompts
1.Create a simple API automation framework using Playwright and a built in API
2.Ensure the framework supports REST API with the following: create order, retrieve order by orderid and update order status
3.Include validation and logging
4.Create automated tests that include happy path, Negative and edge-case scenarios, data driven testing and JSON/response structure validation
5. Help me step by step setup git repo
6. Summarise the steps for readme.md and solution.md files

