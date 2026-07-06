# 🛒 # 🚀 Playwright Grocery Store API Automation Framework with CI/CD
A production-ready API Automation Framework built using **Playwright + TypeScript**, following industry best practices with CI/CD integration.

---

# Tech Stack

- Playwright API Testing
- TypeScript
- Playwright Test Runner
- JSON Schema Validation (Ajv)
- Faker.js
- Builder Pattern
- Test Data Factory
- Playwright Fixtures
- API Manager Pattern
- GitHub Actions
- Jenkins Pipeline
- Allure Reports
- HTML Reports
- Git
- GitHub
- Node.js

---

# Project Structure

```
.
├── api/
├── Builders/
├── fixtures/
├── schemas/
├── testdata/
├── tests/
│   ├── auth/
│   ├── cart/
│   ├── order/
│   ├── products/
│   └── status/
├── utils/
├── allure-results/
├── allure-report/
├── playwright-report/
├── Jenkinsfile
├── package.json
└── playwright.config.ts
```

---

# Features

## API Modules Covered

- Authentication API
- Cart API
- Product API
- Order API
- Status API

---

## Framework Features

- Builder Pattern
- Test Data Factory
- JSON Schema Validation
- Reusable API Managers
- Playwright Fixtures
- Token Management
- Dynamic Test Data
- Clean Architecture
- Centralized Configuration
- Environment Support
- Logging
- Assertions
- Parallel Execution

---

# CI/CD

✅ GitHub Actions

- Automatic execution on Push
- HTML Report Generation
- Allure Report Generation

✅ Jenkins Pipeline

- Source Checkout
- Dependency Installation
- Playwright Test Execution
- Allure Report Generation
- Artifact Archiving

---

# Reports

## Playwright HTML Report

```bash
npx playwright show-report
```

---

## Allure Report

Generate Report

```bash
npm run allure:generate
```

Open Report

```bash
npm run allure:open
```

---

# Installation

Clone Repository

```bash
git clone https://github.com/Samlordson/Playwright_Grocery_Store_API-_Framework.git
```

Install Dependencies

```bash
npm install
```

Install Playwright Browsers

```bash
npx playwright install
```

---

# Execute Tests

Run Complete Suite

```bash
npx playwright test
```

Run Authentication Tests

```bash
npx playwright test tests/auth
```

Run Cart Tests

```bash
npx playwright test tests/cart
```

Run Product Tests

```bash
npx playwright test tests/products
```

Run Order Tests

```bash
npx playwright test tests/order
```

Run Status Tests

```bash
npx playwright test tests/status
```

---

# Framework Design

## Builder Pattern

```
ClientBuilder
ItemBuilder
OrderBuilder
```

---

## Test Data Factory

```
TestDataFactory
├── client()
├── item()
└── order()
```

---

# Reporting

- Playwright HTML Report
- Allure Report
- Jenkins Build Artifacts
- GitHub Actions Workflow Reports

---

# CI/CD Workflow

```
Developer
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions
      │
      ▼
Run Playwright Tests
      │
      ▼
Generate Reports
      │
      ▼
Publish Artifacts

----------------------------

GitHub Push
      │
      ▼
GitHub Webhook
      │
      ▼
Jenkins Pipeline
      │
      ▼
Checkout Source
      │
      ▼
Install Dependencies
      │
      ▼
Execute Playwright Tests
      │
      ▼
Generate Allure Report
      │
      ▼
Archive Reports
```

---

# Future Enhancements

- Dockerized Execution
- Azure DevOps Pipeline
- Slack Notifications
- Email Notifications
- Multiple Environment Support
- API Performance Testing
- Newman Integration
- SonarQube Integration

---

# Author

## Samlordson R B

QA Automation Engineer

### Skills

- Playwright
- TypeScript
- API Automation
- Selenium
- Jenkins
- GitHub Actions
- Docker
- CI/CD
- REST API Testing
- JSON Schema Validation
