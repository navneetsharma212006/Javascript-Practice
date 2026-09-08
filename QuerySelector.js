/*
===========================================================
          JAVASCRIPT querySelector() — COMPLETE Q&A
===========================================================


Q1. What is querySelector()?

Answer:

querySelector() is a DOM method in JavaScript that finds
an HTML element using a CSS selector.

Syntax:

document.querySelector("selector");


Example:

HTML:

<h1>Hello</h1>


JavaScript:

const heading = document.querySelector("h1");

console.log(heading);


Output:

<h1>Hello</h1>


Simple mental model:

querySelector()
       ↓
Search the DOM
       ↓
Find the first matching element
       ↓
Return that element


===========================================================
Q2. What is the most important rule of querySelector()?

Answer:

querySelector() returns ONLY the FIRST matching element.


Example:

<p>Hello</p>
<p>World</p>
<p>JavaScript</p>


const paragraph = document.querySelector("p");


Result:

<p>Hello</p>


It does NOT return the other two paragraphs.


Remember:

querySelector()
→ First match


querySelectorAll()
→ All matches


This is the most important difference to remember.


===========================================================
Q3. Why does querySelector() use CSS selectors?

Answer:

Because querySelector() understands CSS selector syntax.

This allows you to select elements using:

    - Tag
    - ID
    - Class
    - Multiple classes
    - Nested elements
    - Direct children
    - Attributes
    - data-* attributes


For example:

document.querySelector("button");

document.querySelector("#login");

document.querySelector(".card");

document.querySelector(".container .title");

document.querySelector(
    'input[type="email"]'
);


===========================================================
Q4. How do you select an element by tag name?

HTML:

<h1>Hello</h1>


JavaScript:

const heading = document.querySelector("h1");


Here:

"h1"

is the CSS selector.

The browser searches for the first <h1> element.


-----------------------------------------------------------

If there are multiple h1 elements:

<h1>One</h1>
<h1>Two</h1>


const heading = document.querySelector("h1");


Only:

<h1>One</h1>

is returned.


===========================================================
Q5. How do you select an element by ID?

HTML:

<h1 id="title">
    Hello
</h1>


JavaScript:

const title =
    document.querySelector("#title");


Important:

CSS uses:

#


for IDs.

Therefore:

#title

means:

"Find the element whose ID is title."


Example:

document.querySelector("#loginForm");


===========================================================
Q6. How do you select an element by class?

HTML:

<div class="card">
    Product
</div>


JavaScript:

const card =
    document.querySelector(".card");


Important:

CSS uses:

.


for classes.

Therefore:

.card

means:

"Find the element whose class is card."


===========================================================
Q7. What is the difference between an ID selector
and a class selector?

Answer:


ID:

#title


Class:

.title


Example:

HTML:

<h1 id="title">
    Hello
</h1>

<div class="title">
    Product
</div>


JavaScript:

document.querySelector("#title");

→ selects the h1


document.querySelector(".title");

→ selects the div


Remember:

# → ID

. → Class


===========================================================
Q8. What happens if multiple elements have the same class?

HTML:

<div class="card">Product 1</div>

<div class="card">Product 2</div>

<div class="card">Product 3</div>


JavaScript:

const card =
    document.querySelector(".card");


Result:

Product 1


Only the FIRST matching element is returned.


If you need all cards:

const cards =
    document.querySelectorAll(".card");


===========================================================
Q9. How do you select an element that has multiple classes?

HTML:

<div class="card active">
    Product
</div>


JavaScript:

const element =
    document.querySelector(".card.active");


Important:

There is NO space between:

.card

and

.active


Meaning:

Find an element that has BOTH:

card
AND
active


===========================================================
Q10. What is the difference between these two selectors?

.card.active

.card .active


Answer:


.card.active

means:

The SAME element has both classes.


Example:

<div class="card active">
    Product
</div>


Matches.


-----------------------------------------------------------

.card .active

means:

Find an element with class "active"
INSIDE an element with class "card".


Example:

<div class="card">

    <button class="active">
        Buy
    </button>

</div>


Matches.


This is a very common CSS selector interview trap.


===========================================================
Q11. How do you select a nested element?

HTML:

<div class="container">

    <h2 class="title">
        Products
    </h2>

</div>


JavaScript:

const title =
    document.querySelector(
        ".container .title"
    );


Meaning:

Find .title

inside

.container


===========================================================
Q12. What does the > selector mean?

Answer:

> means DIRECT CHILD.


HTML:

<div class="container">

    <p>Direct child</p>

    <div>
        <p>Nested child</p>
    </div>

</div>


Selector:

document.querySelector(
    ".container > p"
);


This selects:

<p>Direct child</p>


It does NOT select the nested <p>.


Difference:

.container p

→ any descendant p


.container > p

→ direct child p only


===========================================================
Q13. What is an attribute selector?

Answer:

An attribute selector selects an element based on
its HTML attribute.

Example:

HTML:

<input
    type="email"
>


JavaScript:

const input =
    document.querySelector(
        'input[type="email"]'
    );


Meaning:

Find an input whose type is email.


Other examples:

button[type="submit"]

input[name="username"]

input[required]


===========================================================
Q14. How can you select an element using a data-* attribute?

HTML:

<button
    data-product-id="101"
>
    Delete
</button>


Using querySelector():

const button =
    document.querySelector(
        '[data-product-id="101"]'
    );


Then you can read the value:

console.log(button.dataset.productId);


Output:

101


This is useful when working with dynamic UI elements.


===========================================================
Q15. What does querySelector() return?

Answer:

If a matching element exists:

→ The matching Element


If no matching element exists:

→ null


Example:

const title =
    document.querySelector("#title");


If #title exists:

Element


If #title does not exist:

null


===========================================================
Q16. What happens if querySelector() cannot find
the element?

Example:

const button =
    document.querySelector("#login");


Suppose there is no element with:

id="login"


Then:

button === null


Therefore this can cause an error:

button.addEventListener("click", () => {

});


Because you are effectively doing:

null.addEventListener(...)


A safer approach:

if (button) {

    button.addEventListener(
        "click",
        () => {
            console.log("Clicked");
        }
    );

}


===========================================================
Q17. Can querySelector() be used on an element instead
of document?

Answer:

YES.

This is an important concept.


HTML:

<div class="user">

    <h2 class="name">
        Navneet
    </h2>

</div>


First find the user:

const user =
    document.querySelector(".user");


Then search inside that element:

const name =
    user.querySelector(".name");


Now querySelector() searches inside:

.user


instead of searching the entire document.


This is called a scoped search.


===========================================================
Q18. Why is scoped querySelector() useful?

Answer:

Imagine an e-commerce page contains 100 product cards.

Each card contains:

<div class="card">

    <h2 class="title">
        Product
    </h2>

</div>


Suppose you already have one specific card:

const card =
    document.querySelector(".card");


Now:

const title =
    card.querySelector(".title");


You are saying:

"Find the title inside THIS card."


This makes your code more precise.


===========================================================
Q19. What is the difference between:

document.querySelector(".title")

and

card.querySelector(".title")?


Answer:


document.querySelector(".title")

→ Searches the entire document.


card.querySelector(".title")

→ Searches only inside card.


This is especially useful when working with
nested components or repeated UI structures.


===========================================================
Q20. Can querySelector() select an element by tag,
class and ID?

Answer:

YES.


Tag:

document.querySelector("button");


Class:

document.querySelector(".button");


ID:

document.querySelector("#button");


All are valid CSS selectors.


===========================================================
Q21. Can you combine selectors?

Answer:

YES.

Example:

document.querySelector(
    "button.primary"
);


Meaning:

Find a button

AND

it must have the primary class.


Another example:

document.querySelector(
    ".card.active"
);


Meaning:

Find an element having both card and active classes.


===========================================================
Q22. Can querySelector() select based on multiple conditions?

Answer:

YES.

Example:

HTML:

<input
    type="email"
    class="input"
>


Selector:

const input =
    document.querySelector(
        'input.input[type="email"]'
    );


Meaning:

Find an input

AND

it has class input

AND

its type is email.


You do not need to memorize complex combinations,
but you should understand how CSS selectors work.


===========================================================
Q23. What is the difference between querySelector()
and getElementById()?

Answer:


getElementById():

document.getElementById("title");


querySelector():

document.querySelector("#title");


Both can find an element by ID.

But querySelector() is more flexible because it
supports CSS selectors.


For example:

document.querySelector(".card");

document.querySelector("button");

document.querySelector(".container .title");

document.querySelector(
    'input[type="email"]'
);


So:

getElementById()
→ specifically for IDs


querySelector()
→ CSS selector based


===========================================================
Q24. What is the difference between querySelector()
and querySelectorAll()?

Answer:


querySelector():

const card =
    document.querySelector(".card");


→ FIRST matching element


querySelectorAll():

const cards =
    document.querySelectorAll(".card");


→ ALL matching elements


Example:

<div class="card">1</div>
<div class="card">2</div>
<div class="card">3</div>


querySelector(".card")

→ Card 1


querySelectorAll(".card")

→ Card 1
   Card 2
   Card 3


===========================================================
Q25. Does querySelector() return an Array?

Answer:

NO.

querySelector() returns an Element
(or null if nothing matches).


Example:

const card =
    document.querySelector(".card");


This is an Element.


-----------------------------------------------------------

querySelectorAll() returns a NodeList.

const cards =
    document.querySelectorAll(".card");


This is a NodeList, NOT a normal Array.


===========================================================
Q26. What happens if you need all elements but
accidentally use querySelector()?

Example:

HTML:

<button class="delete">Delete 1</button>
<button class="delete">Delete 2</button>
<button class="delete">Delete 3</button>


Code:

const buttons =
    document.querySelector(".delete");


What happens?

Answer:

Only the FIRST delete button is stored.


If you want all:

const buttons =
    document.querySelectorAll(".delete");


This is one of the most common mistakes.


===========================================================
Q27. How can you modify an element after selecting it?

Example:

HTML:

<h1 class="title">
    Hello
</h1>


JavaScript:

const title =
    document.querySelector(".title");


Change text:

title.textContent = "Products";


Add class:

title.classList.add("active");


Change style:

title.style.display = "none";


Change attribute:

title.setAttribute(
    "data-status",
    "active"
);


The general pattern is:

SELECT
   ↓
STORE
   ↓
READ / MODIFY


===========================================================
Q28. What is a real-world e-commerce use case?

HTML:

<button class="add-cart">
    Add to Cart
</button>


JavaScript:

const button =
    document.querySelector(".add-cart");


button.addEventListener("click", () => {

    console.log("Product added to cart");

});


Flow:

HTML
 ↓
querySelector()
 ↓
Find button
 ↓
addEventListener()
 ↓
User clicks
 ↓
Cart logic


In a real application, the click could trigger:

    ↓
API request
    ↓
Express backend
    ↓
Database
    ↓
Response
    ↓
UI update


===========================================================
Q29. What is a real-world search bar use case?

HTML:

<input
    id="search"
    type="text"
>

<div id="results"></div>


JavaScript:

const search =
    document.querySelector("#search");

const results =
    document.querySelector("#results");


search.addEventListener("input", () => {

    console.log(search.value);

});


Real flow:

User types:

iphone

    ↓

input event

    ↓

search.value

    ↓

filter products
OR
API request

    ↓

Display results


===========================================================
Q30. What is a real-world login form use case?

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

const form =
    document.querySelector("#loginForm");

const email =
    document.querySelector("#email");

const password =
    document.querySelector("#password");


form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log(email.value);
    console.log(password.value);

});


Here querySelector() is used to find:

    form
    email input
    password input


Then JavaScript can validate the values
and send them to an API.


===========================================================
Q31. What are the most important selectors you should
know as a MERN developer?

Answer:


1. Tag

"button"


2. ID

"#login"


3. Class

".card"


4. Multiple classes

".card.active"


5. Descendant

".container .card"


6. Direct child

".container > .card"


7. Attribute

'input[type="email"]'


8. data-* attribute

'[data-id="101"]'


These are enough for most practical DOM work.


===========================================================
Q32. Do you need to memorize every CSS selector
for querySelector()?

Answer:

NO.

You should understand the common selectors:

    #id
    .class
    tag
    .parent .child
    .parent > .child
    [attribute]
    [attribute="value"]

You can look up rare or complex selectors when needed.

Do not waste time memorizing dozens of CSS selectors.


===========================================================
Q33. What is a common mistake with IDs?

Example:

HTML:

<div id="product"></div>


Incorrect:

document.querySelector("product");


Correct:

document.querySelector("#product");


Why?

Because:

product

means tag selector.


#product

means ID selector.


===========================================================
Q34. What is a common mistake with classes?

HTML:

<div class="card"></div>


Incorrect:

document.querySelector("card");


Correct:

document.querySelector(".card");


Because:

.card

means class.


===========================================================
Q35. What happens if the HTML element is below
the JavaScript execution point?

Answer:

Depending on where/how the script is loaded,
querySelector() may run before the element exists.

For example, if JavaScript executes before:

<h1 id="title">Hello</h1>

has been parsed, this can return:

null


Solutions include:

    - Put the script appropriately
    - Use defer
    - Run code after DOMContentLoaded


Modern HTML commonly uses:

<script defer src="app.js"></script>


===========================================================
Q36. What is DOMContentLoaded?

Answer:

DOMContentLoaded fires when the HTML document has been
fully parsed and the DOM has been constructed.

Example:

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const title =
            document.querySelector("#title");

        console.log(title);

    }
);


This ensures the DOM is ready before accessing elements.


===========================================================
Q37. Should you use querySelector() everywhere in React?

Answer:

NO.

In React, you normally do NOT manually manipulate the DOM.

Instead:

State
 ↓
React
 ↓
DOM


Example:

const [count, setCount] = useState(0);


<button onClick={() => setCount(count + 1)}>
    {count}
</button>


React manages the DOM update.


===========================================================
Q38. What should you use in React when you need
direct access to a DOM element?

Answer:

useRef()


Example:

const inputRef = useRef(null);


<input ref={inputRef} />


Then:

inputRef.current.focus();


This is generally preferred over:

document.querySelector()


inside React components.


===========================================================
Q39. When can direct DOM access be useful in React?

Answer:

For imperative operations such as:

    - Focusing an input
    - Scrolling to an element
    - Measuring an element
    - Controlling video/audio
    - Working with canvas
    - Integrating third-party DOM libraries


Example:

inputRef.current.focus();


This is a legitimate use of direct DOM access.


===========================================================
Q40. What are the most common querySelector() mistakes?

Answer:


MISTAKE 1:

Forgetting # for IDs.

Wrong:

querySelector("title")

Correct:

querySelector("#title")


-----------------------------------------------------------

MISTAKE 2:

Forgetting . for classes.

Wrong:

querySelector("card")

Correct:

querySelector(".card")


-----------------------------------------------------------

MISTAKE 3:

Expecting all elements.

querySelector()

→ first only


-----------------------------------------------------------

MISTAKE 4:

Not handling null.

const button =
    document.querySelector("#button");

button.addEventListener(...);


If button doesn't exist:

ERROR


-----------------------------------------------------------

MISTAKE 5:

Confusing:

.card.active

with:

.card .active


-----------------------------------------------------------

MISTAKE 6:

Using document.querySelector() unnecessarily
inside React components.


===========================================================
                 INTERVIEW RAPID FIRE
===========================================================


Q41. What does querySelector() return?

Answer:

The first matching Element, or null.


-----------------------------------------------------------

Q42. Does querySelector() return all matching elements?

Answer:

NO.

It returns only the first match.


-----------------------------------------------------------

Q43. Which method returns all matching elements?

Answer:

querySelectorAll()


-----------------------------------------------------------

Q44. What does # mean in a selector?

Answer:

ID.


-----------------------------------------------------------

Q45. What does . mean in a selector?

Answer:

Class.


-----------------------------------------------------------

Q46. What does > mean?

Answer:

Direct child.


-----------------------------------------------------------

Q47. What does ".card .title" mean?

Answer:

Find .title inside .card.


-----------------------------------------------------------

Q48. What does ".card.title" mean?

Answer:

Find an element that has BOTH classes:

card
AND
title


-----------------------------------------------------------

Q49. What happens when no element matches?

Answer:

null


-----------------------------------------------------------

Q50. Can querySelector() be called on an element?

Answer:

YES.

Example:

const card =
    document.querySelector(".card");

const title =
    card.querySelector(".title");


-----------------------------------------------------------

Q51. What does querySelectorAll() return?

Answer:

A NodeList.


-----------------------------------------------------------

Q52. What should React developers generally use
instead of querySelector() for DOM references?

Answer:

useRef()


===========================================================
              FINAL PRACTICE CHALLENGE
===========================================================


Q53. What will this code select?

HTML:

<div class="container">

    <button class="btn">
        Button 1
    </button>

    <button class="btn">
        Button 2
    </button>

</div>


JavaScript:

const button =
    document.querySelector(
        ".container .btn"
    );


Answer:

It selects:

Button 1


Why?

Because querySelector() returns the FIRST match.


-----------------------------------------------------------

Q54. What will this select?

const button =
    document.querySelector(
        ".container > .btn"
    );


Answer:

Button 1


Because both buttons are direct children of
.container.

Again, only the FIRST matching button is returned.


-----------------------------------------------------------

Q55. What will this select?

const button =
    document.querySelectorAll(
        ".container > .btn"
    );


Answer:

Both buttons.

Because querySelectorAll() returns ALL matches.


===========================================================
                FINAL MENTAL MODEL
===========================================================


Think about querySelector() like this:


                CSS SELECTOR
                     ↓
              querySelector()
                     ↓
              SEARCH THE DOM
                     ↓
             FIRST MATCH FOUND
                     ↓
                 ELEMENT
                     ↓
          READ / MODIFY / EVENT


Example:


const button =
    document.querySelector(".add-cart");

              ↓

        FIND THE BUTTON

              ↓

button.addEventListener("click", () => {

    console.log("Added to cart");

});


The complete pattern is:


SELECT
  ↓
STORE
  ↓
USE


===========================================================
          WHAT A MERN DEVELOPER MUST KNOW
===========================================================


MUST KNOW:

[✓] What querySelector() does

[✓] First-match rule

[✓] Tag selectors

[✓] ID selectors

[✓] Class selectors

[✓] Multiple classes

[✓] Descendant selectors

[✓] Direct child selector

[✓] Basic attribute selectors

[✓] data-* selectors

[✓] null when no match exists

[✓] querySelectorAll() difference

[✓] Scoped querySelector()

[✓] Using the selected element

[✓] Common selector mistakes

[✓] DOMContentLoaded basics

[✓] Why React normally avoids manual DOM manipulation

[✓] useRef() for legitimate DOM references


NOT NECESSARY TO MEMORIZE:

[ ] Every advanced CSS selector

[ ] Rare selector combinations

[ ] Dozens of obscure DOM APIs


===========================================================
                 GOLDEN RULE
===========================================================


querySelector()

=

"Give me a CSS selector and I will return
the FIRST matching DOM element."


Example:

document.querySelector(".card");


Means:

Find the first element having:

class="card"


And remember:


querySelector()
        ↓
      FIRST


querySelectorAll()
        ↓
       ALL


For a MERN developer, this distinction is one of
the most important things to understand.
===========================================================

*/


