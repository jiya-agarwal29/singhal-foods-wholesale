# User Flow

# 1. Business Customer Flow

Home
   │
   ▼
Customer Registration / Login
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
View Order History
   │
   ▼
Track Order & Payment Status
   │
   ▼
⭐ Quick Reorder

---

# 2. Administrator Flow

Seed First Admin
      │
      ▼
Admin Login
      │
      ▼
Dashboard
      │
 ┌────┼────────────┬────────────┬────────────┬────────────┐
 │    │            │            │            │            │
 ▼    ▼            ▼            ▼            ▼            ▼
Products Orders Customers Payments Notifications Admins
 │      │          │            │             │            │
 ▼      ▼          ▼            ▼             ▼            ▼
CRUD  Update     View        Update      View New      Add/View
      Order      Customer    Payment     Notifications Admins
      Status     Details     Status
                    │
                    ▼
             Inventory Management
                    │
                    ▼
             Low Stock Alerts
                    │
                    ▼
        Smart Restock Suggestions

---

# 3. Authentication Flow

## Customer Registration

Register
   │
   ▼
Customer Account Created
   │
   ▼
Login
   │
   ▼
JWT Authentication
   │
   ▼
Customer Dashboard

---

## Admin Authentication

Seed First Admin
   │
   ▼
Admin Login
   │
   ▼
JWT Authentication
   │
   ▼
Admin Dashboard
   │
   ▼
Create New Admin (Optional)

---

## Forgot Password Flow

Login
   │
   ▼
Forgot Password
   │
   ▼
Enter Registered Email
   │
   ▼
Generate OTP
   │
   ▼
OTP Sent to Email
   │
   ▼
Enter OTP
   │
   ▼
OTP Verified
   │
   ▼
Reset Password
   │
   ▼
Login

---

# 4. Order Flow

Browse Products
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
Order Saved
      │
      ├──────────────► Dashboard Notification
      │
      ├──────────────► Email Notification
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
      │
      ▼
Payment Status Updated

---

# 5. Quick Reorder Flow

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
      │
      ▼
Place Order

---

# 6. Administrator Creation Flow

Seed First Admin
      │
      ▼
Admin Login
      │
      ▼
Admin Dashboard
      │
      ▼
Admin Management
      │
      ▼
Add New Admin
      │
      ▼
New Admin Account Created
