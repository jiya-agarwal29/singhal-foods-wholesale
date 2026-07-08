# API Design

## Overview

The application follows the REST API architecture. All APIs exchange data in JSON format and communicate between the React frontend and Express backend.

---

# Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register a new business customer |
| POST | /api/auth/login | Login business customer |
| GET | /api/auth/profile | Get logged-in user profile |
| PUT | /api/auth/profile | Update user profile |

---

# Product APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get product details |
| GET | /api/products/category/:category | Get products by category |
| GET | /api/products/search | Search products |

---

# Cart APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/cart | View shopping cart |
| POST | /api/cart | Add product to cart |
| PUT | /api/cart/:id | Update cart quantity |
| DELETE | /api/cart/:id | Remove product from cart |
| DELETE | /api/cart | Clear shopping cart |

---

# Order APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/orders | Place new order |
| GET | /api/orders | View all customer orders |
| GET | /api/orders/:id | View order details |
| POST | /api/orders/:id/reorder | Quick Reorder |

---

# Admin Product APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/admin/products | Add new product |
| PUT | /api/admin/products/:id | Update product |
| DELETE | /api/admin/products/:id | Delete product |

---

# Admin Order APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/admin/orders | View all orders |
| PUT | /api/admin/orders/:id | Update order status |

---

# Admin Customer APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/admin/customers | View all business customers |
| GET | /api/admin/customers/:id | View customer details |

---

# Admin Dashboard APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/admin/dashboard | Dashboard statistics |
| GET | /api/admin/low-stock | View low stock products |
