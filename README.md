# 🛒 Playwright Grocery Store API Automation Framework

A production-ready API Automation Framework built using Playwright + TypeScript following industry best practices.

---

## Tech Stack

- Playwright API Testing
- TypeScript
- JSON Schema Validation (Ajv)
- Faker
- Builder Pattern
- TestDataFactory
- Playwright Fixtures
- Page Object / API Manager Pattern
- GitHub Actions (Coming Soon)
- Docker (Coming Soon)
- Allure Reports (Coming Soon)

---

## Project Structure

```

.
├── api/
├── Builders/
├── fixtures/
├── schemas/
├── testdata/
├── tests/
├── utils/
├── package.json
└── playwright.config.ts

```

---

## Features

- Client API Testing
- Cart API Testing
- Product API Testing
- Order API Testing
- Status API Testing

### Framework Features

- Builder Pattern
- TestDataFactory
- JSON Schema Validation
- Reusable API Managers
- Fixtures
- Token Management
- Logging
- Clean Architecture

---

## Installation

```bash
npm install
```

---

## Execute All Tests

```bash
npx playwright test
```

---

## Execute Client Tests

```bash
npx playwright test tests/auth
```

---

## Execute Cart Tests

```bash
npx playwright test tests/cart
```

---

## Execute Order Tests

```bash
npx playwright test tests/order
```

---

## Execute Product Tests

```bash
npx playwright test tests/products
```

---

## HTML Report

```bash
npx playwright show-report
```

---

## Framework Design

Builder Pattern

```

ClientBuilder

ItemBuilder

OrderBuilder

```

Test Data Factory

```

TestDataFactory
├── client()
├── item()
└── order()

```

---

## Future Enhancements

- Docker Support
- Jenkins Pipeline
- GitHub Actions
- Allure Reporting
- Slack Notifications
- Azure DevOps Pipeline

---

## Author

**Samlordson R B**

QA Automation Engineer
