# 🏪 Singhal Foods – B2B Wholesale Management Platform

A full-stack **B2B Wholesale Food Ordering and Inventory Management System** developed for **Singhal Foods**. The platform enables business customers such as hotels, restaurants, cafés, caterers, and retail stores to place wholesale orders while providing administrators with a comprehensive dashboard to manage products, customers, inventory, orders, payments, and business operations.

---

# 📌 Project Overview

Singhal Foods is a modern wholesale management platform designed to digitize traditional wholesale ordering.

The application allows business customers to:

- Register their business
- Browse wholesale products
- Place bulk orders
- Track order status
- View payment status
- Quickly reorder previous purchases

Administrators can:

- Manage products
- Manage categories
- Manage inventory
- Process customer orders
- Track payments
- Receive notifications
- Generate reports
- Manage administrator accounts

---

# 🚀 Features

## 👤 Customer Module

### Authentication

- Business Registration
- Secure Login
- JWT Authentication
- Forgot Password using Email OTP
- Reset Password
- Logout

### Dashboard

- Customer Dashboard
- Recent Orders
- Payment Status
- Quick Actions

### Products

- Browse Products
- Search Products
- Product Categories
- Product Details
- Product Availability

### Shopping Cart

- Add to Cart
- Update Quantity
- Remove Products
- View Cart Summary

### Orders

- Checkout
- Place Wholesale Orders
- Business Notes
- Order History
- Order Tracking
- Quick Reorder

### Profile

- Update Business Profile
- Change Password

---

## 👨‍💼 Admin Module

### Authentication

- Secure Admin Login
- Role-Based Authentication
- Protected Routes

> **Note:** Administrators cannot register through the application. New administrator accounts can only be created by an existing administrator.

### Dashboard

- Total Products
- Total Orders
- Total Customers
- Pending Orders
- Pending Payments
- Low Stock Alerts
- Notifications

### Product Management

- Add Product
- Update Product
- Delete Product
- Manage Product Availability

### Category Management

- Add Category
- Update Category
- Delete Category

### Inventory Management

- Update Stock
- Low Stock Alerts
- Smart Restock Suggestions

### Order Management

- View Orders
- Update Order Status
- View Business Notes

### Customer Management

- View Customers
- Customer Profiles
- Customer Order History

### Payment Management

- View Payment Status
- Mark Orders as Paid
- Payment Summary

### Notification Center

- New Order Notifications
- Low Stock Alerts
- Payment Notifications
- New Customer Notifications

### Reports & Analytics

- Sales Summary
- Revenue Reports
- Top Selling Products
- Top Customers
- Payment Statistics

### Admin Management

- View Administrators
- Add New Administrator

---

# ⭐ Unique Features

## Quick Reorder

Customers can recreate previously placed wholesale orders with a single click.

---

## Business Notes

Customers can provide delivery instructions while placing an order.

Example:

- Deliver before 9 AM
- Send GST Invoice
- Separate fragile items

---

## Smart Restock Suggestions

The system automatically recommends restocking quantities whenever stock falls below the minimum threshold.

---

## Low Stock Alerts

Products nearing depletion are highlighted on the administrator dashboard.

---

## Email OTP Password Recovery

Forgot password is handled securely using:

- Registered Email
- Email OTP Verification
- Password Reset

---

## Payment Status Tracking

Administrators can update payment status, while customers can view payment progress from their dashboard.

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Tailwind CSS
- React Router DOM
- Axios

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JWT
- bcrypt

## Development Tools

- Git
- GitHub
- Postman
- VS Code

## Deployment

### Frontend

- Vercel

### Backend

- Render

---

# 📂 Project Structure

```
singhal-foods-wholesale/

│

├── client/

│ ├── public/

│ ├── src/

│ │ ├── assets/

│ │ ├── components/

│ │ ├── pages/

│ │ ├── layouts/

│ │ ├── hooks/

│ │ ├── context/

│ │ ├── services/

│ │ ├── routes/

│ │ ├── utils/

│ │ └── App.jsx

│

├── server/

│ ├── config/

│ ├── controllers/

│ ├── middleware/

│ ├── models/

│ ├── routes/

│ ├── services/

│ ├── utils/

│ ├── app.js

│ └── server.js

│

├── docs/

├── README.md
```

---

# 🔐 Authentication Flow

Customer Registration

↓

Login

↓

JWT Authentication

↓

Protected Routes

↓

Customer Dashboard

---

Forgot Password

↓

Enter Registered Email

↓

Receive OTP

↓

Verify OTP

↓

Reset Password

↓

Login

---

Admin Login

↓

Admin Dashboard

---

# 📦 API Modules

## Authentication

- Register Customer
- Login
- Forgot Password
- Verify OTP
- Reset Password
- Get Profile
- Update Profile

## Products

- Get Products
- Product Details
- Search Products
- Category Products

## Cart

- Add Product
- Update Quantity
- Remove Product
- View Cart

## Orders

- Checkout
- Place Order
- Order History
- Order Details
- Quick Reorder

## Admin

- Products
- Categories
- Inventory
- Orders
- Customers
- Payments
- Notifications
- Reports
- Administrators

---

# 📋 Current Progress

| Module | Status |
|---------|--------|
| Project Setup | ✅ Completed |
| Authentication | ✅ Completed |
| Customer Module | 🚧 In Progress |
| Cart Module | ⏳ Pending |
| Order Module | ⏳ Pending |
| Product Management | ⏳ Pending |
| Category Management | ⏳ Pending |
| Inventory Management | ⏳ Pending |
| Customer Management | ⏳ Pending |
| Payment Management | ⏳ Pending |
| Notification Center | ⏳ Pending |
| Reports & Analytics | ⏳ Pending |
| Admin Management | ⏳ Pending |
| Testing | ⏳ Pending |
| Deployment | ⏳ Pending |

---

# 🔮 Future Enhancements

- Online Payment Gateway
- GST Invoice Generation
- AI-Based Demand Forecasting
- Product Recommendation System
- Supplier Management
- Barcode Integration
- Mobile Application
- Advanced Sales Analytics

---

# 👩‍💻 Developed By

**Jiya Agarwal**

Third Year B.Tech (Information Technology)

Vishwakarma Institute of Technology, Pune

---

# 📄 License

This project is developed for academic purposes as a Final Year B.Tech Project.
