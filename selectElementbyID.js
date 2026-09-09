/*
============================================================
       SELECTING AN ELEMENT BY ID — querySelector()
============================================================


------------------------------------------------------------
Q1. What is an ID in HTML?
------------------------------------------------------------

An ID is a unique name given to an HTML element.

Example:

<h1 id="title">Welcome</h1>

Here:

id = "title"

The ID helps us uniquely identify this element.


IMPORTANT:

An ID should normally be UNIQUE within a page.

Good:

<h1 id="title">Welcome</h1>

Bad:

<h1 id="title">Welcome</h1>
<p id="title">Hello</p>


------------------------------------------------------------
Q2. How do you select an element by ID using querySelector()?
------------------------------------------------------------

Use:

document.querySelector("#id");


Example:

<h1 id="title">Welcome</h1>


JavaScript:

const heading = document.querySelector("#title");

console.log(heading);


Why # ?

Because in CSS:

#title

means:

"Select the element whose ID is title."


So:

id="title"

becomes:

#title


------------------------------------------------------------
Q3. Why don't we write the # in the HTML ID?
------------------------------------------------------------

HTML:

<h1 id="title">Welcome</h1>


The # is NOT part of the ID.

The actual ID is:

title


# is only used when writing a CSS selector.

Therefore:

HTML:
id="title"

JavaScript:
document.querySelector("#title");


------------------------------------------------------------
Q4. What exactly happens internally?
------------------------------------------------------------

Suppose we have:

<h1 id="title">Welcome</h1>


And:

const heading = document.querySelector("#title");


Think of it like:

HTML
 ↓
Browser creates DOM
 ↓
querySelector("#title")
 ↓
Browser searches DOM
 ↓
Finds matching element
 ↓
Returns the <h1> element


Now:

heading

contains a reference to that DOM element.


------------------------------------------------------------
Q5. What does querySelector("#title") return?
------------------------------------------------------------

It returns the matching DOM Element.

Example:

const heading = document.querySelector("#title");


Now you can do:

heading.textContent = "Dashboard";


or:

heading.style.color = "blue";


or:

heading.classList.add("active");


or:

heading.addEventListener("click", () => {
    console.log("Clicked");
});


------------------------------------------------------------
Q6. What happens if the ID does not exist?
------------------------------------------------------------

querySelector() returns:

null


Example:

const heading = document.querySelector("#doesNotExist");

console.log(heading);


Output:

null


This is very important.


------------------------------------------------------------
Q7. Why can null cause an error?
------------------------------------------------------------

Example:

const heading = document.querySelector("#doesNotExist");

heading.textContent = "Hello";


This causes an error because:

heading === null


And you are effectively doing:

null.textContent


which is not possible.


Safer:

const heading = document.querySelector("#doesNotExist");

if (heading) {
    heading.textContent = "Hello";
}


------------------------------------------------------------
Q8. What is the difference between these?

document.querySelector("#title")

document.getElementById("title")
------------------------------------------------------------

Both can select:

<h1 id="title">Welcome</h1>


Using querySelector():

const heading = document.querySelector("#title");


Using getElementById():

const heading = document.getElementById("title");


The important difference:

querySelector()
→ uses CSS selector syntax


getElementById()
→ specifically searches by ID


------------------------------------------------------------
Q9. Which one should a MERN developer use?
------------------------------------------------------------

Both are valid.

If you specifically need an ID:

document.getElementById("title");


is very direct.


If you are already using CSS selectors:

document.querySelector("#title");


is convenient.


In modern JavaScript, you should understand BOTH.


Do NOT think:

"One is always correct and the other is wrong."


------------------------------------------------------------
Q10. Is getElementById() faster than querySelector()?
------------------------------------------------------------

Generally, getElementById() is more specialized and can
be slightly faster.

But in normal MERN applications, this difference is
usually insignificant.

Do NOT write complicated code just to save a tiny amount
of lookup time.

Choose the API that makes your code clear.


------------------------------------------------------------
Q11. Can an ID contain numbers?
------------------------------------------------------------

Yes.

Example:

<div id="product123"></div>


Select:

const product = document.querySelector("#product123");


But use meaningful IDs.


Good:

#loginForm

#userProfile

#productList


Less meaningful:

#x123

#abc


------------------------------------------------------------
Q12. Can an ID contain spaces?
------------------------------------------------------------

You should NOT use spaces in IDs.

Bad:

id="user profile"


Prefer:

id="user-profile"


or:

id="userProfile"


Then:

document.querySelector("#user-profile");


------------------------------------------------------------
Q13. Can IDs be used with JavaScript for application behavior?
------------------------------------------------------------

Yes.

Example:

<button id="loginButton">
    Login
</button>


JavaScript:

const loginButton =
    document.querySelector("#loginButton");


loginButton.addEventListener("click", () => {

    console.log("Login clicked");

});


This is a basic real-world use case.


============================================================
             REAL INDUSTRY USE CASE #1
                    LOGIN FORM
============================================================


HTML:

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

const loginForm =
    document.querySelector("#loginForm");

const email =
    document.querySelector("#email");

const password =
    document.querySelector("#password");


loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log(email.value);
    console.log(password.value);

});


What happened?

1. We gave important elements IDs.

2. We selected them using querySelector().

3. We listened for the form submission.

4. We read the user's input.

5. In a real MERN application, we could now send
   the data to an Express backend.


For example:

POST /api/login


The backend could then:

→ validate credentials
→ check database
→ generate authentication response
→ return response


So the DOM selection is only the beginning of the flow.


============================================================
             REAL INDUSTRY USE CASE #2
                  SEARCH INPUT
============================================================


HTML:

<input
    id="searchInput"
    type="text"
    placeholder="Search products"
>


JavaScript:

const searchInput =
    document.querySelector("#searchInput");


searchInput.addEventListener("input", () => {

    const searchText = searchInput.value;

    console.log(searchText);

});


Real application:

User types:

"laptop"


Then JavaScript can use that value to:

→ filter existing products

OR

→ call an API

Example:

GET /api/products?search=laptop


The backend can query the database and return products.


============================================================
             REAL INDUSTRY USE CASE #3
                  MODAL / POPUP
============================================================


HTML:

<div id="loginModal">

    <h2>Login</h2>

    <button id="closeModal">
        Close
    </button>

</div>


JavaScript:

const modal =
    document.querySelector("#loginModal");

const closeButton =
    document.querySelector("#closeModal");


closeButton.addEventListener("click", () => {

    modal.classList.remove("open");

});


The ID gives us a reliable way to target the
specific modal and button.


============================================================
Q14. Why should an ID normally be unique?
============================================================

Because an ID represents a unique element.

Example:

<div id="userProfile"></div>


There should normally be only one:

#userProfile


If you do:

<div id="userProfile"></div>
<div id="userProfile"></div>


you create invalid/poorly structured HTML for this purpose.

It also creates confusion when selecting elements.


------------------------------------------------------------
Q15. What happens if multiple elements accidentally
have the same ID?
------------------------------------------------------------

Example:

<button id="login">Login 1</button>
<button id="login">Login 2</button>


Then:

document.querySelector("#login");


returns the FIRST matching element.


This is another reason IDs should be unique.


------------------------------------------------------------
Q16. What is the difference between an ID and a class?
------------------------------------------------------------

ID:

Usually identifies ONE specific element.

Example:

#loginForm


Class:

Can be shared by MANY elements.

Example:

.product-card


HTML:

<div class="product-card"></div>
<div class="product-card"></div>
<div class="product-card"></div>


So:

ID
→ unique identity


Class
→ reusable category/group


------------------------------------------------------------
Q17. Why shouldn't you give every element a unique ID?
------------------------------------------------------------

You technically can give many elements IDs, but you
usually shouldn't use IDs for everything.

Example:

<div id="product1"></div>
<div id="product2"></div>
<div id="product3"></div>
<div id="product4"></div>


For reusable UI elements, classes or data attributes
are often more appropriate.

Example:

<div class="product-card"
     data-product-id="101">
</div>


This scales better for dynamic applications.


------------------------------------------------------------
Q18. What is better for dynamic product lists:
IDs or classes?
------------------------------------------------------------

Usually classes/data attributes.

Example:

<div class="product-card"
     data-product-id="101">
</div>

<div class="product-card"
     data-product-id="102">
</div>


Why?

Because a product list can contain:

10 products

100 products

10,000 products


You don't want your JavaScript logic to depend on
hardcoded element IDs everywhere.


Instead, application data should identify the product:

data-product-id="101"


------------------------------------------------------------
Q19. Can querySelector() combine an ID with a class?
------------------------------------------------------------

Yes.

HTML:

<div id="profile" class="card">
    User
</div>


JavaScript:

const profile =
    document.querySelector("#profile.card");


This means:

Find an element that has:

ID = profile

AND

class = card


------------------------------------------------------------
Q20. Can querySelector() find an element inside an ID?
------------------------------------------------------------

Yes.


HTML:

<div id="product">

    <h2 class="name">
        Laptop
    </h2>

</div>


JavaScript:

const product =
    document.querySelector("#product");


const name =
    product.querySelector(".name");


This is called:

SCOPED DOM SELECTION.


First find the container.

Then search inside that container.


------------------------------------------------------------
Q21. Why is scoped selection useful?
------------------------------------------------------------

Imagine there are many:

.name

elements on the page.


Instead of:

document.querySelector(".name");


you can do:

const product =
    document.querySelector("#product");

const name =
    product.querySelector(".name");


Now JavaScript specifically searches inside:

#product


This makes your code more precise.


============================================================
             IMPORTANT TIMING PROBLEM
============================================================


Q22. Why might querySelector("#login") return null
even though the element exists in HTML?
------------------------------------------------------------

One common reason is:

JavaScript runs BEFORE the HTML element has been parsed.


Example:

<script src="script.js"></script>

<button id="login">
    Login
</button>


JavaScript may execute before the button exists
in the DOM.


Then:

document.querySelector("#login");

may return:

null


Solutions:


OPTION 1:

Put the script before </body>.


OPTION 2:

Use defer:

<script defer src="script.js"></script>


OPTION 3:

Use DOMContentLoaded:

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const login =
            document.querySelector("#login");

    }
);


In modern applications, script timing should be
understood, even though frameworks like React handle
much of this for you.


============================================================
                 REACT + MERN
============================================================


Q23. Do MERN developers frequently use querySelector()
inside React?
------------------------------------------------------------

Usually, NO.

React is designed to manage the UI declaratively.


Instead of:

const heading =
    document.querySelector("#heading");

heading.textContent = "Dashboard";


React normally uses state:

const [title, setTitle] =
    useState("Dashboard");


Then:

<h1>{title}</h1>


React updates the DOM for you.


------------------------------------------------------------
Q24. What should you use in React when you genuinely
need direct access to an element?
------------------------------------------------------------

Usually:

useRef()


Example:

const inputRef = useRef(null);


<input ref={inputRef} />


Then:

inputRef.current.focus();


This is generally better than:

document.querySelector("#search");


inside a React component.


------------------------------------------------------------
Q25. When might a React developer genuinely need
direct DOM access?
------------------------------------------------------------

Common examples:

→ Focus an input

→ Measure element dimensions

→ Control a video/audio element

→ Scroll to an element

→ Integrate a third-party DOM library

→ Perform an imperative browser operation


For these cases:

useRef()

is commonly preferred.


============================================================
                 INTERVIEW QUESTIONS
============================================================


Q26. What is querySelector()?
------------------------------------------------------------

Answer:

"querySelector() is a DOM method that accepts a CSS selector
and returns the first element matching that selector, or null
if no element matches."


------------------------------------------------------------
Q27. How do you select an element with ID "login"?
------------------------------------------------------------

Answer:

const login =
    document.querySelector("#login");


------------------------------------------------------------
Q28. Why do we use # when selecting an ID?
------------------------------------------------------------

Answer:

"# is the CSS selector syntax for an ID."


For:

id="login"


the selector is:

#login


------------------------------------------------------------
Q29. What happens if querySelector() doesn't find
the requested ID?
------------------------------------------------------------

Answer:

It returns:

null


------------------------------------------------------------
Q30. What is the difference between #login and .login?
------------------------------------------------------------

Answer:

#login

→ selects an element with ID login.


.login

→ selects an element with class login.


------------------------------------------------------------
Q31. Can multiple elements have the same ID?
------------------------------------------------------------

Answer:

HTML IDs should normally be unique.

If duplicates exist, querySelector() returns the first
matching element, which can lead to confusing behavior.


------------------------------------------------------------
Q32. querySelector("#login") vs
getElementById("login")?
------------------------------------------------------------

Answer:

querySelector("#login")

uses CSS selector syntax and is more flexible.


getElementById("login")

is specifically designed to find an element by ID.


Both can select the same element.


------------------------------------------------------------
Q33. Is querySelector("#login") an Array?
------------------------------------------------------------

Answer:

No.

It returns:

Element

or:

null.


------------------------------------------------------------
Q34. Can you modify an element returned by querySelector()?
------------------------------------------------------------

Yes.

Example:

const button =
    document.querySelector("#login");

button.textContent = "Logging in...";


You can also:

button.classList.add("loading");


button.setAttribute("disabled", "");


button.addEventListener("click", () => {
    console.log("Clicked");
});


------------------------------------------------------------
Q35. What is a good rule for using IDs in a MERN project?
------------------------------------------------------------

Answer:

Use IDs for elements that need a unique identity.

Examples:

#loginForm

#searchInput

#mainModal

#navbar


For repeated/dynamic elements, prefer reusable classes
and data attributes where appropriate.


============================================================
                 QUICK PRACTICE
============================================================


Q36. Select this element:

<h1 id="title">Hello</h1>
------------------------------------------------------------

Answer:

const title = document.querySelector("#title");


------------------------------------------------------------
Q37. Select this button:

<button id="submitButton">
    Submit
</button>
------------------------------------------------------------

Answer:

const button =
    document.querySelector("#submitButton");


------------------------------------------------------------
Q38. Change its text to "Submitting..."
------------------------------------------------------------

Answer:

button.textContent = "Submitting...";


------------------------------------------------------------
Q39. Add a click event to it.
------------------------------------------------------------

Answer:

button.addEventListener("click", () => {

    console.log("Submitting...");

});


------------------------------------------------------------
Q40. Select this form:

<form id="registerForm"></form>
------------------------------------------------------------

Answer:

const form =
    document.querySelector("#registerForm");


------------------------------------------------------------
Q41. What will this return?

document.querySelector("#abc");

HTML:

<div id="abc"></div>
------------------------------------------------------------

Answer:

The <div> element.


------------------------------------------------------------
Q42. What will this return?

document.querySelector("#abc");

HTML:

<div id="xyz"></div>
------------------------------------------------------------

Answer:

null


------------------------------------------------------------
Q43. What is wrong here?

const button =
    document.querySelector("#doesNotExist");

button.addEventListener("click", () => {
    console.log("Clicked");
});
------------------------------------------------------------

Answer:

The selector may return null.

Then:

null.addEventListener(...)

causes an error.


Safer:

const button =
    document.querySelector("#doesNotExist");

if (button) {

    button.addEventListener("click", () => {
        console.log("Clicked");
    });

}


============================================================
                  FINAL CHALLENGE
============================================================


HTML:

<form id="loginForm">

    <input id="email" type="email">

    <input id="password" type="password">

    <button id="loginButton" type="submit">
        Login
    </button>

</form>


Q44. Select the login form.
------------------------------------------------------------

Answer:

const form =
    document.querySelector("#loginForm");


Q45. Select the email input.
------------------------------------------------------------

Answer:

const email =
    document.querySelector("#email");


Q46. Select the password input.
------------------------------------------------------------

Answer:

const password =
    document.querySelector("#password");


Q47. Select the login button.
------------------------------------------------------------

Answer:

const loginButton =
    document.querySelector("#loginButton");


Q48. Get the user's email.
------------------------------------------------------------

Answer:

const emailValue = email.value;


Q49. Get the user's password.
------------------------------------------------------------

Answer:

const passwordValue = password.value;


Q50. Handle form submission.
------------------------------------------------------------

Answer:

form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log(email.value);
    console.log(password.value);

});


In a real MERN application, this is where you would
typically validate the input and then make an API request
to your Express backend.


============================================================
              WHAT YOU REALLY NEED TO REMEMBER
============================================================


1. ID should normally be unique.

2. HTML:

id="login"


3. CSS/JavaScript selector:

#login


4. Select by ID:

document.querySelector("#login");


5. Result:

Element

OR

null


6. querySelector() returns only the FIRST match.

7. getElementById() is specifically for IDs.

8. querySelector() supports CSS selector syntax.

9. IDs are good for unique elements.

10. Classes are better for reusable/repeated elements.

11. data-* attributes are useful for dynamic application
    data such as product IDs.

12. Always consider null and script timing.

13. In React, don't normally use querySelector() to manage
    your UI.

14. For imperative DOM access in React, understand:

useRef()


============================================================
                  FINAL MENTAL MODEL
============================================================

HTML:

<button id="loginButton">
    Login
</button>

        ↓

ID:

loginButton

        ↓

CSS selector:

#loginButton

        ↓

JavaScript:

const button =
    document.querySelector("#loginButton");

        ↓

DOM Element

        ↓

You can:

READ
button.textContent

READ INPUT
input.value

CHANGE
button.textContent = "Loading..."

STYLE
button.classList.add("loading")

LISTEN
button.addEventListener(...)


The key thing to remember:

ID in HTML
    ↓
id="loginButton"

ID selector in JavaScript
    ↓
"#loginButton"

Selection
    ↓
document.querySelector("#loginButton")

Result
    ↓
Element OR null
============================================================

*/