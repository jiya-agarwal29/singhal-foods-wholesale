# Requirements

# 1. Introduction

This document specifies the functional and non-functional requirements of the **Singhal Foods** platform. The application is designed to provide a secure, efficient, scalable, and user-friendly **B2B wholesale food ordering and inventory management system** for business customers and administrators.

The platform enables business customers to browse wholesale products, place bulk orders, reorder previous purchases, and track their orders. Administrators can efficiently manage products, inventory, customers, orders, payment status, notifications, and overall business operations through a dedicated admin dashboard.

---

# 2. Functional Requirements

## 2.1 Business Customer Requirements

The system shall allow business customers to:

- Register a business account.
- Log in securely using authenticated credentials.
- Reset forgotten passwords using Email OTP verification.
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
- View payment status.
- Reorder previous purchases using the Quick Reorder feature.
- Add business notes during checkout for delivery instructions or special requests.
- Log out securely.

---

## 2.2 Administrator Requirements

The system shall allow administrators to:

- Log in securely.
- Reset forgotten passwords using Email OTP verification.
- Access the administrator dashboard.
- Add new administrators.
- View all registered administrators.
- Add new products.
- Update existing product details.
- Delete products.
- Manage product categories.
- Update inventory quantities.
- Receive low stock alerts.
- View smart restock suggestions.
- Manage incoming customer orders.
- Update order status.
- Update payment status.
- View registered business customers.
- Receive dashboard notifications for new orders.
- Receive email notifications when a new order is placed.
- View dashboard analytics and reports.
- Log out securely.

---

# 3. Non-Functional Requirements

## 3.1 Performance

The system should:

- Load pages quickly.
- Return search results efficiently.
- Handle multiple users simultaneously.
- Process customer orders with minimal delay.
- Deliver dashboard notifications efficiently.

---

## 3.2 Security

The system shall:

- Authenticate users using JWT.
- Authorize users based on their roles.
- Encrypt passwords using bcrypt.
- Allow only customers to register through the application.
- Allow administrators to be created only by an existing administrator.
- Restrict unauthorized access to administrator features.
- Protect API endpoints.
- Validate all user inputs.
- Securely store sensitive information.
- Generate time-limited OTPs for password reset.

---

## 3.3 Reliability

The system should:

- Maintain accurate inventory records.
- Prevent data loss during order processing.
- Handle unexpected errors gracefully.
- Ensure database consistency.
- Deliver reliable email notifications.

---

## 3.4 Scalability

The application should:

- Support future feature additions.
- Maintain a modular architecture.
- Allow database expansion.
- Support deployment in a cloud environment.
- Support future integration of online payment gateways.
- Support future real-time notifications.

---

## 3.5 Usability

The application should:

- Provide a clean and intuitive user interface.
- Be responsive across desktop and mobile devices.
- Ensure simple navigation.
- Minimize the number of steps required to place an order.
- Provide separate dashboards for customers and administrators.

---

# 4. Hardware Requirements

## Development Environment

- Laptop/Desktop
- Stable Internet Connection

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

## Authentication & Security

- JWT
- bcrypt
- Nodemailer (Email OTP & Order Notifications)

## Deployment

- Vercel
- Render

---

# 6. Assumptions

- Business customers have internet access.
- Product information is maintained by administrators.
- Orders are processed manually after being placed through the application.
- Product availability depends on current inventory.
- Email services are available for OTP verification and order notifications.

---

# 7. Constraints

- Online payment is not included in the initial version.
- Delivery logistics are handled outside the application.
- Inventory updates depend on administrator input.
- The platform is intended for B2B customers only.
- Only customers can self-register.
- Administrator accounts can only be created by an existing administrator.
