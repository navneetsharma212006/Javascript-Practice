/*
# LOCAL STORAGE IN JAVASCRIPT — MERN DEVELOPER GUIDE

============================================================
1. WHAT IS LOCAL STORAGE?
============================================================

Local Storage is a browser feature that allows JavaScript to
store data in the user's browser.

The important point:

    Data stored in localStorage remains even after:

    → page refresh
    → browser restart
    → closing and reopening the browser


Example:

    localStorage.setItem("username", "Navneet");


Now the browser stores:

    username → Navneet


Later:

    const username = localStorage.getItem("username");

    console.log(username);

Output:

    Navneet


Think of localStorage as:

    A small key-value storage box inside the browser.


============================================================
2. WHY DO WE NEED LOCAL STORAGE?
============================================================

Normally, JavaScript variables lose their values when the page
is refreshed.

Example:

    let username = "Navneet";


Refresh the page.

The variable is gone.

But:

    localStorage.setItem("username", "Navneet");


After refresh:

    localStorage.getItem("username");


still gives:

    Navneet


So:

    Variable
        ↓
    Temporary


    localStorage
        ↓
    Persistent in browser


============================================================
3. BASIC SYNTAX
============================================================

STORE DATA:

    localStorage.setItem("key", "value");


GET DATA:

    localStorage.getItem("key");


REMOVE ONE ITEM:

    localStorage.removeItem("key");


REMOVE EVERYTHING:

    localStorage.clear();


These are the main methods you need to know.


============================================================
4. setItem()
============================================================

Used to store data.

Example:

    localStorage.setItem("name", "Navneet");


Syntax:

    localStorage.setItem(key, value);


Example:

    localStorage.setItem("theme", "dark");

    localStorage.setItem("language", "english");

    localStorage.setItem("city", "Indore");


Think:

    key       → value

    theme     → dark
    language  → english
    city      → Indore


============================================================
5. getItem()
============================================================

Used to retrieve stored data.

Example:

    localStorage.setItem("name", "Navneet");

    const name = localStorage.getItem("name");

    console.log(name);


Output:

    Navneet


If the key does not exist:

    localStorage.getItem("age");


returns:

    null


So:

    const age = localStorage.getItem("age");

    console.log(age);

Output:

    null


============================================================
6. removeItem()
============================================================

Removes one specific item.

Example:

    localStorage.setItem("name", "Navneet");
    localStorage.setItem("age", "20");


Now:

    localStorage.removeItem("age");


Only age is removed.

name still exists.


============================================================
7. clear()
============================================================

Removes ALL localStorage data for that origin.

Example:

    localStorage.setItem("name", "Navneet");
    localStorage.setItem("theme", "dark");

    localStorage.clear();


Now both are removed.


IMPORTANT:

Do NOT casually use:

    localStorage.clear();


in a real application.

It removes everything stored by your application
for that origin.


============================================================
8. LOCAL STORAGE STORES STRINGS
============================================================

This is VERY important.

localStorage stores values as strings.

Example:

    localStorage.setItem("age", 20);


When you retrieve it:

    const age = localStorage.getItem("age");

    console.log(age);


The value is:

    "20"


NOT:

    20


That means:

    typeof age

gives:

    "string"


============================================================
9. WHAT HAPPENS WITH BOOLEAN?
============================================================

Example:

    localStorage.setItem("isLoggedIn", true);


When you retrieve it:

    const value = localStorage.getItem("isLoggedIn");


You get:

    "true"


which is a string.

This is important because:

    "false"

is also a truthy value in JavaScript.


So this can cause a bug:

    localStorage.setItem("isLoggedIn", false);

    if (localStorage.getItem("isLoggedIn")) {
        console.log("User is logged in");
    }


The condition can still be true because:

    "false"

is a non-empty string.


============================================================
10. STORING OBJECTS
============================================================

This is one of the MOST important concepts.

Suppose:

    const user = {
        name: "Navneet",
        age: 20
    };


You cannot directly store the object properly like this:

    localStorage.setItem("user", user);


JavaScript will convert it into:

    "[object Object]"


Instead use:

    JSON.stringify()


Example:

    const user = {
        name: "Navneet",
        age: 20
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );


Now the object is converted into JSON string.


============================================================
11. JSON.stringify()
============================================================

Converts JavaScript value into a JSON string.

Example:

    const user = {
        name: "Navneet",
        age: 20
    };


    const data = JSON.stringify(user);


Result:

    '{"name":"Navneet","age":20}'


Then:

    localStorage.setItem("user", data);


Mental model:

    JavaScript Object
          ↓
    JSON.stringify()
          ↓
    JSON String
          ↓
    localStorage


============================================================
12. JSON.parse()
============================================================

When you retrieve the data, it is a string.

So we convert it back into a JavaScript object.

Example:

    const data = localStorage.getItem("user");

    const user = JSON.parse(data);


Now:

    user.name

gives:

    Navneet


Mental model:

    localStorage
          ↓
    JSON String
          ↓
    JSON.parse()
          ↓
    JavaScript Object


============================================================
13. COMPLETE OBJECT EXAMPLE
============================================================

STORE:

    const user = {
        name: "Navneet",
        age: 20
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );


GET:

    const data = localStorage.getItem("user");

    const user = JSON.parse(data);

    console.log(user.name);


Output:

    Navneet


This pattern is extremely common.


============================================================
14. WHAT IF THE DATA DOES NOT EXIST?
============================================================

Example:

    const data = localStorage.getItem("user");

    console.log(data);


If user doesn't exist:

    null


But this can cause a problem:

    JSON.parse(null)


So when data may not exist, you should handle it.

Example:

    const data = localStorage.getItem("user");

    const user = data ? JSON.parse(data) : null;


Now:

    user

will be either:

    object

or:

    null


Another common pattern:

    const user = JSON.parse(
        localStorage.getItem("user")
    );


This works with null in JSON.parse in a particular way,
but explicit handling is often clearer when building
production code.


============================================================
15. REAL INDUSTRY USE CASE — DARK MODE
============================================================

Suppose a website has:

    Light Mode
    Dark Mode


User selects:

    Dark Mode


Store:

    localStorage.setItem("theme", "dark");


When the user comes back:

    const theme = localStorage.getItem("theme");


If:

    theme === "dark"


apply dark mode.


Example:

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark");
    }


Now the user's preference survives refresh.


============================================================
16. REAL INDUSTRY USE CASE — SHOPPING CART
============================================================

Suppose an e-commerce application has:

    Cart:

    [
        {
            productId: "101",
            quantity: 2
        },
        {
            productId: "205",
            quantity: 1
        }
    ]


For a simple client-side cart, you could store:

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


When the user returns:

    const savedCart = localStorage.getItem("cart");

    const cart = savedCart
        ? JSON.parse(savedCart)
        : [];


Now the cart can survive a refresh.


IMPORTANT:

For a real authenticated e-commerce application,
the server/database should usually be the source of truth
for the user's persistent cart.

localStorage can still be useful for guest carts or
temporary client-side state.


============================================================
17. REAL INDUSTRY USE CASE — FORM DRAFT
============================================================

Suppose a user is filling a long form.

They type:

    Name: Navneet
    City: Indore


You could temporarily save a draft:

    localStorage.setItem(
        "formDraft",
        JSON.stringify(formData)
    );


If the page refreshes:

    const draft = localStorage.getItem("formDraft");


Then restore it.

This is useful for:

    long forms
    checkout forms
    application forms
    multi-step forms


But be careful about sensitive information.


============================================================
18. LOCAL STORAGE IN REACT
============================================================

Suppose you want to save the selected theme.

React state:

    const [theme, setTheme] = useState("light");


When the user changes it:

    setTheme("dark");

    localStorage.setItem("theme", "dark");


When the component starts:

    const savedTheme = localStorage.getItem("theme");


Then initialize/use that value.


A common pattern:

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });


Why use a function?

Because React can execute the initializer only when
initializing the state rather than repeatedly evaluating
the storage read on every render.


============================================================
19. LOCAL STORAGE + useEffect
============================================================

Another common React pattern:

    const [theme, setTheme] = useState("light");


    useEffect(() => {

        localStorage.setItem("theme", theme);

    }, [theme]);


Whenever:

    theme

changes, localStorage is updated.


Flow:

    User changes theme
          ↓
    setTheme("dark")
          ↓
    React state changes
          ↓
    component re-renders
          ↓
    useEffect runs
          ↓
    localStorage updated


============================================================
20. LOCAL STORAGE IS SYNCHRONOUS
============================================================

This is an important technical point.

localStorage operations are synchronous.

Example:

    const data = localStorage.getItem("user");


JavaScript waits for that operation to complete.

For small amounts of data this is generally fine.

But do NOT treat localStorage like a database.


It is not designed for:

    huge amounts of data
    complex queries
    frequent large reads/writes


============================================================
21. LOCAL STORAGE VS SESSION STORAGE
============================================================

localStorage:

    Data remains after browser restart.


sessionStorage:

    Data generally lasts only for the current browser tab/session.


Example:

    localStorage.setItem("theme", "dark");


Useful when:

    preference should persist.


sessionStorage:

    sessionStorage.setItem("step", "2");


Useful for temporary data that should disappear
when the tab/session ends.


Easy memory:

    localStorage
        → long-term browser storage


    sessionStorage
        → current tab/session storage


============================================================
22. LOCAL STORAGE VS COOKIES
============================================================

localStorage:

    JavaScript can access it directly.

    localStorage.getItem("token");


Cookies:

    Browser can automatically send applicable cookies
    with HTTP requests.


For authentication, secure applications often use
HTTP-only cookies for sensitive session/token data because
JavaScript cannot directly read an HttpOnly cookie.


Important:

    localStorage is NOT automatically sent to the server
    with every HTTP request.


If you store something in localStorage and want to send it
to your backend, your JavaScript must include it in the request.


============================================================
23. SHOULD YOU STORE JWT IN LOCAL STORAGE?
============================================================

This is an important MERN interview question.

You may see:

    localStorage.setItem("token", token);


It can work.

But there is a security concern:

    JavaScript can access localStorage.

If your application has an XSS vulnerability,
malicious JavaScript could potentially read tokens
stored there.


For sensitive authentication systems, many production
applications prefer:

    HttpOnly + Secure + appropriate SameSite cookies


because JavaScript cannot directly read an HttpOnly cookie.


The important lesson:

    Do not automatically store sensitive authentication
    credentials in localStorage just because it is convenient.


The correct approach depends on the application's
authentication architecture and security requirements.


============================================================
24. LOCAL STORAGE IS NOT A DATABASE
============================================================

Do NOT think:

    localStorage = MongoDB


They are completely different.

localStorage:

    Browser
    Client-side
    Small key-value storage
    String values
    Synchronous
    No database queries


MongoDB:

    Server/database layer
    Persistent application data
    Documents
    Queries
    Indexes
    Multiple users
    Access control


MERN:

    React
      ↓
    API
      ↓
    Express
      ↓
    MongoDB


localStorage lives on the:

    React/browser side


============================================================
25. LOCAL STORAGE IS CLIENT-SIDE
============================================================

This is very important.

Suppose:

    localStorage.setItem(
        "role",
        "admin"
    );


A user can modify it from browser DevTools.

They could change:

    admin

to:

    user


Therefore:

    NEVER trust localStorage for authorization.


Bad:

    if (localStorage.getItem("role") === "admin") {
        showAdminPanel();
    }


Even if you hide the button,
the backend must still verify permissions.


Correct architecture:

    React
      ↓
    Request
      ↓
    Backend authentication
      ↓
    Backend authorization
      ↓
    Database


Security decisions must happen on the server.


============================================================
26. LOCAL STORAGE + API CALLING
============================================================

Suppose you store a preference:

    localStorage.setItem("language", "english");


Then API calling can use it:

    const language = localStorage.getItem("language");

    fetch("/api/products", {
        headers: {
            "Accept-Language": language
        }
    });


But localStorage itself does NOT call the API.

They are separate concepts.

localStorage:

    Stores browser data.


fetch():

    Communicates with backend/API.


============================================================
27. LOCAL STORAGE + REACT AUTH STATE
============================================================

You may see code like:

    const user = JSON.parse(
        localStorage.getItem("user")
    );


This can help initialize UI state.

But remember:

    localStorage data can be changed by the user.


So:

    localStorage
        → useful for client-side persistence


    Backend
        → source of truth for authorization/security


============================================================
28. CHECKING WHETHER A KEY EXISTS
============================================================

You can do:

    const theme = localStorage.getItem("theme");

    if (theme !== null) {
        console.log("Theme exists");
    }


Remember:

    getItem()
        ↓
    value OR null


Do not rely on:

    if (localStorage.getItem("someKey"))


if empty strings or other falsy values are valid stored values.


============================================================
29. UPDATING LOCAL STORAGE
============================================================

There is no special:

    updateItem()


Instead:

    localStorage.setItem(
        "theme",
        "dark"
    );


If theme already exists,
setItem() replaces its value.


Example:

    localStorage.setItem("theme", "light");

    localStorage.setItem("theme", "dark");


Final value:

    dark


============================================================
30. LOCAL STORAGE WITH ARRAYS
============================================================

Example:

    const products = [
        "Laptop",
        "Phone",
        "Keyboard"
    ];


Store:

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );


Retrieve:

    const data = localStorage.getItem("products");

    const products = data
        ? JSON.parse(data)
        : [];


Now:

    products.map(...)

can be used normally.


============================================================
31. REAL MERN EXAMPLE — SAVING A CART
============================================================

React:

    const [cart, setCart] = useState(() => {

        const savedCart =
            localStorage.getItem("cart");

        return savedCart
            ? JSON.parse(savedCart)
            : [];
    });


Whenever cart changes:

    useEffect(() => {

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

    }, [cart]);


Flow:

    User adds product
          ↓
    setCart()
          ↓
    React state updates
          ↓
    useEffect()
          ↓
    JSON.stringify(cart)
          ↓
    localStorage
          ↓
    Refresh page
          ↓
    Read localStorage
          ↓
    JSON.parse()
          ↓
    Restore cart


This is a very practical React use case.


============================================================
32. STORAGE EVENTS
============================================================

There is also a:

    storage

event.

Example:

    window.addEventListener(
        "storage",
        (event) => {
            console.log(event);
        }
    );


It can help synchronize localStorage changes between
different documents/tabs of the same origin.

Important:

A storage event generally fires in other same-origin
documents, not in the same document that made the change.

You don't need this for normal localStorage usage,
but you should know it exists.


============================================================
33. LOCAL STORAGE LIMITATIONS
============================================================

Remember these:

    1. Stores strings.

    2. Limited storage capacity.

    3. Synchronous API.

    4. Browser-specific.

    5. JavaScript can access it.

    6. Not suitable for sensitive secrets.

    7. Not a database.

    8. Not automatically sent with API requests.

    9. Can be cleared by the user/browser.

    10. Data belongs to a browser origin.


============================================================
34. WHAT IS "ORIGIN"?
============================================================

Storage is associated with an origin.

An origin is basically determined by:

    protocol
    host
    port


For example:

    http://localhost:3000

and:

    http://localhost:5000


are different origins.


So their browser storage is separate.


============================================================
35. COMMON MISTAKES
============================================================

MISTAKE 1:

    localStorage.setItem(
        "user",
        {
            name: "Navneet"
        }
    );


Problem:

Object does not get stored as a useful JSON object.


Correct:

    localStorage.setItem(
        "user",
        JSON.stringify({
            name: "Navneet"
        })
    );


------------------------------------------------------------

MISTAKE 2:

    const user = localStorage.getItem("user");

    console.log(user.name);


Problem:

user is a string.


Correct:

    const user = JSON.parse(
        localStorage.getItem("user")
    );


------------------------------------------------------------

MISTAKE 3:

    localStorage.setItem("age", 20);

    const age = localStorage.getItem("age");

    console.log(age + 10);


Possible result:

    "2010"


Because:

    "20" + 10

becomes:

    "2010"


Convert it when needed:

    const age = Number(
        localStorage.getItem("age")
    );


------------------------------------------------------------

MISTAKE 4:

Using localStorage for authorization.

Do not trust:

    localStorage.getItem("role")


for backend security decisions.


------------------------------------------------------------

MISTAKE 5:

Storing passwords in localStorage.

NEVER store plain-text passwords there.


============================================================
36. INTERVIEW QUESTIONS
============================================================

Q1. What is localStorage?

ANSWER:

localStorage is a browser storage mechanism used to persist
key-value data on the client side.


------------------------------------------------------------

Q2. Does localStorage data survive page refresh?

ANSWER:

Yes.


------------------------------------------------------------

Q3. Does localStorage survive browser restart?

ANSWER:

Normally yes, until the data is cleared or removed.


------------------------------------------------------------

Q4. What does setItem() do?

ANSWER:

It stores a key-value pair.


------------------------------------------------------------

Q5. What does getItem() do?

ANSWER:

It retrieves a value using its key.


------------------------------------------------------------

Q6. What does removeItem() do?

ANSWER:

It removes one specific key-value pair.


------------------------------------------------------------

Q7. What does clear() do?

ANSWER:

It removes all localStorage entries for that origin.


------------------------------------------------------------

Q8. What type of data does localStorage store?

ANSWER:

Strings.


------------------------------------------------------------

Q9. How do you store an object?

ANSWER:

Use JSON.stringify().

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );


------------------------------------------------------------

Q10. How do you retrieve an object?

ANSWER:

Use JSON.parse().

    const user = JSON.parse(
        localStorage.getItem("user")
    );


------------------------------------------------------------

Q11. What happens if a key does not exist?

ANSWER:

getItem() returns null.


------------------------------------------------------------

Q12. Is localStorage asynchronous?

ANSWER:

No.

localStorage APIs are synchronous.


------------------------------------------------------------

Q13. Is localStorage a database?

ANSWER:

No.

It is browser-side key-value storage.


------------------------------------------------------------

Q14. Is localStorage automatically sent to the backend?

ANSWER:

No.

You must explicitly include stored data in a request if
you want to send it to the backend.


------------------------------------------------------------

Q15. Can users modify localStorage?

ANSWER:

Yes.

Users can inspect and modify it through browser DevTools.


------------------------------------------------------------

Q16. Should backend authorization trust localStorage?

ANSWER:

No.

The backend must independently verify authentication
and authorization.


------------------------------------------------------------

Q17. localStorage vs sessionStorage?

ANSWER:

localStorage generally persists beyond browser/tab sessions.

sessionStorage generally lasts for the current tab/session.


------------------------------------------------------------

Q18. Why can localStorage be dangerous for sensitive tokens?

ANSWER:

JavaScript can access localStorage, so an XSS vulnerability
could potentially expose sensitive values stored there.


------------------------------------------------------------

Q19. What is the difference between localStorage and cookies?

ANSWER:

localStorage is client-side storage accessible through
JavaScript.

Cookies can be automatically included in HTTP requests,
depending on their attributes.


------------------------------------------------------------

Q20. What is a good real-world use case for localStorage?

ANSWER:

Saving non-sensitive client preferences such as:

    theme
    language
    UI settings

It can also be useful for guest cart data or drafts,
depending on the application.


============================================================
37. PRACTICE QUESTIONS
============================================================

Q21. Store "dark" under "theme".

ANSWER:

    localStorage.setItem("theme", "dark");


------------------------------------------------------------

Q22. Retrieve the theme.

ANSWER:

    const theme = localStorage.getItem("theme");


------------------------------------------------------------

Q23. Delete the theme.

ANSWER:

    localStorage.removeItem("theme");


------------------------------------------------------------

Q24. Store this object:

    {
        name: "Navneet",
        age: 20
    }


ANSWER:

    const user = {
        name: "Navneet",
        age: 20
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );


------------------------------------------------------------

Q25. Retrieve the user object.

ANSWER:

    const data = localStorage.getItem("user");

    const user = data
        ? JSON.parse(data)
        : null;


------------------------------------------------------------

Q26. What will this return?

    localStorage.getItem("something");


ANSWER:

    null

if the key does not exist.


------------------------------------------------------------

Q27. What is wrong here?

    localStorage.setItem(
        "user",
        {
            name: "Navneet"
        }
    );


ANSWER:

The object should be converted to JSON first.

    JSON.stringify()


------------------------------------------------------------

Q28. What is wrong here?

    const age = localStorage.getItem("age");

    console.log(age + 10);


ANSWER:

localStorage returns strings.

If age is "20":

    "20" + 10

becomes:

    "2010"


Convert it:

    const age = Number(
        localStorage.getItem("age")
    );


------------------------------------------------------------

Q29. Should you store an admin role in localStorage
and trust it for authorization?

ANSWER:

No.

The backend must verify the user's permissions.


------------------------------------------------------------

Q30. Design a simple dark-mode system.

ANSWER:

Save:

    localStorage.setItem("theme", "dark");


Read:

    const theme = localStorage.getItem("theme");


Then apply the appropriate UI theme.


============================================================
38. MOST IMPORTANT THINGS TO REMEMBER
============================================================

For MERN development, remember these:

    localStorage.setItem()
        ↓
    Store


    localStorage.getItem()
        ↓
    Read


    localStorage.removeItem()
        ↓
    Delete one


    localStorage.clear()
        ↓
    Delete all


    JSON.stringify()
        ↓
    Object → String


    JSON.parse()
        ↓
    String → Object


    localStorage
        ↓
    Browser/client side


    MongoDB
        ↓
    Database/server side


    localStorage
        ↓
    NOT trusted for security


============================================================
39. FINAL MERN MENTAL MODEL
============================================================

                    BROWSER
                       |
                       ↓
                  React App
                       |
             ┌─────────┴─────────┐
             ↓                   ↓
         React State        localStorage
             |                   |
             |             Persistent
             |             browser data
             |
             ↓
          fetch()
             |
             ↓
        Express API
             |
             ↓
          Mongoose
             |
             ↓
          MongoDB


Think of the roles like this:
    React State
        → What UI currently needs


    localStorage
        → What the browser should remember


    Backend
        → Business logic + security


    MongoDB
        → Persistent application data


============================================================
ONE-LINE CHEAT SHEET
============================================================

localStorage
→ Browser-side persistent key-value storage

setItem()
→ Store

getItem()
→ Read

removeItem()
→ Remove one

clear()
→ Remove all

Stores
→ Strings

Object → String
→ JSON.stringify()

String → Object
→ JSON.parse()

Missing key
→ null

Survives refresh
→ Yes

Survives browser restart
→ Normally yes

Automatically sent to API
→ No

Database
→ No

Security authority
→ No

Good uses
→ Theme, language, UI preferences, guest cart/drafts

Sensitive authentication data
→ Be careful; HttpOnly cookies are often preferred

CORE IDEA:

    JavaScript
        ↓
    localStorage.setItem()
        ↓
    Browser remembers data
        ↓
    Page refresh
        ↓
    getItem()
        ↓
    JavaScript gets data again

And in MERN:
    React
      ↓
    localStorage     ← client-side persistence
      ↓
    fetch()
      ↓
    Express
      ↓
    MongoDB           ← server-side persistent data


If you understand this distinction clearly, you will avoid
one of the most common beginner mistakes:

    "If it is stored in localStorage, it must be secure."

It is NOT secure storage. It is simply browser-side storage.
*/