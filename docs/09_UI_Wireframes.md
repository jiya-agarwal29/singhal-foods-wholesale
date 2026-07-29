# UI Wireframes

## 1. Introduction

This document presents the low-fidelity wireframes for the **Singhal Foods B2B Wholesale Platform**. The wireframes illustrate the layout, navigation, and user interaction flow before implementation. They serve as a blueprint for frontend development and ensure consistency across customer and administrator interfaces.

---

# 1. Home Page

```
+--------------------------------------------------------------------------------+
| 🏪 Singhal Foods            Search Products         Login | Register | Cart    |
+--------------------------------------------------------------------------------+

+--------------------------------------------------------------------------------+
|                                                                                |
|                          SINGHAL FOODS                                         |
|                  Wholesale Grocery & Food Products                             |
|                                                                                |
|             Serving Hotels • Restaurants • Cafes • Retail Stores              |
|                                                                                |
|                     [ Browse Products ]                                        |
|                                                                                |
+--------------------------------------------------------------------------------+

Categories

+----------+----------+----------+----------+----------+
| Rice     | Oils     | Dairy    | Spices   | Snacks   |
+----------+----------+----------+----------+----------+

Featured Products

+-------------+ +-------------+ +-------------+ +-------------+
| Product     | | Product     | | Product     | | Product     |
| Image       | | Image       | | Image       | | Image       |
| Name        | | Name        | | Name        | | Name        |
| ₹ Price     | | ₹ Price     | | ₹ Price     | | ₹ Price     |
| Add to Cart | | Add to Cart | | Add to Cart | | Add to Cart |
+-------------+ +-------------+ +-------------+ +-------------+

Why Choose Singhal Foods?

✓ Wholesale Pricing

✓ Bulk Orders

✓ Fast Delivery

✓ Easy Reordering

+--------------------------------------------------------------------------------+
| Footer                                                                         |
+--------------------------------------------------------------------------------+
```

### Purpose

- Introduce the business.
- Display featured products.
- Showcase product categories.
- Allow users to browse products.
- Redirect users to Login or Registration.

### Features

- Product Search
- Featured Products
- Product Categories
- Login
- Customer Registration
- Shopping Cart

---

# 2. Login Page

```
+--------------------------------------------------------------------------------+
|                               Singhal Foods                                    |
+--------------------------------------------------------------------------------+

                                   LOGIN

Email

____________________________________________________

Password

____________________________________________________

Forgot Password?

                          [ Login ]

-------------------------------------------------------

Don't have an account?

                         Register
```

### Purpose

- Authenticate both Customers and Administrators.
- Redirect users to their respective dashboards.

### Features

- Email Login
- Password Login
- Forgot Password
- Customer Login
- Admin Login

---

# 3. Customer Registration

```
+--------------------------------------------------------------------------------+
|                               Singhal Foods                                    |
+--------------------------------------------------------------------------------+

                         CUSTOMER REGISTRATION

Business Name

____________________________________________________

Owner Name

____________________________________________________

Business Type

____________________________________________________

GST Number (Optional)

____________________________________________________

Email Address

____________________________________________________

Phone Number

____________________________________________________

Delivery Address

____________________________________________________

Password

____________________________________________________

Confirm Password

____________________________________________________

                       [ Register ]
```

### Purpose

- Register new business customers.
- Store business details.
- Create customer account.

### Features

- Business Registration
- GST Information
- Contact Details
- Secure Password Creation

---

# 4. Forgot Password

```
+--------------------------------------------------------------------------------+
|                               Singhal Foods                                    |
+--------------------------------------------------------------------------------+

                            FORGOT PASSWORD

Registered Email

____________________________________________________

                     [ Send OTP ]
```

### Purpose

- Verify the registered email address.
- Generate an OTP for password recovery.

### Features

- Email Verification
- OTP Generation
- Secure Password Recovery

---

# 5. OTP Verification

```
+--------------------------------------------------------------------------------+
|                               Singhal Foods                                    |
+--------------------------------------------------------------------------------+

                              VERIFY OTP

Enter OTP

____________________________________________________

                    [ Verify OTP ]

                      Resend OTP
```

### Purpose

- Verify the OTP received on the registered email.
- Allow the user to reset the password after successful verification.

