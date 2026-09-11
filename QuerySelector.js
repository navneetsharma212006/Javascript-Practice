/*
╔══════════════════════════════════════════════════════════════════════╗
║              JAVASCRIPT — querySelector() COMPLETE GUIDE           ║
║                    Beginner → MERN Developer                       ║
╚══════════════════════════════════════════════════════════════════════╝


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q1. What is querySelector()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

querySelector() is a JavaScript DOM method used to find an HTML element
using a CSS selector.

Syntax:

document.querySelector("CSS selector");


Example:

<h1 id="title">Welcome</h1>

<script>

const title = document.querySelector("#title");

console.log(title);

</script>


Output:

<h1 id="title">Welcome</h1>


Simple meaning:

"Find the first HTML element that matches this selector."


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q2. Why do we need querySelector()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

JavaScript needs a way to find HTML elements so that we can:

- change text
- change styles
- read values
- add event listeners
- show/hide elements
- modify classes
- respond to user actions


Example:

<button class="login-btn">Login</button>


const button = document.querySelector(".login-btn");

button.addEventListener("click", () => {
    console.log("Login clicked");
});


Here:

HTML
 ↓
querySelector()
 ↓
JavaScript finds the button
 ↓
JavaScript adds functionality


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q3. Why is it called querySelector?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because you give it a CSS selector.

For example:

ID:

document.querySelector("#title");


Class:

document.querySelector(".card");


Tag:

document.querySelector("button");


Attribute:

document.querySelector("[data-product-id]");


So remember:

querySelector() = "Find an element using a CSS selector."


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q4. How do I select an element by ID?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HTML:

<h1 id="title">Hello</h1>


JavaScript:

const title = document.querySelector("#title");


Important:

HTML:

id="title"


CSS selector:

#title


The # is required because you are using a CSS ID selector.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q5. How do I select an element by class?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HTML:

<button class="login-btn">Login</button>


JavaScript:

const button = document.querySelector(".login-btn");


Notice:

class="login-btn"

becomes:

.login-btn


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q6. How do I select an element by tag?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HTML:

<button>Login</button>


JavaScript:

const button = document.querySelector("button");


No #.

No .

Just:

"button"


It searches for the first <button> element.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q7. What does "first matching element" mean?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:

<button class="buy-btn">Buy 1</button>
<button class="buy-btn">Buy 2</button>
<button class="buy-btn">Buy 3</button>


Now:

const button = document.querySelector(".buy-btn");


Only the FIRST button is returned.

It does NOT return all three.


This is one of the most important things to remember.


querySelector()
        ↓
first matching element


querySelectorAll()
        ↓
all matching elements


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q8. What happens if no element is found?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It returns:

null


Example:

const button = document.querySelector("#login");


If #login doesn't exist:

console.log(button);

Output:

null


This is important because this can cause an error:

const button = document.querySelector("#login");

button.addEventListener("click", handleLogin);


If button is null:

TypeError


Safer:

const button = document.querySelector("#login");

if (button) {
    button.addEventListener("click", handleLogin);
}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q9. What is a very common beginner mistake?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Wrong:

const button = document.querySelector("login");


If you have:

<button id="login">Login</button>


Correct:

const button = document.querySelector("#login");


Because:

id → #

class → .

tag → nothing


Remember:

# → ID

. → class

nothing → tag


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q10. Can querySelector() select multiple classes?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Yes.

HTML:

<button class="btn active">
    Buy
</button>


JavaScript:

const button = document.querySelector(".btn.active");


This means:

Find an element that has BOTH:

btn

AND

active


Important:

.btn.active

means:

same element has both classes.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q11. What is the difference between ".card.active" and ".card .active"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is VERY important CSS selector knowledge.

1. ".card.active"

Means:

Same element has both classes.


Example:

<div class="card active"></div>


Correct match.


2. ".card .active"

There is a SPACE.

It means:

Find an element with class "active"
INSIDE an element with class "card".


Example:

<div class="card">

    <button class="active">
        Buy
    </button>

</div>


So:

.card.active

= same element


.card .active

= child/descendant element


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q12. Can querySelector() select elements inside another element?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Yes.

HTML:

<div class="product">

    <h2 class="product-title">
        iPhone
    </h2>

</div>


JavaScript:

const title = document.querySelector(".product .product-title");


This means:

Find .product-title
inside .product.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q13. Can querySelector() use attribute selectors?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Yes.

This is very useful for dynamic applications.

HTML:

<button data-product-id="101">
    Add to Cart
</button>


JavaScript:

const button =
    document.querySelector("[data-product-id]");


This finds an element containing:

data-product-id


You can also select a specific value:

const button =
    document.querySelector('[data-product-id="101"]');


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q14. Why are data-* attributes useful in real applications?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose an e-commerce website displays products:

<button data-product-id="101">
    Add to Cart
</button>

<button data-product-id="102">
    Add to Cart
</button>


The frontend needs to know:

"Which product did the user click?"


data-product-id allows us to store that identifier in the HTML.


Example:

const button =
    document.querySelector('[data-product-id="101"]');


In modern React applications, you will often see:

data-product-id

data-user-id

data-order-id

etc.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q15. Can querySelector() select an input?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Yes.

HTML:

<input
    id="email"
    type="email"
>


JavaScript:

const emailInput =
    document.querySelector("#email");


To get the user's entered value:

console.log(emailInput.value);


Example:

const emailInput =
    document.querySelector("#email");

console.log(emailInput.value);


If user enters:

navneet@gmail.com


Output:

navneet@gmail.com


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q16. REAL INDUSTRY USE CASE — Login Form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine a simple login page:

<form id="loginForm">

    <input
        id="email"
        type="email"
    >

    <input
        id="password"
        type="password"
    >

    <button id="loginButton">
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

const button =
    document.querySelector("#loginButton");


Now JavaScript can interact with the UI.


Example:

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    console.log(email);
    console.log(password);

});


Real application flow:

User enters email/password
        ↓
querySelector() finds inputs
        ↓
JavaScript reads .value
        ↓
fetch()
        ↓
Express backend
        ↓
Database
        ↓
Response
        ↓
Frontend updates UI


This is the basic foundation behind many web applications.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q17. Can querySelector() select a button?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Yes.

HTML:

<button class="submit-btn">
    Submit
</button>


JavaScript:

const button =
    document.querySelector(".submit-btn");


Then:

button.addEventListener("click", () => {

    console.log("Submitted");

});


This connects the HTML element to JavaScript behavior.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q18. Can querySelector() select an element based on multiple conditions?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Yes.

Example:

<button
    class="btn active"
    data-role="admin"
>
    Delete
</button>


You can write:

const button =
    document.querySelector(
        '.btn.active[data-role="admin"]'
    );


This means:

Find an element that:

- has class btn
- has class active
- has data-role="admin"


You don't need this every day, but you should understand the concept.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q19. What is the difference between querySelector() and getElementById()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

getElementById():

document.getElementById("loginButton");


querySelector():

document.querySelector("#loginButton");


Both can find an element by ID.


Main difference:

getElementById()
→ specifically designed for IDs


querySelector()
→ supports CSS selectors


For example:

document.querySelector(".login-button");


getElementById() cannot do this.


Industry understanding:

If you specifically need an ID:

getElementById()

is perfectly fine.


If you need flexible CSS selectors:

querySelector()

is very useful.


The performance difference is usually not important for normal application code.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q20. What is the difference between querySelector() and querySelectorAll()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is VERY important.

querySelector():

Returns FIRST matching element.


querySelectorAll():

Returns ALL matching elements.


Example:

<button class="buy">Buy 1</button>
<button class="buy">Buy 2</button>
<button class="buy">Buy 3</button>


querySelector():

const button =
    document.querySelector(".buy");


Returns:

Buy 1


querySelectorAll():

const buttons =
    document.querySelectorAll(".buy");


Returns all three.


Remember:

querySelector
→ ONE


querySelectorAll
→ ALL


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q21. Is querySelectorAll() an Array?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

No.

It returns a NodeList.

Example:

const buttons =
    document.querySelectorAll(".buy");


buttons is a:

NodeList


It can be looped over:

buttons.forEach((button) => {

    console.log(button);

});


This distinction is useful when working with DOM code.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q22. Can querySelector() be used on an element instead of document?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Yes.

This is an important concept.

Example:

const product =
    document.querySelector(".product");


Now:

const title =
    product.querySelector(".title");


This means:

Search for .title
ONLY INSIDE this product element.


This is called scoped selection.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q23. Why is scoped selection useful?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine an e-commerce page:

<div class="product">

    <h2 class="title">Laptop</h2>

</div>

<div class="product">

    <h2 class="title">Phone</h2>

</div>


If you do:

document.querySelector(".title");


You get:

Laptop


because it returns the first matching element.


But if you already have the second product:

const products =
    document.querySelectorAll(".product");

const secondProduct =
    products[1];

const title =
    secondProduct.querySelector(".title");


Now you get:

Phone


This becomes useful when dealing with repeated UI components.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q24. What does querySelector() return?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It returns:

Element

OR

null


Example:

const button =
    document.querySelector(".buy");


If found:

Element


If not found:

null


This is important for error handling.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q25. What can we do after selecting an element?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A LOT.

After:

const title =
    document.querySelector("#title");


You can:

READ:

title.textContent


CHANGE TEXT:

title.textContent = "Products";


CHANGE CLASS:

title.classList.add("active");


REMOVE CLASS:

title.classList.remove("active");


ADD EVENT:

title.addEventListener("click", handleClick);


CHANGE STYLE:

title.style.display = "none";


READ INPUT:

input.value


So:

querySelector()

is mainly the FIND part.

Then JavaScript can READ or MODIFY the element.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q26. Real industry example — Product Search
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HTML:

<input
    id="searchInput"
    placeholder="Search products"
>


JavaScript:

const searchInput =
    document.querySelector("#searchInput");


Then:

searchInput.addEventListener("input", () => {

    const searchText =
        searchInput.value;

    console.log(searchText);

});


User types:

laptop


The application receives:

"laptop"


Then normally:

React/frontend
        ↓
API request
        ↓
Express
        ↓
Database
        ↓
Products
        ↓
UI


In a real MERN application, React usually handles this through
state instead of manually using querySelector(), but the DOM concept
behind the browser still matters.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q27. What is the relationship between querySelector() and events?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Very important.

First:

const button =
    document.querySelector("#loginButton");


Then:

button.addEventListener("click", () => {

    console.log("Login clicked");

});


So the pattern is:

FIND ELEMENT
     ↓
querySelector()
     ↓
GET ELEMENT
     ↓
addEventListener()
     ↓
RESPOND TO USER


This pattern appears everywhere in vanilla JavaScript.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q28. What if JavaScript runs before HTML is loaded?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose JavaScript runs before this exists:

<button id="loginButton">
    Login
</button>


Then:

document.querySelector("#loginButton");


may return:

null


A common solution is to use:

<script src="script.js" defer></script>


Or place the script appropriately in the page.


Another option:

document.addEventListener("DOMContentLoaded", () => {

    const button =
        document.querySelector("#loginButton");

});


For modern applications, understanding script timing is enough.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q29. Do MERN developers use querySelector() frequently?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In React:

Usually NO for normal UI work.


Why?

Because React manages the UI through:

State
Props
Components
Refs


For example, instead of:

const title =
    document.querySelector("#title");

title.textContent = "Hello";


React normally uses:

const [title, setTitle] =
    useState("Hello");


Then:

<h1>{title}</h1>


React manages the DOM update.


However, you STILL need to understand querySelector()
because it teaches you:

- DOM
- element selection
- events
- browser behavior
- imperative programming


And you may occasionally work with existing DOM elements or
third-party libraries.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q30. What should I use in React instead of querySelector()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For normal UI:

React state and props.


For directly accessing a specific DOM element:

useRef()


Example:

const inputRef = useRef(null);


<input ref={inputRef} />


Then:

inputRef.current.focus();


This is the React-friendly way to perform imperative DOM operations.


Use querySelector() as your DOM knowledge foundation.

Use React state/props for normal UI rendering.

Use useRef() when you genuinely need direct DOM access.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q31. When might a MERN developer actually need direct DOM access?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some examples:

- focusing an input
- measuring an element
- controlling a video
- integrating a third-party DOM library
- scrolling to an element
- accessing browser APIs that require an element
- handling certain canvas operations


In React, prefer:

useRef()


instead of:

document.querySelector()


for your component's own DOM elements.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q32. What are the most important selectors I should know?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For MERN development, focus on these:

ID:

"#login"


Class:

".card"


Tag:

"button"


Descendant:

".product .title"


Multiple classes:

".card.active"


Direct child:

".menu > .item"


Attribute:

"[data-id]"


Specific attribute value:

'[data-id="123"]'


You do NOT need to memorize every CSS selector.


These are enough for most DOM work.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q33. What is the difference between ".product .title" and
".product > .title"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

".product .title"

means:

.title exists anywhere inside .product.


".product > .title"

means:

.title must be a DIRECT child of .product.


Example:

<div class="product">

    <div>

        <h2 class="title">
            Laptop
        </h2>

    </div>

</div>


.product .title

→ finds it.


.product > .title

→ does NOT find it because .title is not a direct child.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q34. What are common mistakes with querySelector()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1:

document.querySelector("login");


when the element is:

id="login"


Correct:

document.querySelector("#login");


Mistake 2:

Using querySelector() when you need all elements.


Wrong:

document.querySelector(".product");


Correct:

document.querySelectorAll(".product");


Mistake 3:

Not checking null when the element may not exist.


Mistake 4:

Trying to use DOM manipulation everywhere in React.


Mistake 5:

Writing overly complicated selectors when a simple class or
data attribute would be clearer.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q35. What is the most important mental model?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think:

HTML
 ↓
CSS selector
 ↓
querySelector()
 ↓
Element / null
 ↓
Read / Change / Listen


Example:

<button id="buyButton">
    Buy
</button>


        ↓


const button =
    document.querySelector("#buyButton");


        ↓


button.addEventListener("click", () => {

    console.log("Product purchased");

});


That's the complete basic flow.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    INTERVIEW QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q36. What does querySelector() do?

ANSWER:

It finds and returns the first element that matches a CSS selector.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q37. What does querySelector() return if nothing matches?

ANSWER:

null


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q38. How do you select an element with id="user"?

ANSWER:

document.querySelector("#user");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q39. How do you select an element with class="card"?

ANSWER:

document.querySelector(".card");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q40. How do you select a button?

ANSWER:

document.querySelector("button");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q41. Does querySelector() return all matching elements?

ANSWER:

No.

It returns only the first matching element.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q42. Which method returns all matching elements?

ANSWER:

querySelectorAll()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q43. What does querySelectorAll() return?

ANSWER:

A NodeList.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q44. What is the difference between these?

document.querySelector(".card");

document.querySelectorAll(".card");


ANSWER:

querySelector()
→ first matching element


querySelectorAll()
→ all matching elements


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q45. What happens here?

const button =
    document.querySelector("#login");

button.addEventListener("click", handleLogin);


What if #login doesn't exist?


ANSWER:

querySelector() returns null.

Then calling addEventListener() on null causes an error.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q46. What does ".card.active" mean?

ANSWER:

Find one element that has BOTH:

card

and

active


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q47. What does ".card .active" mean?

ANSWER:

Find an element with class active somewhere inside an element with
class card.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q48. Can querySelector() be used on an element?

ANSWER:

Yes.

Example:

const product =
    document.querySelector(".product");

const title =
    product.querySelector(".title");


The second search happens only inside product.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q49. Why are data-* attributes useful?

ANSWER:

They allow us to attach custom data to HTML elements.

Example:

data-product-id="123"


They are especially useful for identifying dynamic items.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q50. Should a React developer use querySelector() for every UI change?

ANSWER:

No.

React normally manages UI through:

state
props
components

For direct DOM access, useRef() is generally preferred.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


                    PRACTICE QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q51. Select this element:

<h1 id="heading">
    Products
</h1>


ANSWER:

const heading =
    document.querySelector("#heading");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q52. Select this element:

<button class="buy-btn">
    Buy
</button>


ANSWER:

const button =
    document.querySelector(".buy-btn");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q53. Select the first input:

<input>
<input>
<input>


ANSWER:

const input =
    document.querySelector("input");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q54. Select all inputs.

ANSWER:

const inputs =
    document.querySelectorAll("input");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q55. Select an element having both "card" and "active".

ANSWER:

const element =
    document.querySelector(".card.active");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q56. Select a product with data-product-id="101".

ANSWER:

const product =
    document.querySelector(
        '[data-product-id="101"]'
    );


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q57. What will this return?

HTML:

<div class="card">Laptop</div>

<div class="card">Phone</div>


JavaScript:

const card =
    document.querySelector(".card");


ANSWER:

It returns only:

Laptop


because querySelector() returns the first match.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q58. What will this return?

const cards =
    document.querySelectorAll(".card");


ANSWER:

Both cards.

The result is a NodeList containing:

Laptop
Phone


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q59. Write code to change this:

<h1 id="title">Old Title</h1>


to:

New Title


ANSWER:

const title =
    document.querySelector("#title");

title.textContent = "New Title";


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q60. Write code to add a click event to:

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


Q61. FINAL PRACTICE — LOGIN FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HTML:

<form id="loginForm">

    <input id="email">

    <input id="password">

    <button id="loginButton">
        Login
    </button>

</form>


Task:

1. Select the form.
2. Select email.
3. Select password.
4. Select button.
5. Add submit event.
6. Prevent page refresh.
7. Read email and password.


ANSWER:

const form =
    document.querySelector("#loginForm");

const emailInput =
    document.querySelector("#email");

const passwordInput =
    document.querySelector("#password");

const button =
    document.querySelector("#loginButton");


form.addEventListener("submit", (event) => {

    event.preventDefault();

    const email =
        emailInput.value;

    const password =
        passwordInput.value;

    console.log(email);
    console.log(password);

});


This is a very good exercise because it combines:

querySelector()
+
event listener
+
form
+
event
+
preventDefault()
+
input.value


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                 MERN DEVELOPER CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You should confidently know:

✓ What the DOM is

✓ What querySelector() does

✓ CSS selectors

✓ # for ID

✓ . for class

✓ Tag selectors

✓ Descendant selectors

✓ Multiple class selectors

✓ Attribute selectors

✓ data-* attributes

✓ First matching element

✓ null when nothing is found

✓ querySelector() vs querySelectorAll()

✓ NodeList concept

✓ Scoped querySelector()

✓ Reading .value

✓ Changing .textContent

✓ classList

✓ addEventListener()

✓ DOM loading/script timing

✓ Why React usually avoids manual DOM manipulation

✓ useRef() for direct DOM access in React


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                       FINAL MENTAL MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                HTML ELEMENT
                      ↓
                CSS SELECTOR
                      ↓
              querySelector()
                      ↓
              ┌───────┴───────┐
              ↓               ↓
           Element           null
              ↓
       READ / MODIFY / EVENT
              ↓
        APPLICATION LOGIC


Example:

<button id="buyButton">
    Buy
</button>

        ↓

const button =
    document.querySelector("#buyButton");

        ↓

button.addEventListener("click", handleBuy);


For MERN:

USER
 ↓
React UI
 ↓
Event
 ↓
Application Logic
 ↓
API Request
 ↓
Express
 ↓
MongoDB
 ↓
Response
 ↓
React State
 ↓
UI Update


IMPORTANT:

You should learn querySelector() well enough to understand the DOM,
but as a MERN developer, don't spend weeks on DOM manipulation.

Your bigger priorities are:

JavaScript
→ Async JavaScript
→ Promises
→ Fetch/API
→ React
→ Node.js
→ Express
→ MongoDB
→ Authentication
→ REST APIs
→ Git
→ Deployment

querySelector() is an important FOUNDATION, not the main skill of a
MERN developer.

*/