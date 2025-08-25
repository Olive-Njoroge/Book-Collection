# Dependencies Explanation

This document explains the use of the following dependencies commonly used in Node.js applications:  
- **Jest**  
- **Supertest**  
- **MongoDB Memory Server**  
- **Cross-Env**

---

## 1. Jest
**Purpose:**  
Jest is a testing framework for JavaScript applications. It is mainly used to write and run unit tests, integration tests, and snapshot tests.

**Key Features:**  
- Built-in test runner (no need for extra setup)  
- Mocking capabilities  
- Code coverage reports  
- Works well with Node.js, React, and TypeScript  

**Where It's Used:**  
- Writing and executing tests for functions, components, or APIs.  
- Example:
  ```javascript
  test('adds two numbers', () => {
    expect(1 + 2).toBe(3);
  });
````

---

## 2. Supertest

**Purpose:**
Supertest is used for **testing HTTP endpoints**. It works well with frameworks like **Express** to simulate HTTP requests (GET, POST, PUT, DELETE) without manually running the server.

**Key Features:**

* Simulates requests to your backend API
* Allows chaining methods to test responses (e.g., status codes, headers, body)

**Where It's Used:**

* In integration tests to test RESTful APIs.
* Example:

  ```javascript
  const request = require('supertest');
  const app = require('../app'); // Your Express app

  test('GET /api/users returns 200', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
  });
  ```

---

## 3. MongoDB Memory Server

**Purpose:**
`mongodb-memory-server` creates an **in-memory instance of MongoDB** for testing purposes. This allows tests to run quickly and independently, without needing a real MongoDB database.

**Key Features:**

* No external MongoDB installation required
* Fast, isolated database for each test run
* Easy cleanup after tests

**Where It's Used:**

* In backend tests that interact with a MongoDB database.
* Example:

  ```javascript
  const { MongoMemoryServer } = require('mongodb-memory-server');
  const mongoose = require('mongoose');

  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
  ```

---

## 4. Cross-Env

**Purpose:**
`cross-env` allows you to set **environment variables** in a way that works across different operating systems (Windows, macOS, Linux).

**Key Features:**

* Prevents errors when setting environment variables in scripts
* Useful for setting variables like `NODE_ENV`, `PORT`, etc.

**Where It's Used:**

* In `package.json` scripts for development, testing, and production setups.
* Example:

  ```json
  {
    "scripts": {
      "start": "cross-env NODE_ENV=production node server.js",
      "test": "cross-env NODE_ENV=test jest"
    }
  }
  ```

---

## Summary Table

| Dependency                | Purpose                      | Used In                                  |
| ------------------------- | ---------------------------- | ---------------------------------------- |
| **Jest**                  | Test framework               | Unit/Integration tests                   |
| **Supertest**             | HTTP endpoint testing        | API tests with Express/Node.js           |
| **MongoDB Memory Server** | In-memory MongoDB instance   | Database integration tests               |
| **Cross-Env**             | Cross-platform env variables | Setting environment variables in scripts |