### Features

- OTP Verification
- OTP Resend
- Secure Authentication

---

# 6. Reset Password

```
+--------------------------------------------------------------------------------+
|                               Singhal Foods                                    |
+--------------------------------------------------------------------------------+

                            RESET PASSWORD

New Password

____________________________________________________

Confirm Password

____________________________________________________

                  [ Update Password ]
```

### Purpose

- Allow users to securely create a new password after OTP verification.

### Features

- Password Reset
- Password Confirmation
- Secure Account Recovery

---

# 7. Customer Dashboard

```
+--------------------------------------------------------------------------------+
| Logo              Search Products            Cart | Profile | Logout           |
+--------------------------------------------------------------------------------+

Welcome, Jiya!

+----------------+ +----------------+ +----------------+ +----------------+
| Total Orders   | | Pending Orders | | Payment Status | | Quick Reorder |
+----------------+ +----------------+ +----------------+ +----------------+

Quick Actions

---------------------------------------------------------------

[ Browse Products ]     [ View Cart ]

[ My Orders ]           [ Update Profile ]

---------------------------------------------------------------

Recent Orders

---------------------------------------------------------------

Order #1025

Delivered

Paid

---------------------------------------------------------------

Order #1024

Packed

Pending

---------------------------------------------------------------

Order #1023

Pending

Pending

---------------------------------------------------------------

Footer
```

### Purpose

- Provide a personalized dashboard for business customers.
- Display order summary and payment information.
- Provide quick access to frequently used features.

### Features

- Welcome Message
- Recent Orders
- Payment Status
- Quick Reorder
- Browse Products
- View Cart
- Profile Management

---

# 8. Product Listing Page

```
+--------------------------------------------------------------------------------+
| Logo              Search Products                 Cart | Profile               |
+--------------------------------------------------------------------------------+

Categories

Rice | Oils | Dairy | Snacks | Beverages | Bakery

Sort By

Price | Latest | Popular

--------------------------------------------------------------------------

+-------------+ +-------------+ +-------------+ +-------------+

| Product     | | Product     | | Product     | | Product     |

| Image       | | Image       | | Image       | | Image       |

| Product     | | Product     | | Product     | | Product     |

| ₹ Price     | | ₹ Price     | | ₹ Price     | | ₹ Price     |

| Stock       | | Stock       | | Stock       | | Stock       |

| Add to Cart | | Add to Cart | | Add to Cart | | Add to Cart |

+-------------+ +-------------+ +-------------+ +-------------+

Previous        1      2      3      4       Next

Footer
```

### Purpose

- Allow customers to browse all available products.
- Filter products by category.
- Search and sort products.

### Features

- Product Search
- Category Filter
- Product Cards
- Sorting Options
- Pagination

---

# 9. Product Details Page

```
+--------------------------------------------------------------------------------+
| Navbar                                                                         |
+--------------------------------------------------------------------------------+

+-----------------------------+--------------------------------------------------+

|                             | Product Name

|                             |

|                             | Category

|      Product Image          |

|                             | Brand

|                             |

|                             | Description

|                             |

|                             | Available Stock

|                             |

|                             | ₹ Price

|                             |

|                             | Quantity [-] [5] [+]

|                             |

|                             | [ Add to Cart ]

+-----------------------------+--------------------------------------------------+

Footer
```

### Purpose

- Display detailed information about a product.
- Allow customers to choose quantity before adding to the cart.

### Features

- Product Image
- Product Information
- Quantity Selector
- Add to Cart

---

# 10. Shopping Cart

```
+--------------------------------------------------------------------------------+
| Navbar                                                                         |
+--------------------------------------------------------------------------------+

Product            Quantity          Price            Remove

---------------------------------------------------------------

Rice                  5             ₹4500              X

Oil                   2             ₹1800              X

Paneer                4             ₹1200              X

---------------------------------------------------------------

Subtotal

GST

Grand Total

---------------------------------------------------------------

[ Continue Shopping ]            [ Checkout ]

Footer
```

### Purpose

- Display all selected products.
- Allow customers to modify their order before checkout.

### Features

- Update Quantity
- Remove Product
- Cart Summary
- Continue Shopping
- Checkout

