# Database Design

# 1. Overview

The **Singhal Foods** platform uses **MongoDB**, a NoSQL database, to store business customer information, administrators, products, categories, shopping carts, orders, and notifications.

The database is designed to support efficient order processing, inventory management, administrator operations, secure authentication, and scalable business growth.

---

# Collections

## 1. Users

Stores information about registered business customers and administrators.

### Fields

| Field | Type | Description |
|--------|------|-------------|
| _id | ObjectId | Unique user ID |
| businessName | String | Business name |
| ownerName | String | Business owner's name |
| businessType | String | Hotel, Restaurant, Caterer, Retail Store, etc. |
| gstNumber | String | GST Number (Optional) |
| email | String | Unique email address |
| phone | String | Contact number |
| password | String | Hashed password |
| deliveryAddress | Object | Business delivery address |
| role | String | Customer or Admin |
| resetOtp | String | Password reset OTP |
| resetOtpExpiry | Date | OTP expiration time |
| createdAt | Date | Account creation date |
| updatedAt | Date | Last updated date |

---

## 2. Categories

Stores product categories.

### Fields

| Field | Type | Description |
|--------|------|-------------|
| _id | ObjectId | Category ID |
| categoryName | String | Category name |
| description | String | Category description |

---

## 3. Products

Stores wholesale product information.

### Fields

| Field | Type | Description |
|--------|------|-------------|
| _id | ObjectId | Product ID |
| productName | String | Product name |
| categoryId | ObjectId | Reference to Category |
| brand | String | Brand name |
| description | String | Product description |
| unit | String | Box, Bag, Tin, Carton, etc. |
| price | Number | Selling price per unit |
| stockQuantity | Number | Current stock |
| minimumStock | Number | Threshold for low stock alerts |
| image | String | Product image URL |
| availability | Boolean | Available / Out of Stock |
| createdAt | Date | Product creation date |
| updatedAt | Date | Last updated date |

---

## 4. Cart

Stores the current shopping cart of each business customer.

### Fields

| Field | Type | Description |
|--------|------|-------------|
| _id | ObjectId | Cart ID |
| customerId | ObjectId | Reference to User |
| products | Array | List of cart items |
| totalAmount | Number | Current cart total |
| updatedAt | Date | Last updated |

### Product Object

| Field | Type |
|--------|------|
| productId | ObjectId |
| quantity | Number |
| price | Number |

---

## 5. Orders

Stores all wholesale customer orders.

### Fields

| Field | Type | Description |
|--------|------|-------------|
| _id | ObjectId | Order ID |
| customerId | ObjectId | Reference to User |
| products | Array | Ordered products |
| totalAmount | Number | Total order amount |
| businessNotes | String | Delivery instructions (Optional) |
| orderStatus | String | Pending, Confirmed, Packed, Out for Delivery, Delivered, Cancelled |
| paymentStatus | String | Pending, Paid, Failed |
| deliveryAddress | Object | Delivery address |
| orderDate | Date | Order placement date |
| updatedAt | Date | Last updated date |

### Ordered Product Object

| Field | Type |
|--------|------|
| productId | ObjectId |
| quantity | Number |
| price | Number |

---

## 6. Notifications

Stores administrator dashboard notifications.

### Fields

| Field | Type | Description |
|--------|------|-------------|
| _id | ObjectId | Notification ID |
| title | String | Notification title |
| message | String | Notification message |
| type | String | Order, Payment, Inventory |
| isRead | Boolean | Notification read status |
| createdAt | Date | Notification creation time |

---

# Collection Relationships

```
User (1)
   │
   ├──── places ─────────► Orders (Many)
   │
   ├──── owns ───────────► Cart (1)
   │
   └──── receives OTP

Category (1)
   │
   └──── contains ───────► Products (Many)

Cart
   │
   └──── contains ───────► Products

Orders
   │
   └──── contains ───────► Products

Orders
   │
   ├──── generates ──────► Notifications

Admin
   │
   ├──── manages ────────► Products
   ├──── manages ────────► Customers
   ├──── manages ────────► Orders
   ├──── manages ────────► Payment Status
   └──── creates ────────► New Admins
```

---

# Database Features

- Secure password storage using bcrypt
- JWT-based authentication
- Role-based authorization
- Email OTP for password reset
- Product categorization
- Inventory tracking
- Shopping cart management
- Wholesale order management
- Business Notes support
- Quick Reorder support
- Payment Status tracking
- Dashboard notifications
- Email notifications for new orders
- Low Stock Alerts
- Smart Restock Suggestions

---

# Design Considerations

- MongoDB ObjectId references are used to establish relationships between collections.
- Only customers can register through the application.
- The first administrator is created during project setup.
- Existing administrators can create additional administrators.
- Product stock is updated only by administrators.
- Previous orders remain unchanged even if product prices are updated.
- Business Notes are stored with each order for processing.
- Payment status is maintained separately from order status.
- Dashboard notifications are generated whenever a customer places an order.
- Email OTPs expire after a predefined time.
- Quick Reorder recreates a previous order by copying its products into a new shopping cart.
