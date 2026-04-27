# E-Commerce Backend Management System

A complete backend API for an E-Commerce platform built using Node.js, Express.js, and MongoDB.

This project provides secure authentication, seller and customer management, product CRUD operations, cart functionality, order processing, and role-based access control.

It is designed using a modular backend architecture using controllers, services, middleware, and database models for better scalability, maintainability, and clean code structure.

---

## Project Overview

This backend system is developed to manage the core functionalities of an E-Commerce platform. It allows sellers to manage products, customers to browse and place orders, and provides a secure API-based structure for future frontend integration.

The project follows REST API architecture and can be connected with React, Angular, Vue, mobile apps, or any frontend client.

---

## Features

### Authentication & Authorization
- Seller Registration
- Seller Login
- Customer Registration
- Customer Login
- JWT Token Authentication
- Protected Routes
- Role-Based Access Control
- Secure Password Hashing using bcryptjs

### Product Management
- Add Product
- Update Product
- Delete Product
- View All Products
- View Single Product
- View Seller Products

### Cart Management
- Add to Cart
- Update Product Quantity
- Remove from Cart
- View Cart Items

### Order Management
- Place Order
- View Customer Orders
- View Seller Orders
- Order Status Handling

### Security Features
- JWT Authentication
- Password Encryption
- Environment Variables Protection
- Middleware Route Protection

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- Nodemon
- REST API

---

## Folder Structure

Ecommerce-Backend/
├── config/
│   └── db.js
│
├── middleware/
│   └── auth.middleware.js
│
├── modules/
│   ├── seller/
│   │   ├── seller.model.js
│   │   ├── seller.controller.js
│   │   ├── seller.service.js
│   │   └── seller.routes.js
│   │
│   ├── customer/
│   │   ├── customer.model.js
│   │   ├── customer.controller.js
│   │   ├── customer.service.js
│   │   └── customer.routes.js
│   │
│   ├── product/
│   │   ├── product.model.js
│   │   ├── product.controller.js
│   │   ├── product.service.js
│   │   └── product.routes.js
│   │
│   ├── cart/
│   │   ├── cart.model.js
│   │   ├── cart.controller.js
│   │   ├── cart.service.js
│   │   └── cart.routes.js
│   │
│   └── order/
│       ├── order.model.js
│       ├── order.controller.js
│       ├── order.service.js
│       └── order.routes.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md

---

## Installation & Setup

### 1. Clone Repository

git clone https://github.com/YOUR_USERNAME/ecommerce-backend-management-system.git

cd ecommerce-backend-management-system

### 2. Install Dependencies

npm install

### 3. Create Environment File

Create a `.env` file in root directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

### 4. Run Server

npm start

or for development:

npm run dev

---

## API Modules

### Seller APIs
- Register Seller
- Login Seller
- Delete Seller
- Manage Seller Products

### Customer APIs
- Register Customer
- Login Customer
- View Products
- Place Orders

### Product APIs
- Add Product
- Update Product
- Delete Product
- View Products

### Cart APIs
- Add To Cart
- Update Quantity
- Remove Product
- View Cart

### Order APIs
- Place Order
- View Orders
- Update Status

---

## Sample API Endpoints

POST   /api/seller/register
POST   /api/seller/login

POST   /api/customer/register
POST   /api/customer/login

GET    /api/product/all
POST   /api/product/add

POST   /api/cart/add
GET    /api/cart/view

POST   /api/order/place
GET    /api/order/my-orders

---

## Future Improvements

- Online Payment Gateway Integration
- Product Search & Filters
- Wishlist System
- Product Reviews & Ratings
- Admin Dashboard
- Email Notifications
- OTP Verification
- Deployment on Render / Railway / AWS
- Frontend using React.js
- Mobile App Integration

---

## Why This Project

This project was created to practice real-world backend development concepts including:

- Authentication Systems
- REST APIs
- Database Design
- Middleware
- Secure Coding
- Modular Architecture
- Git & GitHub Workflow

---

## Author

Syed Shaaz Hassan

---

## License

This project is created for learning, educational, and portfolio purposes.