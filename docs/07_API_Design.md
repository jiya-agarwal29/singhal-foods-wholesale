# Authentication APIs

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register a new business customer | Public |
| POST | `/api/auth/login` | Login business customer | Public |
| POST | `/api/auth/forgot-password` | Send password reset link to registered email | Public |
| POST | `/api/auth/reset-password/:token` | Reset password using reset token | Public |
| GET | `/api/auth/profile` | Get logged-in user profile | Authenticated |
| PUT | `/api/auth/profile` | Update user profile | Authenticated |

---

# Product APIs

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

# Cart APIs

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/cart` | View shopping cart | Authenticated |
| POST | `/api/cart` | Add product to cart | Authenticated |
| PUT | `/api/cart/:id` | Update product quantity | Authenticated |
| DELETE | `/api/cart/:id` | Remove product from cart | Authenticated |
| DELETE | `/api/cart` | Clear shopping cart | Authenticated |

---

# Order APIs

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/orders` | Place a new order | Authenticated |
| GET | `/api/orders` | View customer's order history | Authenticated |
| GET | `/api/orders/:id` | View order details | Authenticated |
| POST | `/api/orders/:id/reorder` | Quickly reorder a previous order | Authenticated |
| PUT | `/api/orders/:id/cancel` | Cancel an order (if applicable) | Authenticated |
| GET | `/api/orders/all` | View all customer orders | Admin / Manager |
| PUT | `/api/orders/:id/status` | Update order status | Admin / Manager |
| PUT | `/api/orders/:id/payment-status` | Update payment status | Admin / Manager |

---

# Customer Management APIs

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/customers` | View all registered customers | Admin / Manager |
| GET | `/api/customers/:id` | View customer details | Admin / Manager |

---

# Dashboard APIs

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/dashboard` | View business dashboard statistics | Admin / Manager |
