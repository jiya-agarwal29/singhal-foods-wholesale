# API Design

# 1. Overview

The Singhal Foods platform follows the **REST API architecture**. All APIs exchange data in **JSON** format and enable communication between the **React frontend** and the **Express.js backend**.

Authentication is handled using **JWT (JSON Web Tokens)**, while authorization is enforced through **role-based access control**.

---

# 2. Authentication APIs

| Method | Endpoint | Description | Access |
|----------|-----------------------------|-------------------------------------------|-------------|
| POST | /api/auth/register | Register a new business customer | Public |
| POST | /api/auth/login | Customer/Admin Login | Public |
| POST | /api/auth/forgot-password | Send Email OTP | Public |
| POST | /api/auth/verify-otp | Verify OTP | Public |
| POST | /api/auth/reset-password | Reset Password | Public |
| GET | /api/auth/profile | Get logged-in user profile | Authenticated |
| PUT | /api/auth/profile | Update user profile | Authenticated |

---

# 3. Product APIs

| Method | Endpoint | Description | Access |
|----------|----------------------------------------|----------------------------------|-------------|
| GET | /api/products | Get all products | Customer/Admin |
| GET | /api/products/:id | Get product details | Customer/Admin |
| GET | /api/products/category/:category | Get products by category | Customer/Admin |
| GET | /api/products/search | Search products | Customer/Admin |

---

# 4. Cart APIs

| Method | Endpoint | Description | Access |
|----------|-------------------------|------------------------------|-------------|
| GET | /api/cart | View shopping cart | Customer |
| POST | /api/cart | Add product to cart | Customer |
| PUT | /api/cart/:id | Update cart quantity | Customer |
| DELETE | /api/cart/:id | Remove product from cart | Customer |
| DELETE | /api/cart | Clear shopping cart | Customer |

---

# 5. Order APIs

| Method | Endpoint | Description | Access |
|----------|----------------------------------|--------------------------------|-------------|
| POST | /api/orders | Place new order | Customer |
| GET | /api/orders | View customer orders | Customer |
| GET | /api/orders/:id | View order details | Customer |
| POST | /api/orders/:id/reorder | Quick Reorder | Customer |

---

# 6. Admin Product APIs

| Method | Endpoint | Description | Access |
|----------|---------------------------------|-----------------------------|-------------|
| POST | /api/admin/products | Add new product | Admin |
| PUT | /api/admin/products/:id | Update product | Admin |
| DELETE | /api/admin/products/:id | Delete product | Admin |

---

# 7. Admin Order APIs

| Method | Endpoint | Description | Access |
|----------|-------------------------------------|--------------------------------|-------------|
| GET | /api/admin/orders | View all orders | Admin |
| PUT | /api/admin/orders/:id/status | Update order status | Admin |
| PUT | /api/admin/orders/:id/payment | Update payment status | Admin |

---

# 8. Admin Customer APIs

| Method | Endpoint | Description | Access |
|----------|--------------------------------------|-------------------------------|-------------|
| GET | /api/admin/customers | View all business customers | Admin |
| GET | /api/admin/customers/:id | View customer details | Admin |

---

# 9. Admin Management APIs

| Method | Endpoint | Description | Access |
|----------|----------------------------------|------------------------------|-------------|
| POST | /api/admin/admins | Create new administrator | Admin |
| GET | /api/admin/admins | View all administrators | Admin |

---

# 10. Notification APIs

| Method | Endpoint | Description | Access |
|----------|------------------------------------------|------------------------------------|-------------|
| GET | /api/admin/notifications | View dashboard notifications | Admin |
| PATCH | /api/admin/notifications/:id/read | Mark notification as read | Admin |
| PATCH | /api/admin/notifications/read-all | Mark all notifications as read | Admin |

---

# 11. Admin Dashboard APIs

| Method | Endpoint | Description | Access |
|----------|--------------------------------------|---------------------------------|-------------|
| GET | /api/admin/dashboard | Dashboard statistics | Admin |
| GET | /api/admin/low-stock | View low stock products | Admin |

---

# 12. API Response Format

## Success Response

```json
{
  "success": true,
  "message": "Request completed successfully.",
  "data": {}
}
```

---

## Error Response

```json
{
  "success": false,
  "message": "Something went wrong.",
  "error": "Error details"
}
```

---

# 13. Authentication & Authorization

- Public APIs can be accessed without authentication.
- Protected APIs require a valid JWT.
- Customers can only access customer resources.
- Administrators can access both customer and administrator resources.
- Administrator APIs are protected using role-based authorization middleware.

---

# 14. API Security

The APIs implement the following security measures:

- JWT Authentication
- Role-Based Authorization
- Password Encryption using bcrypt
- Email OTP Verification
- Input Validation
- Protected Routes
- Secure Environment Variables
