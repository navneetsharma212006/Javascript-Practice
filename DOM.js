/*
╔══════════════════════════════════════════════════════════════════════╗
║                 JAVASCRIPT — DOM COMPLETE GUIDE                    ║
║              Beginner → MERN Developer → Interview                ║
╚══════════════════════════════════════════════════════════════════════╝


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q1. What is DOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOM stands for:

Document Object Model


When the browser loads an HTML page, it converts the HTML into an
object-based TREE structure.

Example HTML:

<html>

    <body>

        <h1>Hello</h1>

        <button>Login</button>

    </body>

</html>


The browser creates something conceptually like:

Document
   |
   └── html
        |
        └── body
             |
             ├── h1
             |    |
             |    └── "Hello"
             |
             └── button
                  |
                  └── "Login"


This structure is called the DOM.


Simple definition:

DOM is the browser's object representation of an HTML document that
JavaScript can read and modify.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q2. Why does the browser create the DOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because JavaScript needs a way to interact with the webpage.

For example:

HTML:

<h1 id="title">
    Old Title
</h1>


JavaScript:

const title =
    document.querySelector("#title");

title.textContent = "New Title";


The browser updates the webpage:

Old Title

        ↓

New Title


So the basic idea is:

HTML
 ↓
Browser
 ↓
DOM
 ↓
JavaScript interacts with DOM
 ↓
Webpage changes


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q3. Is DOM the same thing as HTML?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

No.

HTML is the markup/source used to describe the webpage.

DOM is the browser-created object/tree representation of that document.


Think:

HTML
→ Source/structure


DOM
→ Live object representation in the browser


For example:

HTML:

<h1>Hello</h1>


The browser creates an object representing that h1 element.

JavaScript can then access that object:

const heading =
    document.querySelector("h1");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q4. Why is DOM called a "tree"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because elements have parent-child relationships.

Example:

<div>

    <h1>Products</h1>

    <button>Buy</button>

</div>


DOM:

div
 |
 ├── h1
 |
 └── button


The div is the parent.

The h1 and button are children.


This relationship is important when navigating the DOM.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q5. What is the Document object?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The browser provides a global object called:

document


It represents the current HTML document.


For example:

console.log(document);


You can use document to:

- find elements
- create elements
- modify elements
- listen for events
- access parts of the webpage


Examples:

document.querySelector()

document.querySelectorAll()

document.getElementById()

document.createElement()


So:

document

is one of the most important objects when working with the DOM.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q6. How does JavaScript find an element in the DOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important methods are:

document.querySelector()

document.querySelectorAll()

document.getElementById()


Example:

HTML:

<button id="loginButton">
    Login
</button>


JavaScript:

const button =
    document.querySelector("#loginButton");


Now:

button

contains the DOM element.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q7. What is querySelector()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

querySelector() finds the FIRST element matching a CSS selector.


Example:

<h1 class="title">
    Products
</h1>


JavaScript:

const title =
    document.querySelector(".title");


It returns that element.


Important:

querySelector()
→ first matching element


querySelectorAll()
→ all matching elements


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q8. What is querySelectorAll()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It finds ALL elements matching a CSS selector.


Example:

<button class="buy">Buy</button>
<button class="buy">Buy</button>
<button class="buy">Buy</button>


JavaScript:

const buttons =
    document.querySelectorAll(".buy");


It returns a NodeList containing all matching buttons.


You can loop:

buttons.forEach((button) => {

    console.log(button);

});


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q9. What is getElementById()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It finds an element by its ID.


HTML:

<input id="email">


JavaScript:

const input =
    document.getElementById("email");


Notice:

getElementById("email")


NOT:

getElementById("#email")


Because getElementById() expects the actual ID.

querySelector() uses CSS selector syntax:

querySelector("#email")


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q10. What can JavaScript do after getting a DOM element?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It can:

READ

CHANGE

CREATE

REMOVE

LISTEN


Example:

const title =
    document.querySelector("#title");


READ:

console.log(title.textContent);


CHANGE TEXT:

title.textContent = "Products";


CHANGE CLASS:

title.classList.add("active");


ADD EVENT:

title.addEventListener("click", handleClick);


So the DOM gives JavaScript control over the webpage.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q11. What is textContent?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

textContent gets or changes the text inside an element.


HTML:

<h1 id="title">
    Hello
</h1>


Read:

const title =
    document.querySelector("#title");

console.log(title.textContent);


Output:

Hello


Change:

title.textContent = "Welcome";


The page now displays:

Welcome


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q12. What is innerHTML?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

innerHTML gets or changes the HTML inside an element.


Example:

const container =
    document.querySelector("#container");


container.innerHTML =
    "<h2>Hello</h2>";


The browser creates an h2 inside the container.


Important security point:

Do NOT put untrusted user input directly into innerHTML.

For example, inserting unsanitized user-controlled HTML can create
XSS security vulnerabilities.

For normal text, prefer:

textContent


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q13. What is .value?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

.value is commonly used to read form input values.


HTML:

<input id="email">


JavaScript:

const email =
    document.querySelector("#email");


console.log(email.value);


If the user enters:

navneet@gmail.com


Then:

email.value


contains:

"navneet@gmail.com"


This is extremely common in forms.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q14. REAL INDUSTRY USE CASE — LOGIN FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine a login page:

<form id="loginForm">

    <input
        id="email"
        type="email"
    >

    <input
        id="password"
        type="password"
    >

    <button type="submit">
        Login
    </button>

</form>


JavaScript:

const form =
    document.querySelector("#loginForm");

const emailInput =
    document.querySelector("#email");

const passwordInput =
    document.querySelector("#password");


form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email =
        emailInput.value;

    const password =
        passwordInput.value;

    console.log(email);
    console.log(password);

});


The real application would then send the data to a backend:

Frontend
   ↓
fetch()
   ↓
Express API
   ↓
Authentication logic
   ↓
Database
   ↓
Response
   ↓
Frontend
   ↓
DOM/UI update


This is the basic idea behind interactive web applications.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q15. What are events in the DOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An event is something that happens in the browser.

Examples:

click
input
submit
change
keydown
keyup
mouseenter
load


For example:

User clicks button.

Browser creates a click event.

JavaScript can listen for it.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q16. What is addEventListener()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It allows JavaScript to listen for an event.


Example:

const button =
    document.querySelector("#buyButton");


button.addEventListener("click", () => {

    console.log("Product added");

});


Flow:

User clicks
    ↓
Browser detects click
    ↓
Event listener runs
    ↓
Callback executes
    ↓
Application logic runs


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q17. What is event.target?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

event.target tells you the element where the event originated.


Example:

button.addEventListener("click", (event) => {

    console.log(event.target);

});


If the user clicked that button:

event.target

refers to the clicked element.


This is especially useful with event delegation.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q18. What is classList?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

classList allows JavaScript to work with CSS classes.


Example:

const button =
    document.querySelector(".button");


Add class:

button.classList.add("active");


Remove:

button.classList.remove("active");


Toggle:

button.classList.toggle("active");


Check:

button.classList.contains("active");


This is commonly used for:

- menus
- modals
- dark mode
- active tabs
- loading states
- showing/hiding UI


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q19. How do you create a new DOM element?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

document.createElement()


Example:

const button =
    document.createElement("button");


Then:

button.textContent = "Buy";


Now append it:

document.body.append(button);


The new button appears on the webpage.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q20. How do you remove an element?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example:

const message =
    document.querySelector("#message");


message.remove();


The element is removed from the DOM.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q21. What is append()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

append() adds content/elements inside another element.


Example:

const container =
    document.querySelector("#products");

const product =
    document.createElement("div");


product.textContent = "Laptop";


container.append(product);


DOM:

container
   |
   └── div
       |
       └── Laptop


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q22. What is parent-child relationship in DOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HTML:

<div class="product">

    <h2>Laptop</h2>

</div>


Here:

div
→ parent


h2
→ child


JavaScript:

const title =
    document.querySelector("h2");


To get the parent:

title.parentElement;


To get children:

const product =
    document.querySelector(".product");

console.log(product.children);


Understanding parent-child relationships helps you navigate the DOM.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q23. What is event bubbling?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

<div class="card">

    <button>Buy</button>

</div>


When the button is clicked, the event can propagate upward:

button
  ↓
card
  ↓
body
  ↓
document


This is called event bubbling.


You don't need to memorize the entire event propagation system yet.

Just understand:

An event can move from the target toward its ancestors.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q24. What is event delegation?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Event delegation means:

Instead of adding an event listener to every child,
we add one listener to their common parent.


Example:

<div id="products">

    <button data-id="101">
        Laptop
    </button>

    <button data-id="102">
        Phone
    </button>

    <button data-id="103">
        Mouse
    </button>

</div>


Instead of:

button1.addEventListener(...)

button2.addEventListener(...)

button3.addEventListener(...)


We can do:

const products =
    document.querySelector("#products");


products.addEventListener("click", (event) => {

    if (event.target.matches("button")) {

        console.log(
            event.target.dataset.id
        );

    }

});


One parent listener handles clicks from many buttons.


This can be useful for large dynamic lists.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q25. What are data-* attributes?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

They allow custom data to be stored on HTML elements.


Example:

<button data-product-id="101">
    Add to Cart
</button>


JavaScript:

const button =
    document.querySelector("button");


console.log(button.dataset.productId);


Output:

101


Common examples:

data-product-id

data-user-id

data-order-id


These are useful when working with dynamic UI elements.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q26. What is DOMContentLoaded?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is an event that fires when the HTML document has been parsed.


Example:

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const button =
            document.querySelector("#button");

    }
);


Why?

Because JavaScript may otherwise try to access elements before they
exist in the DOM.


Modern script loading with:

<script src="script.js" defer></script>

often removes the need for manually waiting for DOMContentLoaded
for normal scripts.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q27. What is the difference between DOM and BOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOM:

Deals mainly with the webpage/document.


Examples:

document
elements
HTML
DOM events


BOM:

Browser Object Model.

Deals with browser-level features.


Examples:

window
location
history
navigator


Simple:

DOM
→ webpage


BOM
→ browser


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q28. What is window?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

window represents the browser window/global browser environment.


Examples:

window.alert()

window.location

window.history

window.localStorage


The document is available through:

window.document


In browser JavaScript:

document

is effectively available as a global reference to:

window.document


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q29. Is localStorage part of the DOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not technically.

localStorage belongs to the Web Storage API.


Example:

localStorage.setItem(
    "theme",
    "dark"
);


Then:

const theme =
    localStorage.getItem("theme");


It is commonly used alongside DOM/UI logic, but it is not itself a
DOM API.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q30. REAL INDUSTRY USE CASE — DARK MODE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

<button id="themeButton">
    Dark Mode
</button>


JavaScript:

const button =
    document.querySelector("#themeButton");


button.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


CSS:

.dark {
    background: black;
    color: white;
}


Flow:

User clicks
    ↓
Event listener
    ↓
classList.toggle()
    ↓
DOM class changes
    ↓
CSS applies
    ↓
User sees dark mode


This is a simple example of DOM manipulation.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q31. What is imperative DOM manipulation?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imperative means:

You explicitly tell JavaScript what to do.


Example:

const title =
    document.querySelector("#title");


title.textContent = "Products";

title.classList.add("active");


You are directly instructing the DOM:

"Find this element."

"Change its text."

"Add this class."


This is imperative programming.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q32. How is React different?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React encourages a declarative approach.


Instead of manually doing:

const title =
    document.querySelector("#title");

title.textContent = "Products";


You normally write:

function App() {

    const [title, setTitle] =
        useState("Products");

    return (
        <h1>{title}</h1>
    );

}


Then:

setTitle("New Products");


React determines the necessary UI updates.


Simple comparison:

Vanilla JS:

YOU → directly manipulate DOM


React:

YOU → update state/props


REACT → updates DOM


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q33. Does React use the DOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Yes.

React ultimately renders your application to the browser's DOM.

The important difference is that React manages updates through its
rendering/reconciliation system rather than requiring you to manually
change DOM nodes for normal UI updates.


So:

React
 ↓
React rendering/reconciliation
 ↓
DOM
 ↓
Browser
 ↓
Screen


You don't normally need to manually manipulate the DOM for every
change.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q34. Why shouldn't I use querySelector() everywhere in React?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because React already manages the UI.

For example, avoid doing this for normal React state:

document.querySelector("#count").textContent = count;


Instead:

const [count, setCount] =
    useState(0);


Then:

<h1>{count}</h1>


When:

setCount(10);


React updates the UI.


This makes the component easier to reason about.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q35. What should I use in React when I genuinely need a DOM element?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

useRef()


Example:

const inputRef =
    useRef(null);


<input ref={inputRef} />


Then:

inputRef.current.focus();


This is useful for:

- focusing inputs
- scrolling
- measuring elements
- controlling video/audio
- integrating certain third-party libraries
- other imperative DOM operations


So remember:

Vanilla JS
→ querySelector()


React
→ usually state/props


React direct DOM access
→ useRef()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q36. REAL MERN FLOW — How does DOM fit into a MERN application?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have:

Add to Cart button


The user clicks it.

The overall flow is:

USER
 ↓
Clicks button
 ↓
Browser event
 ↓
React event handler
 ↓
Application logic
 ↓
API request
 ↓
Express backend
 ↓
MongoDB
 ↓
Response
 ↓
React state update
 ↓
React re-render
 ↓
DOM update
 ↓
Browser displays new UI


For example:

User clicks:

"Add to Cart"


React:

handleAddToCart(product)


Frontend sends:

POST /api/cart


Express receives request.


Backend updates MongoDB.


Backend sends response.


React updates:

cartItems


React renders the new cart count.


Browser updates the DOM.


User sees:

Cart (3)


This is how the DOM fits into the complete MERN architecture.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q37. What DOM concepts are actually important for a MERN developer?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You should know these WELL:

1. DOM meaning

2. DOM tree

3. document

4. Element

5. querySelector()

6. querySelectorAll()

7. getElementById()

8. textContent

9. innerHTML

10. value

11. classList

12. createElement()

13. append()

14. remove()

15. addEventListener()

16. event object

17. event.target

18. event bubbling

19. event delegation

20. data-* attributes

21. DOMContentLoaded/script timing

22. DOM vs BOM

23. DOM vs React

24. useRef()


You don't need to memorize hundreds of DOM APIs.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                       INTERVIEW QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q38. What does DOM stand for?

ANSWER:

Document Object Model.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q39. What is the DOM?

ANSWER:

The DOM is the browser's object-based tree representation of an HTML
document that JavaScript can read and modify.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q40. Why is DOM called a tree?

ANSWER:

Because HTML elements have hierarchical parent-child relationships.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q41. What is the document object?

ANSWER:

It represents the current HTML document and provides methods for
accessing and manipulating the DOM.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q42. What does querySelector() return?

ANSWER:

The first element matching the specified CSS selector, or null if
no element matches.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q43. What does querySelectorAll() return?

ANSWER:

A NodeList containing all elements matching the selector.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q44. What is the difference between HTML and DOM?

ANSWER:

HTML is the markup/source.

DOM is the browser-created object representation of that document.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q45. What is event bubbling?

ANSWER:

It is the propagation of an event from the target element toward
its ancestor elements.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q46. What is event delegation?

ANSWER:

Using a parent element's event listener to handle events originating
from its child elements.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q47. What is event.target?

ANSWER:

It identifies the element where the event originated.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q48. What is the difference between DOM and BOM?

ANSWER:

DOM
→ represents/manages the webpage document.


BOM
→ provides browser-level objects such as window, location, history,
and navigator.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q49. Should a React developer directly manipulate the DOM frequently?

ANSWER:

No.

React normally manages UI through state, props, and components.

For genuine imperative DOM access, useRef() is generally preferred.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q50. Does React completely avoid the DOM?

ANSWER:

No.

React ultimately renders to the DOM in a browser.

It manages UI updates rather than requiring developers to manually
modify DOM elements for normal application state changes.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      PRACTICE QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q51. Select this element:

<h1 id="title">
    Hello
</h1>


ANSWER:

const title =
    document.querySelector("#title");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q52. Change the text to "Products".

ANSWER:

title.textContent = "Products";


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q53. Select all elements having class "product".

ANSWER:

const products =
    document.querySelectorAll(".product");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q54. Get the value of this input:

<input id="email">


ANSWER:

const email =
    document.querySelector("#email");

console.log(email.value);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q55. Add a click event to this button:

<button id="buyButton">
    Buy
</button>


ANSWER:

const button =
    document.querySelector("#buyButton");

button.addEventListener("click", () => {

    console.log("Buy clicked");

});


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q56. Add an "active" class.

ANSWER:

button.classList.add("active");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q57. Remove the "active" class.

ANSWER:

button.classList.remove("active");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q58. Toggle the "active" class.

ANSWER:

button.classList.toggle("active");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q59. Create a new paragraph and add it to the body.

ANSWER:

const paragraph =
    document.createElement("p");

paragraph.textContent =
    "Hello World";

document.body.append(paragraph);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q60. Remove an element.

ANSWER:

const element =
    document.querySelector(".message");

element.remove();


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q61. FINAL PRACTICE — TODO APPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HTML:

<input id="todoInput">

<button id="addButton">
    Add
</button>

<ul id="todoList"></ul>


Task:

1. Select the input.
2. Select the button.
3. Select the list.
4. Add a click event.
5. Read input value.
6. Create a new li.
7. Put the todo text inside it.
8. Add it to the list.


ANSWER:

const input =
    document.querySelector("#todoInput");

const button =
    document.querySelector("#addButton");

const list =
    document.querySelector("#todoList");


button.addEventListener("click", () => {

    const text =
        input.value;

    const item =
        document.createElement("li");

    item.textContent = text;

    list.append(item);

    input.value = "";

});


This small project uses:

querySelector()
+
addEventListener()
+
.value
+
createElement()
+
textContent
+
append()


These are some of the most important DOM fundamentals.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    FINAL MENTAL MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         HTML
                           ↓
                     BROWSER PARSES
                           ↓
                         DOM
                           ↓
                  JavaScript accesses it
                           ↓
              ┌────────────┼────────────┐
              ↓            ↓            ↓
            FIND         CHANGE       LISTEN
              ↓            ↓            ↓
       querySelector   textContent   addEventListener
       getElementById  classList
       querySelectorAll value
              ↓            ↓            ↓
              └────────────┼────────────┘
                           ↓
                     WEBPAGE CHANGES


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                       MERN MENTAL MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                      USER
                        ↓
                 React component
                        ↓
                      Event
                        ↓
                  Event handler
                        ↓
                    API call
                        ↓
                     Express
                        ↓
                    MongoDB
                        ↓
                    Response
                        ↓
                  React state
                        ↓
                  React rendering
                        ↓
                       DOM
                        ↓
                     SCREEN


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                     WHAT TO FOCUS ON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For your MERN journey, don't try to memorize every DOM method.

Master these:

DOM
 ↓
document
 ↓
querySelector()
 ↓
querySelectorAll()
 ↓
getElementById()
 ↓
textContent
 ↓
value
 ↓
classList
 ↓
addEventListener()
 ↓
event.target
 ↓
event bubbling
 ↓
event delegation
 ↓
createElement()
 ↓
append()
 ↓
remove()
 ↓
React state vs DOM
 ↓
useRef()


Once these are clear, you have enough DOM knowledge to move forward
strongly into React.

The important thing is not:

"How many DOM methods can I memorize?"

The important thing is:

"How does JavaScript interact with the webpage?"

That is the DOM concept you actually need as a MERN developer.

*/