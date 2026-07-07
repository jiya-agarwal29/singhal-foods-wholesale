# Database Collections

## 1. Overview

The Singhal Foods platform uses **MongoDB**, a NoSQL database, to store business customer information, products, orders, categories, and shopping carts. The database is designed to support efficient order management, inventory tracking, and scalable business operations.

---

# Collections

## 1. Users

Stores information about registered business customers and administrators.

### Fields

| Field | Type | Description |
|--------|------|-------------|
| _id | ObjectId | Unique user ID |
| businessName | String | Name of the business |
| ownerName | String | Business owner's name |
| businessType | String | Hotel, Restaurant, Caterer, Retail Store, etc. |
| gstNumber | String | GST Number (Optional) |
| email | String | Unique email address |
| phone | String | Contact number |
| password | String | Encrypted password |
| deliveryAddress | String | Business delivery address |
| role | String | Customer or Admin |
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
| availability | Boolean | Available or Out of Stock |
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

Stores all wholesale orders.

### Fields

| Field | Type | Description |
|--------|------|-------------|
| _id | ObjectId | Order ID |
| customerId | ObjectId | Reference to User |
| products | Array | Ordered products |
| totalAmount | Number | Total order value |
| businessNotes | String | Delivery instructions (Optional) |
| orderStatus | String | Pending, Confirmed, Packed, Out for Delivery, Delivered, Cancelled |
| deliveryAddress | String | Delivery address |
| orderDate | Date | Order placement date |
| updatedAt | Date | Last updated |

### Ordered Product Object

| Field | Type |
|--------|------|
| productId | ObjectId |
| quantity | Number |
| price | Number |

---

# Collection Relationships

User (1)
│
├──── places ────► Order (Many)

Category (1)
│
├──── contains ───► Product (Many)

User (1)
│
├──── owns ───────► Cart (1)

Cart
│
├──── contains ───► Products

Order
│
├──── contains ───► Products

---

# Database Features

- Secure password storage using bcrypt
- JWT-based authentication
- Inventory tracking
- Product categorization
- Shopping cart management
- Wholesale order management
- Business Notes support
- Quick Reorder support
- Low Stock Alerts
- Smart Restock Suggestions

---

# Design Considerations

- MongoDB ObjectId references are used to establish relationships between collections.
- Product stock is updated only by administrators.
- Previous orders remain unchanged even if product prices are updated.
- Business Notes are stored with each order for processing.
- Quick Reorder recreates a previous order using current product availability and pricing.
