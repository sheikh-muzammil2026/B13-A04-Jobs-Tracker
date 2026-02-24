1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
উত্তর: 


ক) getElementById('id')

একটি নির্দিষ্ট id-এর এলিমেন্ট খুঁজে বের করে

উদাহরণ:

let el = document.getElementById('myDiv');


খ) getElementsByClassName('class')

যেকোনো এলিমেন্ট যেটার ঐ ক্লাস আছে তা খুঁজে বের করে

HTMLCollection রিটার্ন করে। (এক ধরনের array-like object)

উদাহরণ:

let items = document.getElementsByClassName('item');

গ) querySelector('selector')

CSS selector ব্যবহার করে প্রথম ম্যাচ করা এলিমেন্ট খুঁজে বের করে
উদাহরণ :

let el = document.querySelector('.item');

ঘ) querySelectorAll('selector')

CSS selector ব্যবহার করে সব ম্যাচ করা এলিমেন্ট খুঁজে বের করে

উদাহরণ:

let allItems = document.querySelectorAll('.item');

3. How do you create and insert a new element into the DOM?
উত্তর:

১: এলিমেন্ট তৈরি করা
let newDiv = document.createElement('div'); // div তৈরি 
newDiv.textContent = "আমি নতুন এলিমেন্ট"; // content যোগ করা 
newDiv.className = "my-class"; // class যোগ করা 

২: DOM-এ ইনসার্ট করা
let parent = document.getElementById('container'); // parent element ধরো 
parent.appendChild(newDiv); // নতুন div parent-এর শেষেই যোগ হবে 
parent.insertBefore(newDiv, parent.firstChild); // প্রথম child-এর আগে ঢোকানো 


5. What is Event Bubbling? And how does it work?
উত্তর:

Event Bubbling হলো DOM-এর ইভেন্ট হ্যান্ডলিং পদ্ধতি যেখানে ইভেন্ট child থেকে parent পর্যন্ত “bubbling” করে উপরে উঠে যায়।

উদাহরণ:
<div id="parent">   <button id="child">Click Me</button> </div>  document.getElementById('parent').addEventListener('click', () => {   alert('Parent clicked!'); });  document.getElementById('child').addEventListener('click', () => {   alert('Child clicked!'); }); 

যদি child button ক্লিক করা হয় তাহলে:
1. প্রথমে child click হ্যান্ডলার চলবে → "Child clicked!"
2. এরপর parent click হ্যান্ডলারও চলবে → "Parent clicked!"
কারণ: event “bubble” করে উপরে যায়।


7. What is Event Delegation in JavaScript? Why is it useful?
উত্তর:
Event Delegation হলো একটি parent element-এ ইভেন্ট হ্যান্ডলার বসিয়ে child element-এর ইভেন্ট handle করা।

উদাহরণ:
<ul id="list">   <li class="item">Item 1</li>   
  <li class="item">Item 2</li>   
  <li class="item">Item 3</li> 
</ul>  
document.getElementById('list').addEventListener('click', (e) => {   
if(e.target && e.target.classList.contains('item')){    
alert(e.target.textContent + " clicked!");   
} }); 

এর সুবিধা:
= নতুন এলিমেন্ট যোগ করলে আলাদা হ্যান্ডলার লাগবে না।
= কম মেমোরি ব্যবহার হয়।
= বড় list বা dynamic elements-এর জন্য খুবই efficient


9. What is the difference between preventDefault() and stopPropagation() methods?
উত্তর:

ক) preventDefault()

ব্রাউজারের default behavior বন্ধ করে
উদাহরণ:
<a href="https://google.com" id="link">Click</a>  
document.getElementById('link').addEventListener('click', (e)=>{ 
e.preventDefault(); 
alert('Link blocked'); 
});

খ) stopPropagation()

event bubbling/propagation বন্ধ করে
উদাহরণ:
button.addEventListener('click', (e)=>{ 
e.stopPropagation(); 
alert('Only button clicked');
});
