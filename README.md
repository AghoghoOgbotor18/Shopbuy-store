# 🛒 ShopBuy – Modern React E-Commerce Store

ShopBuy is a fully responsive React-Redux e-commerce web application designed to mimic a real online shopping experience.  
It allows users to browse products, filter by categories, view detailed product pages, and manage their shopping cart with smooth UI interactions.  
This project showcases practical frontend development skills including state management, routing, clean UI/UX, and component architecture.


---

## Live Demo
Coming soon…

---

## Features

###  Product Display
- Responsive product grid layout  
- Shows image, category, title, and price  
- Smooth hover effects and clean UI

###  Category Filtering
- Categories: **All, Electronics, Fashion, Office Accessories**  
- Active category button is visually highlighted  
- Dynamic filtering using Redux state

###  Product Details Page
- Large product image  
- Title, price, category, description  
- Shows full product information  
- Button to add product to cart

### 🛒 Shopping Cart
- Add items to cart  
- Increase and decrease quantity  
- Remove item from cart  
- Cart totals update automatically  
- Displays subtotal, shipping, and total  

###  Built With Modern Tools
| Technology | Purpose |
|-----------|----------|
| **React** | Building UI components |
| **Redux Toolkit** | Cart + product filtering state |
| **React Router DOM** | Navigation & dynamic routing |
| **Tailwind CSS** | Modern, responsive styling |
| **React Icons** | Icons for UI interactions |
| **JavaScript (ES6+)** | Core logic |

---

## 📂 Project Structure
ShopBuy/
│── src/
│ ├── Components/
│ │ ├── ProductGrid.jsx
│ │ ├── Footer.jsx
│ ├── Pages/
│ │ ├── Home.jsx
│ │ ├── ProductDetails.jsx
│ │ ├── CartPage.jsx
│ ├── Features/
│ │ ├── Products/
│ │ │ ├── ProductSlice.js
│ │ ├── Cart/
│ │ │ ├── CartSlice.js
│ ├── App.jsx
│ ├── main.jsx
│── public/
│── package.json
│── README.md


##  How to Run Locally

### Clone the repository
```bash
git clone https://github.com/aghoghoogbotor18/shopbuy-store.git
```
### Install dependencies
```bash
npm install
```
### Start the development server
```bash
npm run dev
```

### 💳 Payment Integration (Planned)
ShopBuy is prepared for Paystack integration.
Future payment flow:
-User clicks Proceed to Checkout
-Redirects to Paystack secure payment page
-Supports card, transfer, USSD
-Returns payment status
-Order confirmation page
(Integration in progress)


###🧩 Challenges I Faced While Building ShopBuy
Here are the real challenges that shaped the project and made me grow as a developer:

- 1. Understanding Redux Toolkit deeply:
 Managing cart state, updating quantities, and removing items was confusing at first.
 I learned how reducers work, how to avoid state mutation errors, and how to use useSelector and useDispatch properly.

- 2. Designing clean and responsive UI:
 Getting layouts to look good on both mobile and desktop required practice:
 spacing, grids, shadows, flex layouts, responsiveness, etc.

- 3. Handling product images correctly:
 Importing images dynamically gave errors.
 I had to learn the difference between public folder vs src/assets, and how React handles static files.

- 4. Managing dynamic routing with React Router:
 Learning how product pages work using URL params (e.g. /product/1) was challenging but rewarding.

- 5. Building the cart logic from scratch
 Ensuring:
 Items don’t duplicate
 Quantity updates correctly
 Removing an item updates totals
…was a big part of learning how real e-commerce logic works.

- 6. Keeping the UI clean while using many components
 I learned how to structure components and files so the project stays organized.

- 7. Preparing the project for payment integration:
 Paystack asks for business details, annual sales, website description, etc.
This taught me how real payment gateways work.
