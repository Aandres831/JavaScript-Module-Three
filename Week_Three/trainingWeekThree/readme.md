# Moreci Shop


**Moreci Shop** is a simple but complete **CRUD** web application for managing a product list. It uses **JSON Server** as a simulated backend and the **Fetch API** for HTTP requests.  

All functionality is rendered **directly in the DOM** for an interactive and user-friendly experience—no console output required.

---

## Features
- Add new products with name and price.
- Edit existing products by searching by name.
- Delete products by name.
- Search for products with partial name matching.
- Fully responsive UI with an all-green theme.
- Error handling and validations in the interface.

---

## Folder Structure
│
├── index.html # Main page structure
├── style.css # Styling 
├── gestion_api.js # App logic using Fetch API
└── db.json # Mock database for JSON Server


---

## Requirements
- Node.js installed
- JSON Server installed globally

Install JSON Server:

---

## How to Run
1. Start JSON Server in the project folder:
Server runs by default at:
http://localhost:3000/productos


2. Open `index.html` in your web browser.

---

## How It Works

### Viewing All Products
- All products in `db.json` are fetched and displayed in the main section.
- Each product card shows its name and price.
- Includes **Edit** and **Delete** buttons.

---

### Adding a Product
- Fill in **Name** and **Price** in the form.
- Click **Save Product**.
- If the product name does not exist, a new entry is added via **POST**.

---

### Editing a Product
- Use the **Search by Name** section to find products.
- Click **Edit** on a product card.
- The form auto-fills with the product's current **Name** and **Price**.
- Modify the **Price** (or **Name**) and click **Save Product**.
- The app updates the existing product using **PUT**.

---

### Deleting a Product
- Search for the product by name.
- Click **Delete** on the matching card.
- The app sends a **DELETE** request for all products matching that name.

---

### Search Functionality
- Supports partial name matching.
- Displays all matches in a dedicated **Search Results** section.

---

## Style and Design
- Fully green scale theme:
  - Dark green for headers and buttons.
  - Light green for backgrounds and cards.
  - Soft green shadows and hover effects.
- Modern, minimal, and easy to read.
- Consistent natural color palette with green tones only.

---

## Example `db.json`
```json
{
  "productos": [
    { "id": 1, "nombre": "Chocolate", "precio": 2500 },
    { "id": 2, "nombre": "Café", "precio": 4000 }
  ]
}