---

# 11. Checkout Page

```
+--------------------------------------------------------------------------------+
| Navbar                                                                         |
+--------------------------------------------------------------------------------+

Delivery Address

____________________________________________________

Business Notes

____________________________________________________

---------------------------------------------------------------

Order Summary

Rice x5

Oil x2

Paneer x4

---------------------------------------------------------------

Total Amount

₹ 7,500

---------------------------------------------------------------

Payment Status

Pending

---------------------------------------------------------------

[ Place Order ]
```

### Purpose

- Confirm customer order.
- Collect delivery instructions.
- Place the wholesale order.

### Features

- Delivery Address
- Business Notes
- Order Summary
- Payment Status
- Place Order

---

# 12. Order History

```
+--------------------------------------------------------------------------------+
| Navbar                                                                         |
+--------------------------------------------------------------------------------+

Order ID      Date      Order Status      Payment Status      Amount

---------------------------------------------------------------------

#1025      10 Jul      Delivered             Paid           ₹18,500

[ View Details ]      [ Quick Reorder ]

---------------------------------------------------------------------

#1024      08 Jul      Packed               Pending         ₹9,250

[ View Details ]      [ Quick Reorder ]

---------------------------------------------------------------------

#1023      05 Jul      Pending              Pending         ₹13,100

[ View Details ]      [ Quick Reorder ]

Footer
```

### Purpose

- Allow customers to view previous orders.
- Track order status.
- Track payment status.
- Quickly reorder previous purchases.

### Features

- Order Tracking
- Payment Status
- Order Details
- Quick Reorder

---

# 13. Customer Profile

```
+--------------------------------------------------------------------------------+
| Navbar                                                                         |
+--------------------------------------------------------------------------------+

Business Name

____________________________________________________

Owner Name

____________________________________________________

Email

____________________________________________________

Phone Number

____________________________________________________

Delivery Address

____________________________________________________

---------------------------------------------------------------

[ Update Profile ]

[ Change Password ]
```

### Purpose

- Allow customers to update their business profile.
- Change account password.

### Features

- Update Business Information
- Update Contact Details
- Change Password

----

# 14. Admin Dashboard

```
+--------------------------------------------------------------------------------+
| Admin | Dashboard | Notifications | Profile | Logout                          |
+--------------------------------------------------------------------------------+

Welcome, Admin!

+----------------+ +----------------+ +----------------+ +----------------+
| Total Products | | Total Orders   | | Total Revenue  | | Customers      |
+----------------+ +----------------+ +----------------+ +----------------+

+----------------+ +----------------+ +----------------+ +----------------+
| Pending Orders | | Pending Payments | Low Stock     | New Notifications|
+----------------+ +----------------+ +----------------+ +----------------+

Quick Actions

---------------------------------------------------------------

[ Manage Products ]      [ Manage Orders ]

[ Customers ]            [ Inventory ]

[ Payments ]             [ Reports ]

[ Notifications ]        [ Add Admin ]

---------------------------------------------------------------

Recent Orders

---------------------------------------------------------------

#2054   ABC Caterers      Pending

#2053   Hotel Sunrise     Packed

#2052   Royal Palace      Delivered

---------------------------------------------------------------

Footer
```

### Purpose

- Provide administrators with a complete overview of business operations.
- Monitor orders, inventory, customers, payments, and notifications.

### Features

- Business Statistics
- Pending Orders
- Low Stock Alerts
- Payment Summary
- Recent Orders
- Quick Navigation

---

# 15. Product Management

```
+--------------------------------------------------------------------------------+
| Products                                                            Add Product|
+--------------------------------------------------------------------------------+

Search Product

____________________________________________________

--------------------------------------------------------------------------

Product        Category       Price      Stock       Status      Action

--------------------------------------------------------------------------

Rice           Grains         ₹1200      50         Active      Edit Delete

Oil            Oils           ₹1800      20         Active      Edit Delete

Paneer         Dairy          ₹250       10         Active      Edit Delete

--------------------------------------------------------------------------

                         [ Add New Product ]
```

### Purpose

- Manage all products available for wholesale ordering.

### Features

- Add Product
- Edit Product
- Delete Product
- Search Products
- Product Availability

---

