# User Flow

## 1. Business Customer Flow

```
Home
   │
   ▼
Register / Login
   │
   ▼
Browse Products
   │
   ▼
Search / Filter Products
   │
   ▼
View Product Details
   │
   ▼
Select Quantity
   │
   ▼
Add to Cart
   │
   ▼
Review Cart
   │
   ▼
Checkout
   │
   ▼
Add Business Notes (Optional)
   │
   ▼
Place Order
   │
   ▼
Order Confirmation
   │
   ▼
Order History
   │
   ▼
⭐ Quick Reorder
```

---

## 2. Administrator Flow

```
Admin Login
      │
      ▼
Dashboard
      │
 ┌────┼──────────┬──────────┐
 │    │          │          │
 ▼    ▼          ▼          ▼
Products Orders Inventory Customers
 │      │          │          │
 ▼      ▼          ▼          ▼
CRUD  Update    Update      View
      Status     Stock    Customer Details
                    │
                    ▼
           Low Stock Alerts
                    │
                    ▼
        Smart Restock Suggestions
```

---

## 3. Authentication Flow

```
Register
   │
   ▼
Login
   │
   ▼
JWT Authentication
   │
   ▼
Access Protected Routes
```

---

## 4. Order Flow

```
Select Products
      │
      ▼
Shopping Cart
      │
      ▼
Checkout
      │
      ▼
Business Notes
      │
      ▼
Place Order
      │
      ▼
Pending
      │
      ▼
Confirmed
      │
      ▼
Packed
      │
      ▼
Out for Delivery
      │
      ▼
Delivered
```

---

## 5. Quick Reorder Flow

```
Order History
      │
      ▼
Select Previous Order
      │
      ▼
Quick Reorder
      │
      ▼
Products Added to Cart
      │
      ▼
Update Quantity (Optional)
      │
      ▼
Checkout
```
