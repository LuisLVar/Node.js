# Node.js Examples

A collection of small learning projects using **Node.js**, **Express**, and **MongoDB**.  
Each folder demonstrates a different concept or pattern used in backend JavaScript development.

---

## 📁 Repository Structure

```

Node.js/
├── confusionServer/     # Express-generator based REST API
├── mongodb/             # Simple MongoDB connection examples
├── node-examples/       # Callbacks, timeout, and event handling
├── node-express/        # Express server with routing
├── node-http/           # Raw Node.js HTTP server
├── node-mongo/          # CRUD operations using MongoDB and Node

````

---

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/) (v12+)
- [MongoDB](https://www.mongodb.com/) installed locally or via Atlas
- `npm` for dependency management

---

## 📦 Project Overviews

### `node-http/`

- Minimal example of an HTTP server using **Node.js core modules**
- No frameworks
- Manual routing logic

### `node-express/`

- Basic **Express.js** server
- Demonstrates:
  - Route handling (`app.get`, `app.post`)
  - Using middleware
  - Response handling

### `confusionServer/`

- RESTful API scaffolded using **Express Generator**
- Follows MVC-like structure
- Suitable base for full-stack apps (e.g., with Angular or React)

### `node-mongo/` & `mongodb/`

- **MongoDB connection examples** with `mongoose`
- Basic operations:
  - Connect to DB
  - Insert documents
  - Query collections
  - Handle connection lifecycle

### `node-examples/`

- Simple async examples using:
  - **Callbacks**
  - **Timeouts**
  - Possibly `fs`, `events`, etc.

---

## 🚀 Running an Example

```bash
cd node-express
npm install
node index.js
````

Then visit [http://localhost:3000](http://localhost:3000)

Make sure MongoDB is running locally for database-related folders (`node-mongo`, `mongodb`).

---

## 📚 Learning Objectives

* Understand how Node.js handles HTTP natively
* Use Express to simplify routing and middleware
* Connect Node.js applications to MongoDB
* Practice with callbacks and asynchronous flows
* Build modular backend services

---

## 📝 License

This repository is intended for **educational purposes**.
Feel free to explore, modify, and extend any example.
