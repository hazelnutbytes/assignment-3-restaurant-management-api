# Restaurant Management API

A REST API built using **Node.js, Express.js, and MongoDB** for managing restaurants and their menu items.

## Render Live link 

https://restaurant-management-api-tcrs.onrender.com

## Features

* User registration and login
* JWT authentication
* Password hashing using bcrypt
* Restaurant CRUD operations
* Menu item CRUD operations
* Top 5 restaurants by rating
* Request logging middleware
* Input validation
* Proper HTTP status codes
* MongoDB database using Mongoose

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Postman
* Render

## API Endpoints

| Method | Endpoint                | Authentication |
| ------ | ----------------------- | -------------- |
| GET    | `/`                     | No             |
| POST   | `/register`             | No             |
| POST   | `/login`                | No             |
| GET    | `/restaurants`          | No             |
| GET    | `/restaurants/top`      | No             |
| GET    | `/restaurants/:id`      | No             |
| POST   | `/restaurants`          | Yes            |
| PUT    | `/restaurants/:id`      | Yes            |
| DELETE | `/restaurants/:id`      | Yes            |
| GET    | `/restaurants/:id/menu` | No             |
| POST   | `/restaurants/:id/menu` | Yes            |
| PUT    | `/menu/:id`             | Yes            |
| DELETE | `/menu/:id`             | Yes            |

## Authentication

The API uses **JWT (JSON Web Token)** authentication.

After logging in, copy the token and use it in Postman:

```text
Authorization: Bearer TOKEN
```

Protected routes require a valid JWT token.

## Project Structure

```text
restaurant-management-api/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd restaurant-management-api
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

The API will run on:

```text
http://localhost:4000
```

## Testing

The API was tested using **Postman** for:

* Registration
* Login
* JWT authentication
* Restaurant CRUD
* Menu CRUD
* Top 5 restaurants

## Deployment

The API can be deployed using **Render** with MongoDB Atlas as the database.

**Hazel Lakshmana**
