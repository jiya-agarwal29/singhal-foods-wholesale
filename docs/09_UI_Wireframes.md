# 09. UI Wireframes

## Purpose

This document presents the low-fidelity wireframes for the Singhal Foods B2B Wholesale Platform. The wireframes illustrate the layout and navigation of the application before implementation. They act as a blueprint for frontend development.

---

# 1. Home Page

```
+--------------------------------------------------------------------------------+
| 🏪 Singhal Foods              Search Products            Login | Cart | Profile |
+--------------------------------------------------------------------------------+

+--------------------------------------------------------------------------------+
|                           SINGHAL FOODS                                        |
|               Wholesale Grocery & Food Products                                |
|       Serving Hotels • Restaurants • Cafes • Retail Stores                    |
|                          [ Browse Products ]                                   |
+--------------------------------------------------------------------------------+

Product Categories

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
✓ Quick Reorder

+--------------------------------------------------------------------------------+
| Footer                                                                         |
+--------------------------------------------------------------------------------+
```

Purpose:
- Introduce the business
- Display categories
- Highlight featured products
- Allow quick navigation

---

# 2. Product Listing Page

```
+--------------------------------------------------------------------------------+
| Logo              Search Products                 Cart | Profile               |
+--------------------------------------------------------------------------------+

Category Filter        Brand Filter         Sort By Price

--------------------------------------------------------------------------

+-------------+ +-------------+ +-------------+ +-------------+
| Product     | | Product     | | Product     | | Product     |
| Image       | | Image       | | Image       | | Image       |
| Name        | | Name        | | Name        | | Name        |
| Stock       | | Stock       | | Stock       | | Stock       |
| ₹ Price     | | ₹ Price     | | ₹ Price     | | ₹ Price     |
| Add Cart    | | Add Cart    | | Add Cart    | | Add Cart    |
+-------------+ +-------------+ +-------------+ +-------------+

Previous          1   2   3   4          Next

Footer
```

Purpose:
- Browse available products
- Filter by category
- Search products
- Sort products

---

# 3. Product Details Page

```
+--------------------------------------------------------------------------------+
| Navbar                                                                         |
+--------------------------------------------------------------------------------+

+---------------------------+---------------------------------------------------+
|                           | Product Name                                      |
|       Product Image       | Category                                          |
|                           | Description                                       |
|                           | Stock Available                                   |
|                           | Price                                              |
|                           | Quantity [-] [ 5 ] [+]                            |
|                           |                                                   |
|                           | [ Add to Cart ]                                   |
+---------------------------+---------------------------------------------------+

Footer
```

Purpose:
- View complete product details
- Select quantity
- Add products to cart

---

# 4. Shopping Cart

```
+--------------------------------------------------------------------------------+
| Navbar                                                                         |
+--------------------------------------------------------------------------------+

Product             Quantity          Price          Remove

--------------------------------------------------------------

Rice                   5              ₹4500            X

Oil                    2              ₹1800            X

Paneer                 4              ₹1200            X

--------------------------------------------------------------

Subtotal

GST

Total Amount

[ Continue Shopping ]            [ Checkout ]

Footer
```

Purpose:
- Review selected products
- Modify quantities
- Proceed to checkout

---

# 5. Checkout Page

```
+--------------------------------------------------------------------------------+
| Navbar                                                                         |
+--------------------------------------------------------------------------------+

Business Information

Business Name

Delivery Address

Phone Number

GST Number

---------------------------------------------------------------

Business Notes

_________________________________________________________

---------------------------------------------------------------

Order Summary

Rice × 5

Oil × 2

Paneer × 4

---------------------------------------------------------------

Total Amount

[ Place Order ]
```

Purpose:
- Confirm order
- Add delivery details
- Add business notes
- Place order

---

# 6. Order History

```
+--------------------------------------------------------------------------------+
| Navbar                                                                         |
+--------------------------------------------------------------------------------+

Order ID      Date         Status         Amount

--------------------------------------------------------

#1025      10 Jul       Delivered        ₹18,500

[ View Details ]      [ Quick Reorder ]

--------------------------------------------------------

#1024      08 Jul       Packed           ₹9,250

[ View Details ]      [ Quick Reorder ]

--------------------------------------------------------

#1023      05 Jul       Pending          ₹13,100

[ View Details ]      [ Quick Reorder ]

Footer
```

Purpose:
- View previous orders
- Track order status
- Quickly reorder previous purchases

---

# 7. Admin Dashboard

```
+----------------------+---------------------------------------------------------+
| Sidebar              | Dashboard                                               |
|----------------------|---------------------------------------------------------|
| Dashboard            | Total Products                                          |
| Products             | Total Orders                                            |
| Orders               | Registered Customers                                    |
| Customers            | Low Stock Products                                      |
| Inventory            | Pending Orders                                          |
| Logout               | Recent Orders                                           |
+----------------------+---------------------------------------------------------+
```

Purpose:
- Monitor overall business
- View sales statistics
- Manage operations

---

# 8. Product Management

```
+--------------------------------------------------------------------------------+
| Admin Dashboard                                                                |
+--------------------------------------------------------------------------------+

Search Product

---------------------------------------------------------------

Product      Price      Stock      Category      Edit     Delete

---------------------------------------------------------------

Rice

Oil

Paneer

---------------------------------------------------------------

                      [ + Add New Product ]
```

Purpose:
- Add products
- Update products
- Delete products

---

# 9. Customer Management

```
+--------------------------------------------------------------------------------+
| Admin Dashboard                                                                |
+--------------------------------------------------------------------------------+

Business Name      Owner Name      Phone      Orders      View

---------------------------------------------------------------

Royal Palace Hotel

ABC Caterers

Fresh Mart

Hotel Paradise

---------------------------------------------------------------
```

Purpose:
- View registered customers
- Access customer details
- Track customer orders

---

# 10. Inventory Management

```
+--------------------------------------------------------------------------------+
| Admin Dashboard                                                                |
+--------------------------------------------------------------------------------+

Product Name      Available Stock      Status

-------------------------------------------------------

Rice                     120             In Stock

Oil                       80             In Stock

Paneer                     8             Low Stock

Sugar                      5             Low Stock

-------------------------------------------------------

Low Stock Alerts

• Paneer

• Sugar

• Milk Powder

-------------------------------------------------------

[ Update Inventory ]
```

Purpose:
- Monitor inventory
- Update stock
- Identify low-stock products

---

# 11. Quick Reorder

```
+--------------------------------------------------------------------------------+
| Navbar                                                                         |
+--------------------------------------------------------------------------------+

Previous Order

-------------------------------------------------------

Rice            Previous Qty : 10      New Qty : [ 12 ]

Oil             Previous Qty : 5       New Qty : [ 5 ]

Paneer          Previous Qty : 4       New Qty : [ 6 ]

-------------------------------------------------------

Business Notes

______________________________________________

-------------------------------------------------------

                [ Add All to Cart ]

                [ Proceed to Checkout ]
```

Purpose:
- Reuse previous orders
- Modify quantities
- Save time for repeat customers
- Simplify bulk ordering

  09_UI_Wireframes

│
├── Common Customer Header
├── Common Customer Footer
│
├── Customer UI
│   ├── Home
│   ├── Products
│   ├── Product Details
│   ├── Cart
│   ├── Checkout
│   ├── Order History
│   ├── Quick Reorder
│   └── Profile
│
├── Admin UI
│   ├── Admin Login
│   ├── Dashboard
│   ├── Products
│   ├── Categories
│   ├── Orders
│   ├── Customers
│   ├── Inventory
│   └── Profile
│
└── Navigation Flow