/*
============================================================
        JAVASCRIPT querySelector() — COMPLETE PRACTICE
============================================================

------------------------------------------------------------
Q1. What is querySelector()?
------------------------------------------------------------

Answer:

querySelector() is a JavaScript DOM method used to find the
FIRST element that matches a given CSS selector.

Syntax:

const element = document.querySelector("selector");


Example:

const heading = document.querySelector("h1");

If the HTML is:

<h1>Hello</h1>
<h1>World</h1>

Then:

heading

refers only to:

<h1>Hello</h1>

Because querySelector() returns the FIRST matching element.


------------------------------------------------------------
Q2. What does querySelector() return?
------------------------------------------------------------

Answer:

It returns:

1. The first matching Element
2. null if no element matches


Example:

const button = document.querySelector(".btn");

If .btn exists:

button → Element


If .btn does not exist:

button → null


------------------------------------------------------------
Q3. Why is it called querySelector?
------------------------------------------------------------

Answer:

Because you give it a CSS selector as a "query".

For example:

document.querySelector(".card");

document.querySelector("#login");

document.querySelector("button");

document.querySelector("[data-id='123']");


This makes querySelector() extremely flexible.


------------------------------------------------------------
Q4. How do you select an element by tag name?
------------------------------------------------------------

Answer:

Use the tag name directly.

HTML:

<h1>Hello</h1>

JavaScript:

const heading = document.querySelector("h1");


For:

<button>Login</button>

Use:

const button = document.querySelector("button");


------------------------------------------------------------
Q5. How do you select an element by ID?
------------------------------------------------------------

Answer:

Use # followed by the ID.

HTML:

<div id="profile"></div>

JavaScript:

const profile = document.querySelector("#profile");


# means:

"Find the element whose id is profile."


------------------------------------------------------------
Q6. How do you select an element by class?
------------------------------------------------------------

Answer:

Use . followed by the class name.

HTML:

<div class="card"></div>

JavaScript:

const card = document.querySelector(".card");


. means:

"Find an element having this class."


------------------------------------------------------------
Q7. What is the difference between # and .?
------------------------------------------------------------

Answer:

# → ID

. → Class


Example:

#login

means:

element with id="login"


.card

means:

element with class="card"


------------------------------------------------------------
Q8. What happens if multiple elements have the same class?
------------------------------------------------------------

Answer:

querySelector() returns only the FIRST matching element.


HTML:

<div class="card">A</div>
<div class="card">B</div>
<div class="card">C</div>


JavaScript:

const card = document.querySelector(".card");


Only:

A

is selected.


If you want ALL matching elements:

document.querySelectorAll(".card");


------------------------------------------------------------
Q9. How do you select an element having multiple classes?
------------------------------------------------------------

HTML:

<div class="card active"></div>


JavaScript:

const element = document.querySelector(".card.active");


Important:

.card.active

means:

"Element having BOTH card AND active classes."


------------------------------------------------------------
Q10. What is the difference between these two selectors?

.card.active

.card .active
------------------------------------------------------------

Answer:

.card.active

means:

Same element has both classes.

Example:

<div class="card active"></div>


.card .active

means:

An element with class active INSIDE an element with class card.


Example:

<div class="card">
    <button class="active">Buy</button>
</div>


This distinction is extremely important.


------------------------------------------------------------
Q11. How do you select a nested element?
------------------------------------------------------------

HTML:

<div class="card">
    <button class="buy">Buy</button>
</div>


JavaScript:

const button = document.querySelector(".card .buy");


Meaning:

Find .buy inside .card.


------------------------------------------------------------
Q12. What does the > selector mean?
------------------------------------------------------------

Answer:

> means DIRECT CHILD.


HTML:

<div class="card">
    <button class="buy">Buy</button>
</div>


You can write:

const button = document.querySelector(
    ".card > .buy"
);


This means:

Find .buy that is a direct child of .card.


------------------------------------------------------------
Q13. What is the difference between a space and >?
------------------------------------------------------------

Answer:

Space:

.card .button

means .button can be anywhere inside .card.


>:

.card > .button

means .button must be a DIRECT child.


Example:

<div class="card">

    <div>
        <button class="button"></button>
    </div>

</div>


.card .button

will find the button.


.card > .button

will NOT find it.


------------------------------------------------------------
Q14. How do you select an element by attribute?
------------------------------------------------------------

Answer:

Use:

[attribute]


Example:

<input type="email">


JavaScript:

const input = document.querySelector(
    "[type='email']"
);


You can also use:

document.querySelector("[disabled]");


This finds an element having the disabled attribute.


------------------------------------------------------------
Q15. How do you select an element using data-* attributes?
------------------------------------------------------------

HTML:

<button data-product-id="101">
    Buy
</button>


JavaScript:

const button = document.querySelector(
    "[data-product-id='101']"
);


This is very useful in real applications.


For example:

<button data-user-id="25">
    Delete
</button>


JavaScript:

const deleteButton = document.querySelector(
    "[data-user-id='25']"
);


------------------------------------------------------------
Q16. How do you select an element using multiple conditions?
------------------------------------------------------------

HTML:

<button class="btn primary" data-action="buy">
    Buy
</button>


JavaScript:

const button = document.querySelector(
    ".btn.primary[data-action='buy']"
);


This means:

class = btn

AND

class = primary

AND

data-action = buy


------------------------------------------------------------
Q17. Can querySelector() select an element using its ID and class together?
------------------------------------------------------------

Yes.

HTML:

<div id="profile" class="card"></div>


JavaScript:

const element = document.querySelector(
    "#profile.card"
);


This means:

Find the element having:

id = profile

AND

class = card.


------------------------------------------------------------
Q18. Can querySelector() use normal CSS selectors?
------------------------------------------------------------

Yes.

You can use many CSS selectors.

Examples:

h1

.card

#login

.card.active

.card .button

.card > .button

input[type="email"]

[data-user-id="10"]

button:hover

li:first-child

li:nth-child(2)


You do NOT need to memorize every CSS selector.

For MERN development, the common ones are enough.


------------------------------------------------------------
Q19. What happens if querySelector() cannot find anything?
------------------------------------------------------------

Answer:

It returns:

null


Example:

const button = document.querySelector(".does-not-exist");

console.log(button);

Output:

null


------------------------------------------------------------
Q20. Why can this code cause an error?

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    console.log("Clicked");
});
------------------------------------------------------------

Answer:

Because .btn might not exist.

Then:

button === null


And:

null.addEventListener(...)

causes an error.


Safer:

const button = document.querySelector(".btn");

if (button) {
    button.addEventListener("click", () => {
        console.log("Clicked");
    });
}


This is important in real applications.


------------------------------------------------------------
Q21. What is the difference between document.querySelector()
and element.querySelector()?
------------------------------------------------------------

Answer:

Both work similarly.

But the starting search location is different.


document.querySelector():

Searches the entire document.


Example:

const button = document.querySelector(".buy");


element.querySelector():

Searches inside a particular element.


Example:

const card = document.querySelector(".card");

const button = card.querySelector(".buy");


This means:

"Find .buy inside this specific card."


------------------------------------------------------------
Q22. Why is element.querySelector() useful in real applications?
------------------------------------------------------------

Imagine an e-commerce page:

<div class="product-card">
    <h2>iPhone</h2>
    <button class="buy">Buy</button>
</div>

<div class="product-card">
    <h2>Samsung</h2>
    <button class="buy">Buy</button>
</div>


If you already have one product card:

const card = document.querySelector(".product-card");


Then:

const button = card.querySelector(".buy");


Now you are specifically working with the button
inside that product card.


This prevents accidentally selecting a button
from another part of the page.


------------------------------------------------------------
Q23. What is the difference between querySelector()
and getElementById()?
------------------------------------------------------------

Answer:


getElementById():

document.getElementById("login");


querySelector():

document.querySelector("#login");


Both can find an ID.


But querySelector() is more flexible because it supports
CSS selectors.


For example:

document.querySelector(".card");

document.querySelector("button");

document.querySelector("[data-id='10']");

document.querySelector(".card button");


getElementById() only works with IDs.


------------------------------------------------------------
Q24. Which is generally faster: getElementById()
or querySelector()?
------------------------------------------------------------

Answer:

getElementById() is generally more specialized and can be
slightly faster.

But in normal MERN development, this performance difference
is usually insignificant.

Use:

getElementById()

when you specifically need an ID.


Use:

querySelector()

when you want flexible CSS selector syntax.


Do not choose APIs based only on tiny theoretical
performance differences.


------------------------------------------------------------
Q25. What is the difference between querySelector()
and querySelectorAll()?
------------------------------------------------------------

Answer:


querySelector():

Returns FIRST matching element.


querySelectorAll():

Returns ALL matching elements.


Example:

const button = document.querySelector(".btn");


Only first button.


const buttons = document.querySelectorAll(".btn");


All matching buttons.


------------------------------------------------------------
Q26. What does querySelectorAll() return?
------------------------------------------------------------

Answer:

It returns a:

NodeList


Example:

const buttons = document.querySelectorAll(".btn");


You can loop through it:

buttons.forEach((button) => {
    console.log(button);
});


Important:

NodeList is not exactly the same thing as an Array.


------------------------------------------------------------
Q27. Is the result of querySelector() an Array?
------------------------------------------------------------

No.

querySelector() returns an:

Element

if a match exists.


Example:

const button = document.querySelector("button");


button is NOT an array.


------------------------------------------------------------
Q28. Can you directly use array methods on querySelector()?
------------------------------------------------------------

No.

Because querySelector() returns one Element.


This is wrong conceptually:

const buttons = document.querySelector(".btn");

buttons.map(...);


There is no array.


For multiple elements:

const buttons = document.querySelectorAll(".btn");


Then:

buttons.forEach(...);


------------------------------------------------------------
Q29. Can you modify the element returned by querySelector()?
------------------------------------------------------------

Yes.

Example:

const heading = document.querySelector("h1");

heading.textContent = "Welcome";


You can also:

heading.style.fontSize = "30px";


heading.classList.add("active");


heading.classList.remove("hidden");


heading.setAttribute("data-status", "active");


------------------------------------------------------------
Q30. Give a real-world login form example using querySelector().
------------------------------------------------------------

HTML:

<form id="loginForm">

    <input
        class="email"
        type="email"
    >

    <input
        class="password"
        type="password"
    >

    <button type="submit">
        Login
    </button>

</form>


JavaScript:

const form = document.querySelector("#loginForm");

const email = form.querySelector(".email");

const password = form.querySelector(".password");


form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log(email.value);
    console.log(password.value);

});


This is a common DOM pattern:

1. Find container
2. Find elements inside it
3. Listen for event
4. Read values
5. Perform logic/API request


------------------------------------------------------------
Q31. How would you select the search input in an e-commerce website?
------------------------------------------------------------

HTML:

<input
    class="search-input"
    type="text"
    placeholder="Search products"
>


JavaScript:

const searchInput = document.querySelector(
    ".search-input"
);


Then:

searchInput.addEventListener("input", () => {

    console.log(searchInput.value);

});


In a real MERN application, this value could be used
to filter products or trigger an API request.


------------------------------------------------------------
Q32. How would you select a specific product using
a data attribute?
------------------------------------------------------------

HTML:

<div class="product" data-product-id="123">
    <h2>Laptop</h2>
</div>


JavaScript:

const product = document.querySelector(
    "[data-product-id='123']"
);


This is useful for connecting DOM elements with
application data.


------------------------------------------------------------
Q33. How do you select the first button inside a form?
------------------------------------------------------------

HTML:

<form>
    <input>
    <button>Login</button>
</form>


JavaScript:

const button = document.querySelector(
    "form button"
);


------------------------------------------------------------
Q34. How do you select only direct button children of a form?
------------------------------------------------------------

JavaScript:

const button = document.querySelector(
    "form > button"
);


Remember:

space = descendant

> = direct child


------------------------------------------------------------
Q35. What does this selector mean?

input[type="email"]
------------------------------------------------------------

Answer:

Find an input element whose type attribute is exactly:

email


Example:

<input type="email">


It is called an:

Attribute selector.


------------------------------------------------------------
Q36. What does this selector mean?

button[data-action="delete"]
------------------------------------------------------------

Answer:

Find a button having:

data-action="delete"


Example:

<button data-action="delete">
    Delete
</button>


This pattern is extremely useful with event delegation.


------------------------------------------------------------
Q37. What does this selector mean?

.card .price
------------------------------------------------------------

Answer:

Find an element with class:

price

inside an element with class:

card.


Example:

<div class="card">

    <span class="price">
        $500
    </span>

</div>


------------------------------------------------------------
Q38. What does this selector mean?

.card > .price
------------------------------------------------------------

Answer:

Find .price only when it is a DIRECT child of .card.


------------------------------------------------------------
Q39. What does this selector mean?

.card.active
------------------------------------------------------------

Answer:

Find one element that has BOTH:

card

AND

active


Example:

<div class="card active"></div>


------------------------------------------------------------
Q40. What does this selector mean?

.card, .product, .user
------------------------------------------------------------

Answer:

The comma means:

OR.


It selects an element matching:

.card

OR

.product

OR

.user


However, remember:

querySelector()

still returns only the FIRST matching element.


------------------------------------------------------------
Q41. What is wrong with this code?

const buttons = document.querySelector(".btn");

buttons.forEach((button) => {
    console.log(button);
});
------------------------------------------------------------

Answer:

querySelector() returns ONE element.

It does not return a collection.

If you want multiple buttons:

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    console.log(button);
});


------------------------------------------------------------
Q42. What is wrong with this code?

const card = document.querySelector(".card");

console.log(card.querySelector(".price"));
------------------------------------------------------------

Answer:

Nothing is inherently wrong.

This is valid.

But if:

.card

does not exist, then:

card === null


and:

card.querySelector(...)

will cause an error.


Safer:

const card = document.querySelector(".card");

if (card) {

    const price = card.querySelector(".price");

}


------------------------------------------------------------
Q43. Why should you avoid overly complicated selectors?
------------------------------------------------------------

Example:

document.querySelector(
    "div.container > div.wrapper > div.card > span.price"
);


This can become fragile.

If the HTML structure changes, the selector can break.


Prefer stable selectors when possible:

document.querySelector(".product-price");


or:

document.querySelector("[data-product-price]");


The goal is maintainable code.


------------------------------------------------------------
Q44. Is using IDs always better than classes?
------------------------------------------------------------

No.

It depends on the purpose.


ID:

Good for uniquely identifying one element.


Class:

Good for reusable elements/styles/components.


Data attributes:

Good for attaching application-related identifiers
or behavior hooks.


Example:

#loginForm

.product-card

[data-product-id="123"]


------------------------------------------------------------
Q45. Why are data-* attributes useful for JavaScript?
------------------------------------------------------------

They allow you to attach custom data to HTML elements.


Example:

<button data-product-id="101">
    Delete
</button>


JavaScript:

const button = document.querySelector(
    "[data-product-id='101']"
);


You can also access:

button.dataset.productId;


This gives:

"101"


------------------------------------------------------------
Q46. What is the difference between querySelector()
and querySelectorAll() in terms of use cases?
------------------------------------------------------------

Use querySelector() when:

You need ONE element.


Examples:

Login form

Search input

Navbar

Modal

Main heading


Use querySelectorAll() when:

You need MULTIPLE elements.


Examples:

All product cards

All buttons

All navigation links

All checkboxes


------------------------------------------------------------
Q47. Does querySelector() work only on document?
------------------------------------------------------------

No.

It can be used on many DOM elements.


Example:

const card = document.querySelector(".card");

const button = card.querySelector(".buy");


The second query is scoped to card.


------------------------------------------------------------
Q48. Can querySelector() select pseudo-elements like ::before?
------------------------------------------------------------

No.

Pseudo-elements such as:

::before

::after

are not normal DOM elements that querySelector()
can return.


CSS handles those.


------------------------------------------------------------
Q49. Can querySelector() use CSS pseudo-classes?
------------------------------------------------------------

Yes, many CSS pseudo-classes can be used as selectors.


Examples:

button:first-child

li:nth-child(2)

input:checked


But remember:

These selectors select DOM elements based on their
current state/position.


------------------------------------------------------------
Q50. What happens if you use an invalid CSS selector?
------------------------------------------------------------

querySelector() throws a SyntaxError.


Example:

document.querySelector("###");


This is different from:

No matching element.


No match:

returns null.


Invalid selector:

throws an error.


------------------------------------------------------------
Q51. What is the difference between null and an invalid selector?
------------------------------------------------------------

No matching element:

document.querySelector(".unknown");

Result:

null


Invalid selector:

document.querySelector("###");

Result:

SyntaxError


This distinction is important.


------------------------------------------------------------
Q52. When can querySelector() fail because of script timing?
------------------------------------------------------------

Suppose:

<script src="script.js"></script>

comes BEFORE:

<button class="login">Login</button>


JavaScript may execute before the button exists.


Then:

document.querySelector(".login");

may return:

null


Solutions include:

1. Put script at the end of body

2. Use defer

<script defer src="script.js"></script>

3. Use DOMContentLoaded


------------------------------------------------------------
Q53. What is DOMContentLoaded?
------------------------------------------------------------

It is an event that fires when the HTML document
has been completely parsed.


Example:

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const button =
            document.querySelector(".login");

    }
);


This ensures the HTML elements have been parsed.


------------------------------------------------------------
Q54. Is querySelector() important for a MERN developer?
------------------------------------------------------------

Yes, but you do NOT need to become a DOM expert.

You should understand:

document.querySelector()

element.querySelector()

querySelectorAll()

CSS selectors

null handling

class manipulation

event listeners

event.target

event delegation


These fundamentals are enough for most MERN work.


------------------------------------------------------------
Q55. Do React developers use querySelector() frequently?
------------------------------------------------------------

Usually, no.

React encourages declarative UI development.


Instead of:

document.querySelector(".username")
    .textContent = "Navneet";


React normally uses:

const [username, setUsername] = useState("");


Then:

<h1>{username}</h1>


React controls the UI based on state.


------------------------------------------------------------
Q56. So is querySelector() useless in React?
------------------------------------------------------------

No.

There are situations where direct DOM access is useful.


For example:

Focus an input

Measure an element

Control a video

Interact with browser APIs

Integrate third-party DOM libraries


React commonly provides:

useRef()


Example:

const inputRef = useRef(null);


<input ref={inputRef} />


Then:

inputRef.current.focus();


This is usually preferable to:

document.querySelector("input");


when working inside a React component.


------------------------------------------------------------
Q57. What is the biggest mistake when using querySelector()
in React?
------------------------------------------------------------

Using manual DOM manipulation for things React should control.


For example, repeatedly doing:

document.querySelector(".modal").style.display = "none";


is usually a poor React pattern.


Instead:

const [isOpen, setIsOpen] = useState(false);


Then:

{isOpen && <Modal />}


React manages the UI.


------------------------------------------------------------
Q58. What is event delegation and how does querySelector()
relate to it?
------------------------------------------------------------

Suppose you have:

<div id="products">

    <button data-id="1">Delete</button>
    <button data-id="2">Delete</button>
    <button data-id="3">Delete</button>

</div>


Instead of attaching listeners to every button:

const container = document.querySelector("#products");

container.addEventListener("click", (event) => {

    if (event.target.matches("button")) {

        console.log(
            event.target.dataset.id
        );

    }

});


This is called:

Event Delegation.


querySelector() is commonly used to select the
parent/container where the delegated event listener
is attached.


------------------------------------------------------------
Q59. What is a stable selector?
------------------------------------------------------------

A stable selector is a selector that is unlikely to
change when the UI structure changes.


Fragile:

document.querySelector(
    "div.container > div:nth-child(2) > button"
);


More stable:

document.querySelector(
    "[data-action='delete']"
);


or:

document.querySelector(
    ".delete-button"
);


Stable selectors improve maintainability.


------------------------------------------------------------
Q60. Should you use nth-child() everywhere?
------------------------------------------------------------

No.

Example:

document.querySelector(
    ".products > div:nth-child(4)"
);


This depends heavily on the position of the element.


If products are reordered, the selector may target
a different product.


Prefer:

[data-product-id]

or a meaningful class when appropriate.


------------------------------------------------------------
Q61. What are the most important selectors a MERN developer
should know?
------------------------------------------------------------

You should be comfortable with:

1. Tag

h1


2. ID

#login


3. Class

.card


4. Multiple classes

.card.active


5. Descendant

.card .button


6. Direct child

.card > .button


7. Attribute

input[type="email"]


8. Data attribute

[data-id="123"]


9. Multiple selectors

.card, .product


10. Pseudo-classes

li:first-child

input:checked

li:nth-child(2)


That is more than enough for normal MERN development.


------------------------------------------------------------
Q62. What is the correct mental model for querySelector()?
------------------------------------------------------------

Think:

"Give me the FIRST DOM element that matches
this CSS selector."


Example:

document.querySelector(".product");


means:

"Find the first element with class product."


------------------------------------------------------------
Q63. What is the complete DOM selection flow?
------------------------------------------------------------

Think:

HTML
  ↓
DOM
  ↓
querySelector()
  ↓
Element
  ↓
Read / Modify / Listen


Example:

const button = document.querySelector(".buy");

button.textContent = "Purchased";

button.classList.add("success");

button.addEventListener("click", () => {
    console.log("Buying...");
});


This is the fundamental DOM workflow.


============================================================
              REAL INTERVIEW QUESTIONS
============================================================


------------------------------------------------------------
Q64. Interviewer: What does querySelector() return?
------------------------------------------------------------

Answer:

"It returns the first Element in the document that matches
the specified CSS selector. If no matching element exists,
it returns null."


------------------------------------------------------------
Q65. Interviewer: querySelector() vs querySelectorAll()?
------------------------------------------------------------

Answer:

"querySelector() returns the first matching Element,
whereas querySelectorAll() returns a NodeList containing
all matching elements."


------------------------------------------------------------
Q66. Interviewer: Can querySelector() search inside an element?
------------------------------------------------------------

Answer:

"Yes. querySelector() can be called on an Element, in which
case the search is scoped to that element's descendants."


Example:

const card = document.querySelector(".card");

const button = card.querySelector(".buy");


------------------------------------------------------------
Q67. Interviewer: What happens when querySelector()
finds nothing?
------------------------------------------------------------

Answer:

"It returns null."


------------------------------------------------------------
Q68. Interviewer: What happens with an invalid selector?
------------------------------------------------------------

Answer:

"It throws a SyntaxError."


------------------------------------------------------------
Q69. Interviewer: Is querySelector() an Array method?
------------------------------------------------------------

Answer:

"No. It is a DOM method available on Document and Element
objects. It returns an Element or null."


------------------------------------------------------------
Q70. Interviewer: Why might querySelector() return null
even though the element exists in the HTML?
------------------------------------------------------------

Answer:

Possible reasons include:

1. JavaScript runs before the element is parsed.

2. The selector is incorrect.

3. The element is dynamically created later.

4. The element exists in a different document/context.


A common solution for timing issues is:

defer

or

DOMContentLoaded.


------------------------------------------------------------
Q71. Interviewer: Why would you use querySelector()
instead of getElementById()?
------------------------------------------------------------

Answer:

"querySelector() supports the full CSS selector syntax,
so it is more flexible. getElementById() is specialized
for selecting an element by ID."


------------------------------------------------------------
Q72. Interviewer: Is querySelector() commonly used in React?
------------------------------------------------------------

Answer:

"Not for normal UI state management. React generally manages
the DOM declaratively. For imperative DOM operations, refs
such as useRef() are usually preferred inside components."


============================================================
              PRACTICE CODING QUESTIONS
============================================================


------------------------------------------------------------
Q73. Select the first element with class "product".
------------------------------------------------------------

Answer:

const product = document.querySelector(".product");


------------------------------------------------------------
Q74. Select the element with ID "loginForm".
------------------------------------------------------------

Answer:

const form = document.querySelector("#loginForm");


------------------------------------------------------------
Q75. Select the first button.
------------------------------------------------------------

Answer:

const button = document.querySelector("button");


------------------------------------------------------------
Q76. Select an email input.
------------------------------------------------------------

Answer:

const email = document.querySelector(
    "input[type='email']"
);


------------------------------------------------------------
Q77. Select an active card.
------------------------------------------------------------

Answer:

const card = document.querySelector(
    ".card.active"
);


------------------------------------------------------------
Q78. Select the button inside a card.
------------------------------------------------------------

Answer:

const button = document.querySelector(
    ".card .button"
);


------------------------------------------------------------
Q79. Select a direct button child of a card.
------------------------------------------------------------

Answer:

const button = document.querySelector(
    ".card > .button"
);


------------------------------------------------------------
Q80. Select the product having product ID 101.
------------------------------------------------------------

HTML:

<div class="product" data-product-id="101"></div>


Answer:

const product = document.querySelector(
    "[data-product-id='101']"
);


------------------------------------------------------------
Q81. Select all product cards.
------------------------------------------------------------

Answer:

const products = document.querySelectorAll(
    ".product"
);


------------------------------------------------------------
Q82. Select the first delete button.
------------------------------------------------------------

Answer:

const button = document.querySelector(
    ".delete-button"
);


------------------------------------------------------------
Q83. Change the text of the first heading to "Dashboard".
------------------------------------------------------------

Answer:

const heading = document.querySelector("h1");

heading.textContent = "Dashboard";


------------------------------------------------------------
Q84. Add an "active" class to the first menu item.
------------------------------------------------------------

Answer:

const item = document.querySelector(".menu-item");

item.classList.add("active");


------------------------------------------------------------
Q85. Add a click event to the first button.
------------------------------------------------------------

Answer:

const button = document.querySelector("button");

button.addEventListener("click", () => {

    console.log("Button clicked");

});


------------------------------------------------------------
Q86. Safely add a click event if the button may not exist.
------------------------------------------------------------

Answer:

const button = document.querySelector("button");

if (button) {

    button.addEventListener("click", () => {
        console.log("Clicked");
    });

}


------------------------------------------------------------
Q87. Find the price inside a specific product card.
------------------------------------------------------------

Answer:

const card = document.querySelector(".product-card");

const price = card.querySelector(".price");


This is better than searching the entire document
when you already know the card you want.


============================================================
                  FINAL CHALLENGE
============================================================


HTML:

<div class="product-card" data-product-id="101">

    <h2 class="product-name">
        Laptop
    </h2>

    <span class="price">
        $999
    </span>

    <button
        class="buy-button"
        data-action="buy">
        Buy
    </button>

</div>


------------------------------------------------------------
Q88. Select the product card.
------------------------------------------------------------

Answer:

const card = document.querySelector(
    ".product-card"
);


------------------------------------------------------------
Q89. Select the product name inside the card.
------------------------------------------------------------

Answer:

const name = card.querySelector(
    ".product-name"
);


------------------------------------------------------------
Q90. Select the price inside the card.
------------------------------------------------------------

Answer:

const price = card.querySelector(
    ".price"
);


------------------------------------------------------------
Q91. Select the buy button inside the card.
------------------------------------------------------------

Answer:

const buyButton = card.querySelector(
    ".buy-button"
);


------------------------------------------------------------
Q92. Get the product ID.
------------------------------------------------------------

Answer:

const productId = card.dataset.productId;

Result:

"101"


------------------------------------------------------------
Q93. Get the button's action.
------------------------------------------------------------

Answer:

const action = buyButton.dataset.action;

Result:

"buy"


------------------------------------------------------------
Q94. Change the product name.
------------------------------------------------------------

Answer:

name.textContent = "Gaming Laptop";


------------------------------------------------------------
Q95. Change the price.
------------------------------------------------------------

Answer:

price.textContent = "$1299";


------------------------------------------------------------
Q96. Add a click event to the Buy button.
------------------------------------------------------------

Answer:

buyButton.addEventListener("click", () => {

    console.log("Buying product:", productId);

});


============================================================
              WHAT YOU ACTUALLY NEED TO MASTER
============================================================

For MERN development, make sure you can confidently use:

1. document.querySelector()

2. element.querySelector()

3. querySelectorAll()

4. CSS selectors

5. #id

6. .class

7. .class1.class2

8. .parent .child

9. .parent > .child

10. [attribute="value"]

11. [data-id="123"]

12. null handling

13. textContent

14. classList

15. addEventListener()

16. event.target

17. event delegation

18. dataset

19. DOM timing

20. React useRef()


FINAL MENTAL MODEL:

querySelector()
        ↓
CSS selector
        ↓
FIRST matching element
        ↓
Element / null
        ↓
Read / Modify / Listen


And remember the most important distinction:

querySelector()
        → FIRST match

querySelectorAll()
        → ALL matches


For a MERN developer, you don't need to memorize hundreds
of CSS selectors. You need to understand how selectors work
and be able to read/write the common ones confidently.
============================================================

*/