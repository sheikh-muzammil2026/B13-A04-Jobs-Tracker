

**উত্তর:**
```javascript




## 1️⃣ Difference Between `getElementById`, `getElementsByClassName`, `querySelector` / `querySelectorAll`

### 🅰 getElementById('id')
একটি নির্দিষ্ট ID-এর এলিমেন্ট খুঁজে বের করে।  

**উদাহরণ:**
```javascript
let el = document.getElementById('myDiv');

🅱 getElementsByClassName('class')

যেকোনো এলিমেন্ট যেটার ঐ ক্লাস আছে তা খুঁজে বের করে।
ফলাফল: HTMLCollection (array-like object)

উদাহরণ:

let items = document.getElementsByClassName('item');

🅲 querySelector('selector')

CSS selector ব্যবহার করে প্রথম ম্যাচ করা এলিমেন্ট খুঁজে বের করে।

উদাহরণ:

let el = document.querySelector('.item');

🅳 querySelectorAll('selector')

CSS selector ব্যবহার করে সব ম্যাচ করা এলিমেন্ট খুঁজে বের করে।
ফলাফল: NodeList

উদাহরণ:

let allItems = document.querySelectorAll('.item');


---

2️⃣ How do you create and insert a new element into the DOM?

Step 1: Create Element

let newDiv = document.createElement('div'); // div তৈরি
newDiv.textContent = "আমি নতুন এলিমেন্ট"; // content যোগ করা
newDiv.className = "my-class"; // class যোগ করা

Step 2: Insert into DOM

let parent = document.getElementById('container'); // parent element
parent.appendChild(newDiv); // শেষ child হিসেবে যোগ
parent.insertBefore(newDiv, parent.firstChild); // প্রথম child-এর আগে যোগ


---

3️⃣ What is Event Bubbling? And how does it work?

Event Bubbling হলো DOM-এর ইভেন্ট হ্যান্ডলিং পদ্ধতি যেখানে ইভেন্ট child → parent পর্যন্ত উপরে যায়।

উদাহরণ HTML:

<div id="parent">
  <button id="child">Click Me</button>
</div>

উদাহরণ JavaScript:

document.getElementById('parent').addEventListener('click', () => {
  alert('Parent clicked!');
});

document.getElementById('child').addEventListener('click', () => {
  alert('Child clicked!');
});

ক্লিক করলে ফলাফল:

1. Child click → "Child clicked!"


2. Parent click → "Parent clicked!"
কারণ ইভেন্ট উপরে bubble করে।




---

4️⃣ What is Event Delegation in JavaScript? Why is it useful?

Event Delegation হলো একটি parent element-এ ইভেন্ট হ্যান্ডলার বসিয়ে child element-এর ইভেন্ট handle করা।

উদাহরণ HTML:

<ul id="list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>

উদাহরণ JavaScript:

document.getElementById('list').addEventListener('click', (e) => {
  if(e.target && e.target.classList.contains('item')){
    alert(e.target.textContent + " clicked!");
  }
});

সুবিধা:

নতুন এলিমেন্ট যোগ করলে আলাদা হ্যান্ডলার লাগবে না।

কম মেমোরি ব্যবহার হয়।

বড় list বা dynamic elements-এর জন্য efficient।



---

5️⃣ What is the difference between preventDefault() and stopPropagation() methods?

🅰 preventDefault()

ব্রাউজারের default behavior বন্ধ করে।

উদাহরণ:

<a href="https://google.com" id="link">Click</a>

document.getElementById('link').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Link blocked');
});

🅱 stopPropagation()

Event bubbling / propagation বন্ধ করে।

উদাহরণ:

button.addEventListener('click', (e) => {
  e.stopPropagation();
  alert('Only button clicked');
});

