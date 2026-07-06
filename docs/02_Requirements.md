# Requirements

## 1. Introduction

This document specifies the functional and non-functional requirements of the Singhal Foods platform. The application is designed to provide a secure, efficient, and scalable B2B wholesale food ordering and inventory management system for business customers and administrators.

---

# 2. Functional Requirements

## 2.1 Business Customer Requirements

The system shall allow business customers to:

- Register a business account.
- Log in securely using authenticated credentials.
- View and update their business profile.
- Browse products by category.
- Search products by name.
- View detailed product information.
- Select product quantities.
- Add products to the shopping cart.
- Update or remove products from the cart.
- Place wholesale orders.
- View current and previous orders.
- Track order status.
- Reorder previous purchases using the **Quick Reorder** feature.
- Add Business Notes during checkout for delivery instructions or special requests.
- Log out securely.

---

## 2.2 Administrator Requirements

The system shall allow administrators to:

- Log in securely.
- Access an admin dashboard.
- Add new products.
- Update existing product details.
- Delete products.
- Manage product categories.
- Update inventory quantities.
- Receive Low Stock Alerts.
- View Smart Restock Suggestions.
- Manage incoming orders.
- Update order status.
- View registered business customers.
- View dashboard analytics.
- Log out securely.

---

# 3. Non-Functional Requirements

## 3.1 Performance

The system should:

- Load pages quickly.
- Return search results efficiently.
- Handle multiple users simultaneously.
- Process orders with minimal delay.

---

## 3.2 Security

The system shall:

- Authenticate users using JWT.
- Encrypt passwords using bcrypt.
- Restrict unauthorized admin access.
- Validate all user inputs.
- Protect API endpoints.
- Store sensitive information securely.

---

## 3.3 Reliability

The system should:

- Maintain accurate inventory records.
- Prevent data loss during order processing.
- Handle unexpected errors gracefully.
- Ensure database consistency.

---

## 3.4 Scalability

The application should:

- Support future feature additions.
- Maintain a modular architecture.
- Allow database expansion.
- Support deployment in a cloud environment.

---

## 3.5 Usability

The application should:

- Provide a clean and intuitive user interface.
- Be responsive across desktop and mobile devices.
- Ensure simple navigation.
- Minimize the number of steps required to place an order.

---

# 4. Hardware Requirements

## Development Environment

- Laptop/Desktop
- Internet Connection

## Production Environment

- Cloud Server
- Stable Internet Connection

---

# 5. Software Requirements

## Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman

## Frontend

- React.js
- Tailwind CSS
- React Router
- Axios

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- MongoDB Atlas

## Authentication

- JWT
- bcrypt

## Deployment

- Vercel
- Render

---

# 6. Assumptions

- Business customers have internet access.
- Product information is maintained by the administrator.
- Orders are processed manually after being placed through the system.
- Product availability depends on current inventory.

---

# 7. Constraints

- Online payment is not included in the initial version.
- Delivery logistics are handled outside the application.
- Inventory updates depend on administrator input.
- The platform is intended for B2B customers only.
