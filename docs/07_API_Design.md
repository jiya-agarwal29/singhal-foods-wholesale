# API Design

## Overview

The application follows the **RESTful API architecture**, where the React frontend communicates with the Express.js backend using HTTP requests and JSON responses. Authentication is implemented using **JWT (JSON Web Tokens)**, while authorization is handled using middleware based on user roles (`customer`, `manager`, and `admin`).

---

## Authentication APIs

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register a new business customer | Public |
| POST | `/api/auth/login` | Login business customer | Public |
| GET | `/api/auth/profile` | Get logged-in user profile | Authenticated |
| PUT | `/api/auth/profile` | Update user profile | Authenticated |
| PUT | `/api/auth/change-password` | Change account password | Authenticated |

---

## Product APIs

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/products` | Get all available products | Public |
| GET | `/api/products/:id` | Get product details | Public |
| GET | `/api/products?category=:category` | Filter products by category | Public |
| GET | `/api/products?search=:keyword` | Search products | Public |
| POST | `/api/products` | Add a new product | Admin / Manager |
| PUT | `/api/products/:id` | Update product details | Admin / Manager |
| DELETE | `/api/products/:id` | Delete a product | Admin |
| GET | `/api/products/low-stock` | View low stock products | Admin |

---

## Cart APIs

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/cart` | View shopping cart | Authenticated |
| POST | `/api/cart` | Add product to cart | Authenticated |
| PUT | `/api/cart/:id` | Update product quantity | Authenticated |
| DELETE | `/api/cart/:id` | Remove product from cart | Authenticated |
| DELETE | `/api/cart` | Clear shopping cart | Authenticated |

---

## Order APIs

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/orders` | Place a new order | Authenticated |
| GET | `/api/orders` | View customer's order history | Authenticated |
| GET | `/api/orders/:id` | View order details | Authenticated |
| POST | `/api/orders/:id/reorder` | Quickly reorder a previous order | Authenticated |
| PUT | `/api/orders/:id/cancel` | Cancel an order (if applicable) | Authenticated |
| GET | `/api/orders/all` | View all customer orders | Admin / Manager |
| PUT | `/api/orders/:id/status` | Update order status | Admin / Manager |

---

## Customer Management APIs

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/customers` | View all registered customers | Admin / Manager |
| GET | `/api/customers/:id` | View customer details | Admin / Manager |

---

## Dashboard APIs

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/dashboard` | View business dashboard statistics | Admin / Manager |

---

## Role-Based Access Control

| Role | Permissions |
|------|-------------|
| Customer | Browse products, manage cart, place orders, view profile, and reorder previous orders. |
| Manager | Manage products, manage orders, view customers, and access dashboard statistics. |
| Admin | Full access to all application resources, including product, customer, order, and dashboard management. |

---

## Authentication Flow

```text
Client
   │
   ▼
Login / Register
   │
   ▼
JWT Token Generated
   │
   ▼
Client Stores Token
   │
   ▼
Authorization: Bearer <JWT>
   │
   ▼
Authentication Middleware
   │
   ▼
Authorization Middleware
   │
   ▼
Protected Controller
```