# 16. Category Management

```
+--------------------------------------------------------------------------------+
| Categories                                                        Add Category |
+--------------------------------------------------------------------------------+

Category Name

Description

---------------------------------------------------------------

Rice

Wholesale Rice Products

Edit    Delete

---------------------------------------------------------------

Dairy

Milk Products

Edit    Delete

---------------------------------------------------------------

Spices

Indian Spices

Edit    Delete

---------------------------------------------------------------

                [ Add Category ]
```

### Purpose

- Organize products into categories.

### Features

- Add Category
- Edit Category
- Delete Category
- Category Listing

---

# 17. Inventory Management

```
+--------------------------------------------------------------------------------+
| Inventory                                                                      |
+--------------------------------------------------------------------------------+

Product          Current Stock      Minimum Stock      Status

--------------------------------------------------------------------

Rice                 50                  20            Healthy

Oil                  18                  20            Low Stock

Paneer               08                  15            Low Stock

--------------------------------------------------------------------

Suggested Restock

Oil      → +50 Units

Paneer   → +40 Units

---------------------------------------------------------------

             [ Update Inventory ]
```

### Purpose

- Monitor product inventory.
- Manage stock levels.

### Features

- Stock Monitoring
- Low Stock Alerts
- Smart Restock Suggestions
- Inventory Updates

---

# 18. Order Management

```
+--------------------------------------------------------------------------------+
| Orders                                                                         |
+--------------------------------------------------------------------------------+

Order ID      Customer        Status         Payment       Action

---------------------------------------------------------------------

#2054       ABC Caterers     Pending        Pending      View

#2053       Hotel Sunrise    Packed         Paid         View

#2052       Royal Palace     Delivered      Paid         View

---------------------------------------------------------------------

Order Details

Products

Business Notes

Delivery Address

Update Status

Pending

Confirmed

Packed

Out for Delivery

Delivered

Cancelled

[ Save Changes ]
```

### Purpose

- Manage customer orders.
- Update delivery status.

### Features

- View Orders
- Update Order Status
- View Business Notes
- View Delivery Details

---

# 19. Customer Management

```
+--------------------------------------------------------------------------------+
| Customers                                                                      |
+--------------------------------------------------------------------------------+

Customer Name        Business Name       Email

---------------------------------------------------------------

Jiya Agarwal

Singhal Foods

jiya@gmail.com

View Details

---------------------------------------------------------------

ABC Caterers

abc@gmail.com

View Details

---------------------------------------------------------------

Royal Palace

royal@gmail.com

View Details

---------------------------------------------------------------

Search Customer

____________________________________________________
```

### Purpose

- Manage registered customers.
- View customer details and order history.

### Features

- Customer List
- Customer Search
- Customer Details
- Order History
----
# 20. Payment Management

```
+--------------------------------------------------------------------------------+
| Payments                                                                       |
+--------------------------------------------------------------------------------+

Search Customer

____________________________________________________

--------------------------------------------------------------------------

Customer           Order ID      Amount      Status        Action

--------------------------------------------------------------------------

ABC Caterers       #2054         ₹18,500     Pending      Mark Paid

Royal Palace       #2053         ₹9,250      Paid         View

Fresh Mart         #2052         ₹12,000     Pending      Mark Paid

--------------------------------------------------------------------------

Payment Summary

----------------------------------------------------

Total Pending Payments : ₹30,500

Total Paid Payments    : ₹1,85,200

----------------------------------------------------

                    [ Export Report ]
```

### Purpose

- Manage customer payment records.
- Update payment status after payment confirmation.

### Features

- Payment Status
- Pending Payments
- Paid Payments
- Mark as Paid
- Payment Summary
- Export Report

---

# 21. Notification Center

```
+--------------------------------------------------------------------------------+
| Notifications                                                                  |
+--------------------------------------------------------------------------------+

🔴 New Order Received

ABC Caterers

Order #2054

2 minutes ago

---------------------------------------------------------------

🟡 Low Stock Alert

Paneer

Current Stock : 8 Units

---------------------------------------------------------------

🟢 Payment Received

Royal Palace

₹9,250

---------------------------------------------------------------

🔵 New Customer Registered

Fresh Mart

---------------------------------------------------------------

[ Mark All as Read ]
```

