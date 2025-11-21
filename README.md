# Tax Calculator (GCT) Web Application

A simple, interactive Tax Calculator that allows users to add multiple items, input names and prices, and calculate Subtotal, GCT, and Total. This project demonstrates DOM manipulation, event handling, and basic form validation using  JavaScript.

<div display="flex"; align="center">
  <img src="./images/without-item.png" alt="Pic 1" style="width:300px; height:300px;" />

  <img src="./images/with-item.png" alt="Pic 2" style="width:300px; height:300px; object-fit: cover;" />
</div> 

---
## 🚀 Features
- Add multiple input fields 
- Remove input fields as needed
- Input validation
- Automatic calculation of:
    - Subtotal
    - GCT (16.5%)
    - Total
- Reset functionality to clear all fields
- Error handling for invalid input

---
## 🛠️ Tech Stack
- HTML5
- CSS3
- JavaScript   

**No external libraries or frameworks are required.**

---
## 📂 Project Structure
```
├── index.html 
├── scripts
│ ├── site.js
├── styles
│ ├── styles.css
└── README.md 
```

---
## ✅ How It Works
1. User enters an item name and price.   
2. Additional fields can be added using the Add button.
3. Fields can be removed using the Remove button.
4. Clicking Calculate will display:   
    - Subtotal          
    - GCT (16.5%)   
    - Total amount
5. Reset clears all fields and returns to the default state.

---
## 🧠 Input Validation Rules

#### Price Field  
- Must be numeric
- Displays error if input is not a number

#### Name Field
- Must contain letters only
- Must be at least 3 characters
- Displays relevant error messages for invalid input

---

## ⚡ Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tax-calculator.git
2. Navigate to the project folder:   
    ```bash
    cd tax-calculator
3. Open index.html in your browser.