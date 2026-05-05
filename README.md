# 🛒 E-commerce Order Tracker Dashboard

A simple **full-stack ready frontend dashboard** built using Next.js that displays order data with summary insights.
Currently, it uses a public API for development and simulates backend logic, making it easy to switch to a real API later.

---

## 🚀 Live Demo

👉 https://e-commerce-order-tracker-app.vercel.app/

---

## 📦 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Data Source:** DummyJSON API (for development)

---

## 🧠 Project Overview

This project is part of a full-stack assessment where:

* Backend (Google Apps Script) will act as an API
* Frontend (Next.js) consumes the API and displays data

👉 Currently, backend is simulated on the frontend for faster development.

---

## 🔄 Data Flow

```text
DummyJSON API → Data Transformation → UI Dashboard
```

👉 Later:

```text
Google Apps Script API → UI Dashboard
```

---

## ⚙️ Features

### ✅ Summary Cards

* Total Orders
* Average Order Value
* Shipped Orders

### ✅ Orders Table

* Displays all orders
* Includes:

  * Product Title
  * Price
  * Shipping Cost
  * Order Status
  * Total Cost

### ✅ Search Functionality

* Search orders by product title

### ✅ Sorting

* Sort by price (ascending/descending)

### ✅ UI States

* Loading state
* Error state
* Empty state

---

## 🔁 Data Transformation Logic

Since backend is not yet integrated, transformation is handled on frontend:

* **Shipping Cost**

  ```
  price > 100 ? 10 : 5
  ```

* **Order Status**

  ```
  id % 3 === 0 → Shipped  
  id % 3 === 1 → Processing  
  else → Pending  
  ```

* **Total Cost**

  ```
  totalCost = price + shippingCost
  ```

---

## 📊 Summary Calculations

* **Total Orders** → Total number of items
* **Average Order Value** → Average of totalCost
* **Shipped Orders** → Count where status = "Shipped"

---

## 🔐 API Integration (Future Ready)

When backend (Google Apps Script) is ready:

```ts
fetch("YOUR_GAS_API_URL", {
  method: "POST",
  body: JSON.stringify({
    accessToken: "secureToken"
  })
});
```

---

## 📁 Project Structure

```
/app
  /dashboard
    page.tsx
/components
  SummaryCard.tsx
  OrdersTable.tsx
/lib
  api.ts
/types
  order.ts
```

---

## 🛠️ Getting Started

```bash
git clone <your-repo-link>
cd order-tracker
npm install
npm run dev
```

👉 Open: http://localhost:3000

---

## ⚖️ Key Decisions

* Used **component-based architecture** for reusability
* Kept **data layer separate** (`/lib/api.ts`)
* Simulated backend logic on frontend for flexibility
* Focused on **clean UI and functionality over heavy styling**

---

## 🔄 Trade-offs

* Data transformation is currently on frontend (temporary)
* No pagination implemented (API size is small)
* Basic sorting implemented (can be extended)

---

## 📌 Assumptions

* Each product is treated as an order
* Static shipping rules are applied
* No authentication system beyond accessToken

---

## 🤖 Use of LLM

Yes, LLM was used to:

* Structure the project
* Optimize transformation logic
* Improve code readability

All logic and implementation were understood and validated before usage.


---

## 📬 Submission Details

* GitHub Repo: https://github.com/Dev-Mahi-7/e-commerce-order-tracker-app
* Live Demo: https://e-commerce-order-tracker-app.vercel.app/


---

## 🙌 Final Notes

This project focuses on:

* Clean architecture
* Data transformation
* API readiness
* Real-world frontend patterns

---

**Made with ❤️ using Next.js**