### Purpose

- Notify administrators about important business events.

### Features

- New Order Notifications
- Payment Notifications
- Low Stock Alerts
- Customer Registration Notifications

---

# 22. Admin Management

```
+--------------------------------------------------------------------------------+
| Administrators                                                                 |
+--------------------------------------------------------------------------------+

Name              Email                     Role

---------------------------------------------------------------

Rahul Sharma      admin@singhalfoods.com    Super Admin

---------------------------------------------------------------

Priya Shah        priya@singhalfoods.com    Admin

---------------------------------------------------------------

Search Admin

____________________________________________________

---------------------------------------------------------------

                    [ Add New Admin ]
```

### Purpose

- Manage administrator accounts.
- Allow the Super Admin to add additional administrators.

### Features

- View Admin List
- Search Admin
- Add New Admin
- Role Management

---

# 23. Reports & Analytics

```
+--------------------------------------------------------------------------------+
| Reports & Analytics                                                            |
+--------------------------------------------------------------------------------+

Sales Overview

----------------------------------------------------

Today's Orders

25

----------------------------------------------------

Monthly Revenue

₹4,82,500

----------------------------------------------------

Top Selling Products

Rice

Oil

Paneer

----------------------------------------------------

Top Customers

ABC Caterers

Royal Palace

Fresh Mart

----------------------------------------------------

Payment Summary

Paid Orders

Pending Payments

----------------------------------------------------

                    [ Download Report ]
```

### Purpose

- View business insights.
- Monitor sales performance and customer activity.

### Features

- Sales Analytics
- Revenue Summary
- Top Products
- Top Customers
- Payment Statistics
- Report Export

---

# 24. Application Navigation Flow

## Customer Flow

```
Home
   │
   ▼
Register
   │
   ▼
Login
   │
   ▼
Customer Dashboard
   │
   ├──────────────► Browse Products
   │                    │
   │                    ▼
   │              Product Details
   │                    │
   │                    ▼
   │                Add to Cart
   │                    │
   │                    ▼
   │                Shopping Cart
   │                    │
   │                    ▼
   │                 Checkout
   │                    │
   │                    ▼
   │                Place Order
   │                    │
   │                    ▼
   │               Order History
   │                    │
   │                    ▼
   │               Quick Reorder
   │
   ├──────────────► Profile
   │                    │
   │                    ▼
   │             Update Profile
   │
   └──────────────► Logout
```

---

## Forgot Password Flow

```
Login
   │
   ▼
Forgot Password
   │
   ▼
Enter Email
   │
   ▼
Receive OTP
   │
   ▼
Verify OTP
   │
   ▼
Reset Password
   │
   ▼
Login
```

---

## Admin Flow

```
Login
   │
   ▼
Admin Dashboard
   │
   ├────────► Products
   │
   ├────────► Categories
   │
   ├────────► Inventory
   │
   ├────────► Orders
   │
   ├────────► Customers
   │
   ├────────► Payments
   │
   ├────────► Notifications
   │
   ├────────► Reports
   │
   ├────────► Admin Management
   │
   └────────► Logout
```

---

# 25. UI Design Summary

The Singhal Foods user interface is designed to provide a clean, responsive, and user-friendly experience for both Customers and Administrators.

### Customer Interface

- Home Page
- Customer Registration
- Login
- Forgot Password
- OTP Verification
- Reset Password
- Customer Dashboard
- Product Listing
- Product Details
- Shopping Cart
- Checkout
- Order History
- Customer Profile

### Administrator Interface

- Admin Dashboard
- Product Management
- Category Management
- Inventory Management
- Order Management
- Customer Management
- Payment Management
- Notification Center
- Reports & Analytics
- Admin Management

### Design Principles

- Simple Navigation
- Responsive Layout
- Consistent Colour Scheme
- Role-Based Dashboard
- Secure Authentication
- Minimal User Steps
- Easy Order Placement
- Professional B2B Interface
- Mobile-Friendly Design

---

## Total Wireframes

| Module | Pages |
|---------|------:|
| Customer Module | 13 |
| Admin Module | 10 |
| Shared Pages | 2 |
| **Total UI Screens** | **25** |
