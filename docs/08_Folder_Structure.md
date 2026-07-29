# Folder Structure

```
singhal-foods/
│
├── client/                          # React Frontend
│
│   ├── public/
│   │
│   └── src/
│       │
│       ├── assets/
│       │
│       ├── components/
│       │   ├── common/
│       │   ├── customer/
│       │   └── admin/
│       │
│       ├── pages/
│       │   ├── auth/
│       │   │   ├── Login.jsx
│       │   │   ├── Register.jsx
│       │   │   ├── ForgotPassword.jsx
│       │   │   ├── VerifyOTP.jsx
│       │   │   └── ResetPassword.jsx
│       │   │
│       │   ├── customer/
│       │   │   ├── Dashboard.jsx
│       │   │   ├── Products.jsx
│       │   │   ├── Cart.jsx
│       │   │   ├── Checkout.jsx
│       │   │   ├── Orders.jsx
│       │   │   └── Profile.jsx
│       │   │
│       │   └── admin/
│       │       ├── Dashboard.jsx
│       │       ├── Products.jsx
│       │       ├── Orders.jsx
│       │       ├── Customers.jsx
│       │       ├── Payments.jsx
│       │       ├── Notifications.jsx
│       │       ├── Inventory.jsx
│       │       ├── Reports.jsx
│       │       └── AdminManagement.jsx
│       │
│       ├── services/
│       │
│       ├── context/
│       │
│       ├── hooks/
│       │
│       ├── utils/
│       │
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   │
│   ├── config/
│   │   ├── db.js
│   │   └── nodemailer.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── product.controller.js
│   │   ├── cart.controller.js
│   │   ├── order.controller.js
│   │   ├── admin.controller.js
│   │   ├── notification.controller.js
│   │   └── payment.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── admin.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── Cart.js
│   │   ├── Order.js
│   │   ├── Notification.js
│   │   └── address.schema.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── product.routes.js
│   │   ├── cart.routes.js
│   │   ├── order.routes.js
│   │   ├── admin.routes.js
│   │   ├── notification.routes.js
│   │   └── payment.routes.js
│   │
│   ├── services/
│   │   ├── generateToken.js
│   │   ├── email.service.js
│   │   └── otp.service.js
│   │
│   ├── utils/
│   │
│   ├── app.js
│   ├── server.js
│   └── seedAdmin.js
│
├── docs/
│
├── .gitignore
├── README.md
├── LICENSE
└── package.json
```

# Folder Description

## client/

Contains the complete React frontend application.

---

## server/

Contains the complete Express.js backend application.

---

## config/

Stores project configuration files.

Examples:

- MongoDB Connection
- Nodemailer Configuration

---

## controllers/

Contains the business logic for handling API requests.

Examples:

- Authentication
- Products
- Orders
- Payments
- Notifications

---

## middleware/

Contains middleware used throughout the backend.

Examples:

- JWT Authentication
- Role-Based Authorization
- Error Handling

---

## models/

Contains MongoDB (Mongoose) models.

Examples:

- User
- Product
- Category
- Cart
- Order
- Notification

---

## routes/

Defines all REST API endpoints.

Examples:

- Authentication Routes
- Product Routes
- Cart Routes
- Order Routes
- Admin Routes

---

## services/

Contains reusable backend services.

Examples:

- JWT Token Generation
- Email Service
- OTP Generation

---

## utils/

Contains helper functions and reusable utilities.

---

## docs/

Contains all project documentation.

---

# Architecture

```
React Frontend
        │
        ▼
Express REST APIs
        │
        ▼
Controllers
        │
        ▼
Services
        │
        ▼
MongoDB Models
        │
        ▼
MongoDB Atlas
```

# Development Tools

- React.js
- Tailwind CSS
- Node.js
- Express.js
- MongoDB Atlas
- JWT
- bcrypt
- Nodemailer
- Git
- GitHub
- Postman
- Vercel
- Render
