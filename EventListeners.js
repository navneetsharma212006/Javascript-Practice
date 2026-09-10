/*
============================================================
              JAVASCRIPT EVENT LISTENERS
        Beginner → Industry → MERN → Interview
============================================================


------------------------------------------------------------
Q1. What is an event?
------------------------------------------------------------

An event is something that happens in the browser.

Examples:

→ User clicks a button
→ User types in an input
→ User submits a form
→ User moves the mouse
→ User presses a keyboard key
→ A page finishes loading
→ A checkbox changes
→ A file is selected


For example:

User clicks:

<button>Login</button>

The browser generates a:

"click" event


------------------------------------------------------------
Q2. What is an event listener?
------------------------------------------------------------

An event listener is JavaScript code that waits for a
specific event and runs a function when that event happens.


Basic syntax:

element.addEventListener("event", function);


Example:

const button = document.querySelector("#login");

button.addEventListener("click", () => {

    console.log("Login button clicked");

});


The meaning is:

"Listen to this button for a click.
When a click happens, run this function."


============================================================
              THE MOST IMPORTANT CONCEPT
============================================================


Think about an event listener like this:

USER ACTION
     ↓
Browser detects event
     ↓
Event listener receives event
     ↓
Callback function runs
     ↓
Your application logic executes


Example:

User clicks Login
       ↓
"click" event
       ↓
addEventListener()
       ↓
callback function
       ↓
validate form
       ↓
send API request
       ↓
Express backend
       ↓
Database


This is the basic frontend → backend flow.


------------------------------------------------------------
Q3. What is the syntax of addEventListener()?
------------------------------------------------------------

Syntax:

element.addEventListener(
    "event",
    function
);


Example:

button.addEventListener(
    "click",
    () => {
        console.log("Clicked");
    }
);


There are two main things:

1. Event type

"click"


2. Callback function

() => {
    console.log("Clicked");
}


------------------------------------------------------------
Q4. Why do we pass "click" as a string?
------------------------------------------------------------

Because "click" tells the browser which event
we want to listen for.


Example:

"click"

means:

Listen for clicks.


Other examples:

"input"

"change"

"submit"

"keydown"

"mouseover"


------------------------------------------------------------
Q5. What is a callback function in an event listener?
------------------------------------------------------------

The function that runs when the event occurs
is the callback function.


Example:

button.addEventListener("click", () => {

    console.log("Clicked");

});


This function:

() => {
    console.log("Clicked");
}

is the callback.


It does NOT execute immediately.

It waits until the click happens.


------------------------------------------------------------
Q6. What is the difference between these two?

button.addEventListener("click", greet);

button.addEventListener("click", greet());
------------------------------------------------------------

Correct:

button.addEventListener("click", greet);


Why?

Because we are passing the function.


Wrong:

button.addEventListener("click", greet());


Because greet() calls the function immediately.

The browser needs the function itself so it can call
it later when the event occurs.


IMPORTANT:

greet
→ function reference


greet()
→ function execution


------------------------------------------------------------
Q7. Can we use a normal function instead of an arrow function?
------------------------------------------------------------

Yes.

Example:

function handleClick() {

    console.log("Button clicked");

}


button.addEventListener(
    "click",
    handleClick
);


Arrow functions are simply very common for short
event handlers.


============================================================
                 COMMON EVENTS
============================================================


------------------------------------------------------------
Q8. What is the click event?
------------------------------------------------------------

It happens when the user clicks an element.


Example:

const button =
    document.querySelector("#login");

button.addEventListener("click", () => {

    console.log("Login clicked");

});


Common use cases:

→ Login button
→ Delete button
→ Add to cart
→ Open modal
→ Submit action
→ Navigation


------------------------------------------------------------
Q9. What is the input event?
------------------------------------------------------------

The input event happens when the value of an input
changes while the user is typing/editing it.


Example:

const search =
    document.querySelector("#search");

search.addEventListener("input", () => {

    console.log(search.value);

});


If the user types:

l

then:

"l"


then:

la


then:

lap


then:

lapt


The event can fire each time the value changes.


Very useful for:

→ Search
→ Live validation
→ Filters
→ Autocomplete


------------------------------------------------------------
Q10. What is the change event?
------------------------------------------------------------

The change event is commonly used when the value
of an element has changed and the change is committed.


Example:

const country =
    document.querySelector("#country");

country.addEventListener("change", () => {

    console.log(country.value);

});


Very common for:

→ Dropdowns
→ Checkboxes
→ Select fields
→ Form controls


------------------------------------------------------------
Q11. What is the submit event?
------------------------------------------------------------

It occurs when a form is submitted.


HTML:

<form id="loginForm">

    <input type="email">

    <input type="password">

    <button type="submit">
        Login
    </button>

</form>


JavaScript:

const form =
    document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log("Form submitted");

});


This is one of the most important events for
web application development.


------------------------------------------------------------
Q12. Why do we use preventDefault() with forms?
------------------------------------------------------------

Normally, submitting a traditional HTML form can cause
the browser to perform its default submission behavior,
which can navigate/reload the page.


In a JavaScript/MERN application, we often want to
handle the submission ourselves.


So:

event.preventDefault();


stops the browser's default action.


Then we can:

→ validate data
→ collect input
→ call an API
→ show loading state
→ display errors


Example:

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const data = {
        email: email.value,
        password: password.value
    };

    // API request here

});


============================================================
              REAL INDUSTRY USE CASE
                    LOGIN FLOW
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

const form =
    document.querySelector("#loginForm");

const email =
    document.querySelector("#email");

const password =
    document.querySelector("#password");


form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const loginData = {
        email: email.value,
        password: password.value
    };

    console.log(loginData);

});


In a real MERN application, the next step would be
something like:

Frontend
   ↓
POST /api/login
   ↓
Express
   ↓
Validate credentials
   ↓
Database
   ↓
Response
   ↓
React updates UI


This is how event listeners connect user actions
to application behavior.


------------------------------------------------------------
Q13. What is the event object?
------------------------------------------------------------

When an event occurs, the browser provides information
about that event.

This information is available through the event object.


Example:

button.addEventListener("click", (event) => {

    console.log(event);

});


The parameter:

event

contains information about what happened.


------------------------------------------------------------
Q14. Do we have to call the event object "event"?
------------------------------------------------------------

No.

The name can be anything.


These are equivalent:

button.addEventListener("click", (event) => {
    console.log(event);
});


button.addEventListener("click", (e) => {
    console.log(e);
});


button.addEventListener("click", (abc) => {
    console.log(abc);
});


But industry code usually uses:

event

or:

e


------------------------------------------------------------
Q15. What is event.target?
------------------------------------------------------------

event.target tells you the element where the event
originated.


Example:

button.addEventListener("click", (event) => {

    console.log(event.target);

});


If the user clicks the button:

event.target

is that button.


This is extremely important for event delegation.


------------------------------------------------------------
Q16. What is event.currentTarget?
------------------------------------------------------------

event.currentTarget is the element on which the
event listener is currently registered.


Example:

const button =
    document.querySelector("#login");

button.addEventListener("click", (event) => {

    console.log(event.target);
    console.log(event.currentTarget);

});


If the button itself was clicked, both may refer
to the button.


But they can differ when events bubble through
parent elements.


------------------------------------------------------------
Q17. What is event bubbling?
------------------------------------------------------------

When an event happens on a child element, it can
propagate upward through its ancestors.


Example:

<div id="parent">

    <button id="child">
        Click
    </button>

</div>


If the button is clicked:

button
  ↓
parent
  ↓
body
  ↓
document


This upward propagation is called:

EVENT BUBBLING.


------------------------------------------------------------
Q18. Why is event bubbling important?
------------------------------------------------------------

Because it allows:

EVENT DELEGATION.


Instead of attaching listeners to many child elements,
we can sometimes attach one listener to their parent.


Example:

const products =
    document.querySelector("#products");

products.addEventListener("click", (event) => {

    console.log(event.target);

});


This can be very useful for dynamic lists.


============================================================
              REAL INDUSTRY USE CASE
                  SHOPPING CART
============================================================


HTML:

<div id="products">

    <button data-id="101">
        Add to Cart
    </button>

    <button data-id="102">
        Add to Cart
    </button>

    <button data-id="103">
        Add to Cart
    </button>

</div>


Instead of adding three separate listeners:

const products =
    document.querySelector("#products");


products.addEventListener("click", (event) => {

    if (
        event.target.matches("button")
    ) {

        const productId =
            event.target.dataset.id;

        console.log(
            "Add product:",
            productId
        );

    }

});


Now one listener handles all buttons.


If products are dynamically added later,
the parent listener can still handle clicks
that bubble up from matching buttons.


This is called:

EVENT DELEGATION.


------------------------------------------------------------
Q19. What is event.preventDefault()?
------------------------------------------------------------

It prevents the browser's default action for
that event.


Example:

form.addEventListener("submit", (event) => {

    event.preventDefault();

});


Common use cases:

→ Prevent traditional form navigation
→ Handle custom form submission
→ Prevent link navigation when appropriate
→ Custom browser interaction


IMPORTANT:

preventDefault()

does NOT stop event propagation.


------------------------------------------------------------
Q20. What is the difference between preventDefault()
and stopPropagation()?
------------------------------------------------------------

preventDefault():

Stops the browser's default behavior.


stopPropagation():

Stops the event from propagating further
through the event flow.


Example:

event.preventDefault();


means:

"Don't perform the browser's default action."


event.stopPropagation();


means:

"Don't continue propagating this event."


They solve different problems.


------------------------------------------------------------
Q21. What is stopPropagation()?
------------------------------------------------------------

Example:

button.addEventListener("click", (event) => {

    event.stopPropagation();

});


It stops the event from continuing through
the propagation path.


Use it only when you actually need it.

Overusing stopPropagation() can make event behavior
harder to understand.


============================================================
              KEYBOARD EVENTS
============================================================


------------------------------------------------------------
Q22. What is keydown?
------------------------------------------------------------

The keydown event happens when a keyboard key is pressed.


Example:

document.addEventListener("keydown", (event) => {

    console.log(event.key);

});


If the user presses:

A

Output:

A


------------------------------------------------------------
Q23. What is keyup?
------------------------------------------------------------

keyup occurs when the key is released.


Example:

document.addEventListener("keyup", (event) => {

    console.log(event.key);

});


Common use cases:

→ Keyboard shortcuts
→ Search interactions
→ Games
→ Accessibility controls


------------------------------------------------------------
Q24. How can you detect Enter?
------------------------------------------------------------

Example:

document.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        console.log("Enter pressed");

    }

});


------------------------------------------------------------
Q25. How can you detect Escape?
------------------------------------------------------------

Example:

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        console.log("Escape pressed");

    }

});


Common use:

Closing a modal.


============================================================
              MOUSE EVENTS
============================================================


Common mouse events:

click

dblclick

mousedown

mouseup

mousemove

mouseover

mouseout

mouseenter

mouseleave


You don't need to memorize every mouse event immediately.

For MERN development, understand:

click

mouseenter

mouseleave

and basic pointer/mouse behavior.


------------------------------------------------------------
Q26. What is mouseenter?
------------------------------------------------------------

It fires when the pointer enters an element.


Example:

card.addEventListener("mouseenter", () => {

    console.log("Mouse entered");

});


Useful for:

→ Hover interactions
→ Product previews
→ Tooltips


============================================================
              MULTIPLE EVENT LISTENERS
============================================================


------------------------------------------------------------
Q27. Can one element have multiple event listeners?
------------------------------------------------------------

Yes.


Example:

button.addEventListener("click", () => {

    console.log("First listener");

});


button.addEventListener("click", () => {

    console.log("Second listener");

});


Both listeners can run when the event occurs.


------------------------------------------------------------
Q28. Can one function handle multiple events?
------------------------------------------------------------

Yes, but usually separate listeners make the
intent clearer.


Example:

function handleInteraction() {

    console.log("Interaction");

}


button.addEventListener(
    "click",
    handleInteraction
);


button.addEventListener(
    "dblclick",
    handleInteraction
);


============================================================
              REMOVING EVENT LISTENERS
============================================================


------------------------------------------------------------
Q29. How do you remove an event listener?
------------------------------------------------------------

Use:

removeEventListener()


But there is an important rule:

You must provide the SAME function reference.


Correct:

function handleClick() {

    console.log("Clicked");

}


button.addEventListener(
    "click",
    handleClick
);


button.removeEventListener(
    "click",
    handleClick
);


------------------------------------------------------------
Q30. Why doesn't this work?

button.addEventListener("click", () => {
    console.log("Clicked");
});

button.removeEventListener("click", () => {
    console.log("Clicked");
});
------------------------------------------------------------

Because these are two different function objects.


Even though the code looks identical,
they are different function references.


Correct:

function handleClick() {
    console.log("Clicked");
}


button.addEventListener(
    "click",
    handleClick
);


button.removeEventListener(
    "click",
    handleClick
);


This becomes especially important with cleanup.


============================================================
              OPTIONS YOU SHOULD KNOW
============================================================


------------------------------------------------------------
Q31. What is once?
------------------------------------------------------------

You can make a listener execute only once.


Example:

button.addEventListener(
    "click",
    () => {
        console.log("Clicked once");
    },
    {
        once: true
    }
);


After the first click, the listener is automatically removed.


Useful for:

→ One-time interactions
→ Initialization actions
→ Temporary event handling


------------------------------------------------------------
Q32. What is the passive option?
------------------------------------------------------------

Example:

element.addEventListener(
    "touchstart",
    handleTouch,
    {
        passive: true
    }
);


It tells the browser that the listener will not call
preventDefault() for that event.


It is mainly relevant to performance-sensitive
scroll/touch interactions.


You don't need to use it everywhere.


============================================================
              ASYNC EVENT HANDLERS
============================================================


------------------------------------------------------------
Q33. Can an event listener callback be async?
------------------------------------------------------------

Yes.


Example:

button.addEventListener(
    "click",
    async () => {

        const response =
            await fetch("/api/products");

        const data =
            await response.json();

        console.log(data);

    }
);


This is very common in real applications.


User action
   ↓
Event listener
   ↓
API request
   ↓
Server
   ↓
Response
   ↓
Update UI


------------------------------------------------------------
Q34. Give a real MERN example of an async event listener.
------------------------------------------------------------

Example:

button.addEventListener(
    "click",
    async () => {

        const response =
            await fetch("/api/cart", {
                method: "POST"
            });

        const data =
            await response.json();

        console.log(data);

    }
);


In a real MERN application:

Click Add to Cart
       ↓
Event listener
       ↓
POST request
       ↓
Express route
       ↓
Database
       ↓
Response
       ↓
Update cart UI


============================================================
              ERROR HANDLING
============================================================


------------------------------------------------------------
Q35. How should you handle errors in an async event listener?
------------------------------------------------------------

Use try/catch.


Example:

button.addEventListener(
    "click",
    async () => {

        try {

            const response =
                await fetch("/api/login");

            if (!response.ok) {
                throw new Error(
                    "Request failed"
                );
            }

            const data =
                await response.json();

            console.log(data);

        } catch (error) {

            console.error(error);

        }

    }
);


This is important in production applications.


============================================================
              EVENT LISTENERS + REACT
============================================================


------------------------------------------------------------
Q36. Does React use event listeners?
------------------------------------------------------------

Yes.

But React normally handles events through JSX.


Example:

<button onClick={handleClick}>
    Login
</button>


Instead of manually doing:

document
    .querySelector("#login")
    .addEventListener("click", handleClick);


React gives you:

onClick


This is one of the fundamental differences between
vanilla DOM programming and React.


------------------------------------------------------------
Q37. What is the React equivalent of addEventListener("click")?
------------------------------------------------------------

Vanilla JavaScript:

button.addEventListener(
    "click",
    handleClick
);


React:

<button onClick={handleClick}>
    Login
</button>


React manages the event handling for you.


------------------------------------------------------------
Q38. How do you pass an event to a React handler?
------------------------------------------------------------

Example:

function handleClick(event) {

    console.log(event);

}


<button onClick={handleClick}>
    Login
</button>


React passes the event object to the handler.


------------------------------------------------------------
Q39. What is an important React event mistake?
------------------------------------------------------------

Do NOT execute the function during rendering.


Wrong:

<button onClick={handleClick()}>
    Login
</button>


This calls the function immediately.


Correct:

<button onClick={handleClick}>
    Login
</button>


If arguments are needed:

<button
    onClick={() => handleDelete(101)}
>
    Delete
</button>


============================================================
              PERFORMANCE / INDUSTRY PRACTICES
============================================================


------------------------------------------------------------
Q40. Should you attach hundreds of unnecessary listeners?
------------------------------------------------------------

Not if you can avoid it.

For large dynamic lists, event delegation can sometimes
reduce the number of listeners.


Example:

Instead of:

1000 buttons
+
1000 listeners


you may use:

1 parent
+
1 listener


when delegation fits the interaction.


But don't blindly use delegation everywhere.

Choose based on the actual UI and behavior.


------------------------------------------------------------
Q41. What is a memory leak related to event listeners?
------------------------------------------------------------

If an event listener keeps references to objects or DOM
elements that are no longer needed, it can contribute
to memory retention.


This is especially relevant when dynamically creating
and removing UI.


In frameworks like React, cleanup is important for
listeners attached manually to external targets.


------------------------------------------------------------
Q42. How do you clean up a manually attached listener in React?
------------------------------------------------------------

Using useEffect cleanup.


Example:

useEffect(() => {

    function handleResize() {
        console.log(window.innerWidth);
    }

    window.addEventListener(
        "resize",
        handleResize
    );

    return () => {

        window.removeEventListener(
            "resize",
            handleResize
        );

    };

}, []);


This is important because the component may unmount.


============================================================
              EVENT LISTENER MENTAL MODEL
============================================================


You should understand this flow:


ELEMENT
   ↓
addEventListener()
   ↓
EVENT TYPE
   ↓
CALLBACK
   ↓
EVENT OBJECT
   ↓
APPLICATION LOGIC


Example:

button.addEventListener(
    "click",
    (event) => {

        console.log(event.target);

    }
);


Meaning:

BUTTON
  ↓
Listen for CLICK
  ↓
When click happens
  ↓
Run callback
  ↓
Receive event object
  ↓
Use event.target
  ↓
Perform application logic


============================================================
              MERN DEVELOPER CHECKLIST
============================================================


You should confidently understand:


✓ What an event is

✓ What an event listener is

✓ addEventListener()

✓ Event type

✓ Callback function

✓ Function reference vs function call

✓ click

✓ input

✓ change

✓ submit

✓ keydown

✓ keyup

✓ event object

✓ event.target

✓ event.currentTarget

✓ preventDefault()

✓ stopPropagation()

✓ Event bubbling

✓ Event delegation

✓ data-* attributes

✓ dataset

✓ removeEventListener()

✓ Same function reference for removal

✓ once

✓ Basic async event handlers

✓ try/catch with async handlers

✓ React onClick / onChange / onSubmit

✓ React event cleanup with useEffect


============================================================
                 FINAL PRACTICE
============================================================


HTML:

<form id="signupForm">

    <input
        id="email"
        type="email"
    >

    <input
        id="password"
        type="password"
    >

    <button type="submit">
        Create Account
    </button>

</form>


------------------------------------------------------------
Q43. Select the form.
------------------------------------------------------------

Answer:

const form =
    document.querySelector("#signupForm");


------------------------------------------------------------
Q44. Select the email input.
------------------------------------------------------------

Answer:

const email =
    document.querySelector("#email");


------------------------------------------------------------
Q45. Add a submit event listener.
------------------------------------------------------------

Answer:

form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log("Form submitted");

});


------------------------------------------------------------
Q46. Get the email entered by the user.
------------------------------------------------------------

Answer:

const emailValue = email.value;


------------------------------------------------------------
Q47. How would you make the submit handler async?
------------------------------------------------------------

Answer:

form.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();

        try {

            const response =
                await fetch("/api/signup", {
                    method: "POST"
                });

            const data =
                await response.json();

            console.log(data);

        } catch (error) {

            console.error(error);

        }

    }
);


============================================================
                 INTERVIEW RAPID FIRE
============================================================


Q48. What is an event?

Answer:

An action or occurrence detected by the browser,
such as click, input, submit, or keydown.


Q49. What is an event listener?

Answer:

A mechanism for running a callback when a specified
event occurs on a target.


Q50. What does addEventListener() do?

Answer:

It registers a callback function for a particular event
on a target.


Q51. Why do we pass handleClick instead of handleClick()?

Answer:

handleClick passes the function reference.

handleClick() executes the function immediately.


Q52. What is event.target?

Answer:

The element from which the event originated.


Q53. What is event.currentTarget?

Answer:

The element on which the listener is currently registered.


Q54. What is event bubbling?

Answer:

The propagation of an event from the target upward through
its ancestors.


Q55. What is event delegation?

Answer:

Handling events for multiple child elements by placing
a listener on a suitable common ancestor and using the
event information to determine the target.


Q56. What does preventDefault() do?

Answer:

It prevents the browser's default action for the event.


Q57. What does stopPropagation() do?

Answer:

It stops the event from continuing through propagation.


Q58. How do you remove an event listener?

Answer:

Use removeEventListener() with the same event type
and the same function reference.


Q59. How does React handle events?

Answer:

React normally uses JSX event props such as:

onClick
onChange
onSubmit

instead of manually calling addEventListener()
for component UI.


============================================================
              THE 5 THINGS TO REMEMBER FIRST
============================================================


If you forget everything else, remember these:


1.

element.addEventListener(
    "click",
    handleClick
);


2.

event.target

→ Element where the event originated.


3.

event.preventDefault()

→ Stop default browser behavior.


4.

Event bubbling

→ Event can move from child toward ancestors.


5.

Event delegation

→ One parent listener can handle many children.


============================================================
                    BIG PICTURE
============================================================


Vanilla JavaScript:


USER
 ↓
CLICK / INPUT / SUBMIT
 ↓
BROWSER EVENT
 ↓
addEventListener()
 ↓
CALLBACK
 ↓
APPLICATION LOGIC
 ↓
fetch()
 ↓
EXPRESS API
 ↓
DATABASE
 ↓
RESPONSE
 ↓
UPDATE UI


React/MERN:


USER
 ↓
React event
 ↓
onClick / onChange / onSubmit
 ↓
Handler
 ↓
State / API request
 ↓
Express
 ↓
Database
 ↓
Response
 ↓
setState()
 ↓
React re-renders UI


This is why event listeners are one of the most important
JavaScript concepts for a MERN developer.

MASTER THIS FLOW:

USER ACTION
     ↓
EVENT
     ↓
LISTENER
     ↓
CALLBACK
     ↓
LOGIC
     ↓
API
     ↓
BACKEND
     ↓
DATABASE
     ↓
RESPONSE
     ↓
UI UPDATE
============================================================
*/