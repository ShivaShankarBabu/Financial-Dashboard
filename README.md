# 💰 Finance Dashboard UI

## 📖 Overview
This project is a frontend finance dashboard UI built by me to demonstrate frontend development skills.  
It allows users to track financial activities, view transactions, and understand spending patterns through visualizations.

---

## 🚀 Features Implemented

### 📊 Dashboard Overview
- Summary cards:
  - Total Balance
  - Income
  - Expenses
- Line chart for balance trend (dynamic)
- Pie chart for spending breakdown (dynamic)

---

### 📋 Transactions Section
- Displays:
  - Date
  - Amount
  - Category
  - Type (Income/Expense)

**Features:**
- 🔍 Search by category
- 🔽 Filter (Income / Expense)
- ➕ Add transactions (Admin only)
- Dynamic updates with real-time UI changes

---

### 👤 Role-Based UI
- **Viewer**
  - Can only view data
- **Admin**
  - Can add transactions using a form

---

### 💡 Insights Section
- Total expenses calculation
- Highest spending category
- Total number of transactions

---

### ⚙️ State Management
- React `useState` + props
- Data lifted to parent (Dashboard component)
- LocalStorage used for data persistence

---

## 🎨 UI/UX Design
- Clean and minimal design
- Responsive layout (mobile + desktop)
- Handles empty data gracefully
- Simple and intuitive user experience

---

## 🛠️ Tech Stack
- React (Vite)
- Tailwind CSS
- Recharts (for charts)
- LocalStorage

---

## ▶️ How to Run

```bash
npm install
npm run dev