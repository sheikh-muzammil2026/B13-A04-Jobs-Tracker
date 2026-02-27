## 1️⃣ Difference Between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

| Method | Selects | Returns | Notes |
|--------|--------|--------|------|
| `getElementById()` | ID | Single Element | Fast and specific |
| `getElementsByClassName()` | Class | HTMLCollection | Live collection |
| `querySelector()` | CSS selector | First matching element | Flexible |
| `querySelectorAll()` | CSS selector | NodeList | Static collection |

### ✅ Example

document.getElementById("title");
document.getElementsByClassName("card");
document.querySelector(".card");
document.querySelectorAll(".card");

## 2️⃣ How to Create and Insert a New Element into the DOM
✅ Steps
Create element
Add content or class
Insert into DOM
### ✅ Example
// 1. Create element
const newDiv = document.createElement("div");

// 2. Add content
newDiv.textContent = "Hello World";
newDiv.classList.add("box");

// 3. Insert into DOM
document.body.appendChild(newDiv);


## 3️⃣ What is Event Bubbling? How does it work?
Event Bubbling means an event starts from the target element and bubbles up to its parent elements.
### ✅ Example

HTML
<div id="parent">
  <button id="child">Click Me</button>
</div>

js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

###🔎 Output when button is clicked:
Copy code

Child clicked
Parent clicked
###👉 Event first triggers on child, then bubbles to parent.

##4️⃣ What is Event Delegation? Why is it useful?
Event Delegation is a technique where you attach an event listener to a parent element instead of multiple child elements.
### ✅ Why Useful?
Improves performance
Works for dynamically added elements
Less code
### ✅ Example
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Item clicked:", e.target.textContent);
  }
});


5️⃣ Difference Between preventDefault() and stopPropagation()
Method: preventDefault()
What it does: Stops default browser behavior

Method: preventDefault()
What it does:Stops event from bubbling up

### ✅ Example
```Html
Copy code
<a href="https://google.com" id="link">Go to Google</a>
```Js
Copy code
document.getElementById("link").addEventListener("click", function(e) {
  e.preventDefault();      // stops link navigation
  e.stopPropagation();     // stops bubbling
  console.log("Link clicked");
});

