---

# Frontend Structure

The frontend is built using React and is responsible for the user interface and user interactions.

## assets/

Stores static resources used throughout the application.

Examples:
- Images
- Logos
- Icons
- Fonts

Purpose:
Keeps all media files organized in one location for easy reuse.

---

## components/

Contains reusable UI components that can be used across multiple pages.

Examples:
- Navbar
- Footer
- ProductCard
- SearchBar
- Button

Purpose:
Avoids code duplication and improves maintainability.

---

## pages/

Contains all application pages that correspond to different routes.

Examples:
- Home
- Login
- Register
- Products
- Product Details
- Cart
- Checkout
- Orders
- Admin Dashboard

Purpose:
Represents complete webpages displayed to the user.

---

## layouts/

Contains common page layouts shared across multiple pages.

Examples:
- Main Layout
- Admin Layout

Purpose:
Provides a consistent structure by reusing common elements such as the Navbar, Sidebar, and Footer.

---

## hooks/

Contains custom React Hooks.

Examples:
- useFetch
- useDebounce
- useAuth

Purpose:
Encapsulates reusable React logic and improves code reusability.

---

## context/

Contains React Context providers used for global state management.

Examples:
- AuthContext
- CartContext

Purpose:
Allows data such as authentication status and shopping cart information to be shared across components without prop drilling.

---

## services/

Contains functions responsible for communicating with backend APIs using Axios.

Examples:
- authService
- productService
- cartService
- orderService

Purpose:
Separates API calls from UI components, making the code cleaner and easier to maintain.

---

## utils/

Contains reusable helper functions.

Examples:
- formatPrice
- calculateGST
- validatePhoneNumber

Purpose:
Stores common utility functions that are used throughout the application.

---

## routes/

Contains React Router configuration.

Purpose:
Defines navigation between pages and maps URLs to React components.

Example:

/products → Products Page

/cart → Cart Page

/admin → Admin Dashboard

---

# Backend Structure

The backend is developed using Node.js, Express.js, and MongoDB. It manages business logic, authentication, APIs, and database operations.

---

## config/

Contains application configuration files.

Examples:
- MongoDB connection
- Environment configuration
- JWT configuration

Purpose:
Stores application-level settings required by the server.

---

## controllers/

Contains the business logic for handling requests.

Responsibilities:
- Receive requests from routes
- Validate input
- Perform business operations
- Interact with database models
- Return responses to the client

Examples:
- authController
- productController
- cartController
- orderController

Purpose:
Implements the application's core functionality.

---

## middleware/

Contains middleware functions executed before the request reaches the controller.

Examples:
- JWT Authentication
- Admin Authorization
- Error Handling
- CORS

Purpose:
Processes requests by performing authentication, validation, logging, or other tasks before business logic is executed.

---

## models/

Contains Mongoose models representing MongoDB collections.

Examples:
- User
- Product
- Category
- Cart
- Order

Purpose:
Defines the database schema and provides methods for interacting with MongoDB.

---

## routes/

Defines all REST API endpoints of the application.

Examples:
- Authentication Routes
- Product Routes
- Cart Routes
- Order Routes
- Admin Routes

Purpose:
Maps incoming API requests to their corresponding controller functions.

---

## services/

Contains reusable backend services.

Examples:
- Email Service
- Notification Service
- Invoice Service

Purpose:
Stores reusable business functionalities that may be used by multiple controllers.

---

## utils/

Contains reusable helper functions used across the backend.

Examples:
- Generate JWT Token
- Calculate GST
- Format Date

Purpose:
Improves code reuse by keeping commonly used helper functions in one place.

---

# Request Flow

The following sequence describes how a request is processed in the application.

User Request

↓

React Component

↓

Axios Service

↓

Express Route

↓

Middleware

↓

Controller

↓

Model

↓

MongoDB

↓

Controller

↓

JSON Response

↓

React UI Updated

---

# Understanding Routes, Controllers and Models

These three components follow the principle of Separation of Concerns, where each has a specific responsibility.

## Routes

Routes define the API endpoints of the application.

Responsibilities:
- Receive incoming HTTP requests
- Match the requested URL and HTTP method
- Forward the request to the appropriate controller

Example:

GET /api/products

↓

productController.getProducts()

Routes do **not** contain business logic.

---

## Controllers

Controllers contain the application's business logic.

Responsibilities:
- Receive requests from routes
- Validate request data
- Execute business operations
- Interact with database models
- Return appropriate HTTP responses

Example:

User requests all products

↓

Controller fetches products from MongoDB

↓

Returns JSON response

Controllers decide **what should happen**.

---

## Models

Models represent MongoDB collections using Mongoose schemas.

Responsibilities:
- Define the structure of database documents
- Perform CRUD operations
- Validate database data
- Interact directly with MongoDB

Examples:
- User Model
- Product Model
- Order Model

Models are responsible for **storing and retrieving data**.

---

# Complete Backend Flow

Client Request

↓

Route

↓

Middleware

↓

Controller

↓

Model

↓

MongoDB

↓

Controller

↓

Response
