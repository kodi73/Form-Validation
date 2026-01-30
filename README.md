# Form Validation with JavaScript

This is a client-side form validation project built using **HTML, CSS and vanilla JavaScript**. It follows best practices and leverages the **Constraint Validation API**.

This project demonstrates live inline validation, custom error messaging and polished user interface.

---

## Project Overview

The goal of this project is to **implement robust client-side form validation**. 

The form validates user input in real time and provides clear, accessible feedback before allowing submission.

---

## Validation Rules

| Field             | Rules                                                     |
| ----------------- | --------------------------------------------------------- |
| Email             | Required, valid email format                              |
| Country           | Required, non-empty                                       |
| Zip / Postal Code | 4–10 characters, alphanumeric, spaces and hyphens allowed |
| Password          | Minimum 8 characters, at least one letter and one number  |
| Confirm Password  | Must exactly match password                               |

---

## Project Struncture 

```css
form-validation/
├── index.html
├── style.css
└── script.js
```

## How to run locally

1. Clone the repository:

    ```bash
    git clone https://github.com/kodi73/Form-Validation.git
    ```

2. Open `index.html` in your browser.

---

## Learning Outcomes

Through this project, I practiced:

- Using the Constraint Validation API effectively

- Implementing cross-field validation

- Designing accessible, user-friendly forms

- Separating structure, style, and behavior cleanly

- Building production-style client-side validation logic

---

## Assignment Source

This project is based on the following lesson from The Odin Project:

- Form Validation with JavaScript

---