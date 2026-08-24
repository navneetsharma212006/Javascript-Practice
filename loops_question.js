/*

=========================================================
        JAVASCRIPT LOOPS - PRACTICE QUESTIONS
        BEGINNER → ADVANCED
        WITH ANSWERS + EXPLANATIONS
=========================================================

IMPORTANT:

Try to solve each question yourself first.

Only then check the answer.

The goal is to understand:

1. for loop
2. while loop
3. do...while loop
4. for...of
5. for...in
6. break
7. continue
8. nested loops
9. infinite loops
10. real-world array processing


=========================================================
LEVEL 1 — BEGINNER
=========================================================


---------------------------------------------------------
Q1. Print numbers from 1 to 5
---------------------------------------------------------

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


ANSWER:

1
2
3
4
5


Working:

i = 1 → print 1 → i++

i = 2 → print 2 → i++

i = 3 → print 3 → i++

i = 4 → print 4 → i++

i = 5 → print 5 → i++

i = 6

6 <= 5 → false

Loop stops.


=========================================================


---------------------------------------------------------
Q2. What will be the output?
---------------------------------------------------------

for (let i = 0; i < 3; i++) {
    console.log(i);
}


ANSWER:

0
1
2


Explanation:

The loop starts at 0.

It continues while:

i < 3


When i becomes 3:

3 < 3 → false

So the loop stops.


=========================================================


---------------------------------------------------------
Q3. Print numbers from 10 to 1
---------------------------------------------------------

ANSWER:

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


Output:

10
9
8
7
6
5
4
3
2
1


=========================================================


---------------------------------------------------------
Q4. Print only even numbers from 1 to 10
---------------------------------------------------------

ANSWER:

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}


Output:

2
4
6
8
10


% means remainder.

Example:

4 % 2 = 0

So 4 is even.


=========================================================


---------------------------------------------------------
Q5. What will be the output?
---------------------------------------------------------

let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}


ANSWER:

1
2
3


=========================================================


---------------------------------------------------------
Q6. What will happen?
---------------------------------------------------------

let i = 1;

while (i <= 5) {
    console.log(i);
}


ANSWER:

Infinite Loop


Why?

Because i never changes.

i is always:

1


So:

1 <= 5

is always true.


Correct code:

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


=========================================================
LEVEL 2 — BASIC UNDERSTANDING
=========================================================


---------------------------------------------------------
Q7. What will be the output?
---------------------------------------------------------

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }

    console.log(i);
}


ANSWER:

1
2


Explanation:

When i becomes 3:

break

stops the complete loop.


=========================================================


---------------------------------------------------------
Q8. What will be the output?
---------------------------------------------------------

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}


ANSWER:

1
2
4
5


Explanation:

continue skips only the current iteration.

When:

i = 3

↓

continue

↓

console.log(3) is skipped.


The loop continues.


=========================================================


---------------------------------------------------------
Q9. What will be the output?
---------------------------------------------------------

for (let i = 0; i < 5; i += 2) {
    console.log(i);
}


ANSWER:

0
2
4


Working:

i = 0

i = 0 + 2 = 2

i = 2 + 2 = 4

i = 4 + 2 = 6

6 < 5 → false


=========================================================


---------------------------------------------------------
Q10. What will be the output?
---------------------------------------------------------

let i = 5;

while (i > 0) {
    console.log(i);
    i -= 2;
}


ANSWER:

5
3
1


=========================================================


---------------------------------------------------------
Q11. What will be the output?
---------------------------------------------------------

let i = 10;

do {
    console.log(i);
} while (i < 5);


ANSWER:

10


Explanation:

do...while executes the code first.

After that:

10 < 5

↓

false


So it stops.


=========================================================
LEVEL 3 — ARRAYS WITH LOOPS
=========================================================


---------------------------------------------------------
Q12. Print every element of the array
---------------------------------------------------------

const numbers = [10, 20, 30, 40];


ANSWER:

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


Output:

10
20
30
40


=========================================================


---------------------------------------------------------
Q13. What will be the output?
---------------------------------------------------------

const fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}


ANSWER:

0 Apple
1 Mango
2 Banana


=========================================================


---------------------------------------------------------
Q14. Find the sum of all numbers
---------------------------------------------------------

const numbers = [10, 20, 30, 40];


ANSWER:

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);


Output:

100


Working:

sum = 0

0 + 10 = 10

10 + 20 = 30

30 + 30 = 60

60 + 40 = 100


=========================================================


---------------------------------------------------------
Q15. Find the largest number
---------------------------------------------------------

const numbers = [10, 50, 20, 80, 40];


ANSWER:

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }

}

console.log(largest);


Output:

80


=========================================================


---------------------------------------------------------
Q16. Count how many even numbers exist
---------------------------------------------------------

const numbers = [10, 15, 20, 23, 30];


ANSWER:

let count = 0;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        count++;
    }

}

console.log(count);


Output:

3


Even numbers:

10
20
30


=========================================================
LEVEL 4 — for...of
=========================================================


---------------------------------------------------------
Q17. Print all values using for...of
---------------------------------------------------------

const technologies = [
    "JavaScript",
    "React",
    "Node.js"
];


ANSWER:

for (const technology of technologies) {
    console.log(technology);
}


Output:

JavaScript
React
Node.js


=========================================================


---------------------------------------------------------
Q18. Find the total using for...of
---------------------------------------------------------

const prices = [100, 200, 300];


ANSWER:

let total = 0;

for (const price of prices) {
    total += price;
}

console.log(total);


Output:

600


=========================================================


---------------------------------------------------------
Q19. What will be the output?
---------------------------------------------------------

const name = "JS";

for (const character of name) {
    console.log(character);
}


ANSWER:

J
S


Reason:

Strings are iterable.

So for...of can loop through each character.


=========================================================
LEVEL 5 — for...in
=========================================================


---------------------------------------------------------
Q20. What will be the output?
---------------------------------------------------------

const user = {
    name: "Navneet",
    age: 20,
    role: "Developer"
};

for (const key in user) {
    console.log(key);
}


ANSWER:

name
age
role


for...in gives:

KEYS


=========================================================


---------------------------------------------------------
Q21. Print both key and value
---------------------------------------------------------

const user = {
    name: "Navneet",
    age: 20
};


ANSWER:

for (const key in user) {
    console.log(key, user[key]);
}


Output:

name Navneet
age 20


=========================================================
LEVEL 6 — break AND continue
=========================================================


---------------------------------------------------------
Q22. Find "React" and stop searching
---------------------------------------------------------

const technologies = [
    "HTML",
    "CSS",
    "React",
    "Node.js"
];


ANSWER:

for (const technology of technologies) {

    if (technology === "React") {
        console.log("React Found");
        break;
    }

}


Output:

React Found


After finding React:

break

stops the loop.


=========================================================


---------------------------------------------------------
Q23. Skip negative numbers
---------------------------------------------------------

const numbers = [10, -5, 20, -10, 30];


ANSWER:

for (const number of numbers) {

    if (number < 0) {
        continue;
    }

    console.log(number);
}


Output:

10
20
30


=========================================================
LEVEL 7 — NESTED LOOPS
=========================================================


---------------------------------------------------------
Q24. What will be the output?
---------------------------------------------------------

for (let i = 1; i <= 2; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }

}


ANSWER:

1 1
1 2
1 3
2 1
2 2
2 3


Working:

First:

i = 1

Inner loop completely runs:

j = 1
j = 2
j = 3


Then:

i = 2

Inner loop again completely runs.


=========================================================


---------------------------------------------------------
Q25. Print this pattern
---------------------------------------------------------

*
**
***
****


ANSWER:

for (let i = 1; i <= 4; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}


=========================================================
LEVEL 8 — MEDIUM TO HARD
=========================================================


---------------------------------------------------------
Q26. Reverse an array manually
---------------------------------------------------------

const numbers = [10, 20, 30, 40];


ANSWER:

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}


Output:

40
30
20
10


=========================================================


---------------------------------------------------------
Q27. Count positive and negative numbers
---------------------------------------------------------

const numbers = [10, -5, 0, 20, -10];


ANSWER:

let positive = 0;
let negative = 0;

for (const number of numbers) {

    if (number > 0) {
        positive++;
    } else if (number < 0) {
        negative++;
    }

}

console.log("Positive:", positive);
console.log("Negative:", negative);


Output:

Positive: 2
Negative: 2


0 is neither positive nor negative.


=========================================================


---------------------------------------------------------
Q28. Find the first even number and stop
---------------------------------------------------------

const numbers = [11, 15, 21, 28, 30];


ANSWER:

for (const number of numbers) {

    if (number % 2 === 0) {
        console.log(number);
        break;
    }

}


Output:

28


Why?

The loop finds:

11 → not even
15 → not even
21 → not even
28 → even

↓

Print

↓

break


30 is never checked.


=========================================================
LEVEL 9 — INDUSTRY BASED QUESTIONS
=========================================================


---------------------------------------------------------
Q29. Calculate shopping cart total
---------------------------------------------------------

const cart = [
    { name: "Phone", price: 20000 },
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 }
];


ANSWER:

let totalAmount = 0;

for (const item of cart) {
    totalAmount += item.price;
}

console.log(totalAmount);


Output:

71000


Industry use:

E-commerce

Billing system

Invoice system


=========================================================


---------------------------------------------------------
Q30. Calculate total revenue from completed orders only
---------------------------------------------------------

const orders = [

    {
        id: 1,
        amount: 1000,
        status: "completed"
    },

    {
        id: 2,
        amount: 2000,
        status: "pending"
    },

    {
        id: 3,
        amount: 500,
        status: "completed"
    }

];


ANSWER:

let revenue = 0;

for (const order of orders) {

    if (order.status !== "completed") {
        continue;
    }

    revenue += order.amount;
}

console.log(revenue);


Output:

1500


=========================================================


---------------------------------------------------------
Q31. Find an out-of-stock product
---------------------------------------------------------

const products = [

    { name: "Tyre", stock: 10 },

    { name: "Battery", stock: 0 },

    { name: "Engine", stock: 5 }

];


ANSWER:

for (const product of products) {

    if (product.stock === 0) {

        console.log(
            product.name + " is out of stock"
        );

        break;
    }

}


Output:

Battery is out of stock


=========================================================
LEVEL 10 — ADVANCED
=========================================================


---------------------------------------------------------
Q32. What will be the output?
---------------------------------------------------------

let sum = 0;

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    sum += i;
}

console.log(sum);


ANSWER:

12


Working:

i = 1

sum = 0 + 1

↓

1


i = 2

sum = 1 + 2

↓

3


i = 3

continue

↓

Skip


i = 4

sum = 3 + 4

↓

7


i = 5

sum = 7 + 5

↓

12


=========================================================


---------------------------------------------------------
Q33. What will be the output?
---------------------------------------------------------

let count = 0;

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {
        count++;
    }

}

console.log(count);


ANSWER:

6


Reason:

Outer loop runs:

3 times


Inner loop runs:

2 times for every outer iteration.


Total:

3 × 2

=

6


=========================================================


---------------------------------------------------------
Q34. Find duplicate numbers
---------------------------------------------------------

const numbers = [1, 2, 3, 2, 4, 3];


ANSWER:

for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

        if (numbers[i] === numbers[j]) {
            console.log("Duplicate:", numbers[i]);
        }

    }

}


Output:

Duplicate: 2
Duplicate: 3


Explanation:

Each number is compared with the numbers after it.


=========================================================


---------------------------------------------------------
Q35. HARD — Calculate total stock value
---------------------------------------------------------

const products = [

    {
        name: "Tyre",
        price: 5000,
        stock: 10
    },

    {
        name: "Battery",
        price: 8000,
        stock: 5
    },

    {
        name: "Engine",
        price: 50000,
        stock: 2
    }

];


QUESTION:

Calculate:

price × stock

for every product.

Then calculate the total inventory value.


ANSWER:

let totalValue = 0;

for (const product of products) {

    const productValue =
        product.price * product.stock;

    totalValue += productValue;
}

console.log(totalValue);


Working:

Tyre:

5000 × 10

=

50000


Battery:

8000 × 5

=

40000


Engine:

50000 × 2

=

100000


Total:

50000 + 40000 + 100000

=

190000


Output:

190000


=========================================================
FINAL PRACTICE CHALLENGES
=========================================================

Try solving these WITHOUT seeing the answer first.


Q36.

Find the smallest number in:

const numbers = [40, 10, 90, 5, 30];


ANSWER:

let smallest = numbers[0];

for (const number of numbers) {

    if (number < smallest) {
        smallest = number;
    }

}

console.log(smallest);


Output:

5


---------------------------------------------------------


Q37.

Count how many users are active.


const users = [

    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true },
    { name: "D", active: true }

];


ANSWER:

let activeUsers = 0;

for (const user of users) {

    if (user.active) {
        activeUsers++;
    }

}

console.log(activeUsers);


Output:

3


---------------------------------------------------------


Q38.

Print only products whose price is greater than 1000.


const products = [

    { name: "Mouse", price: 500 },

    { name: "Keyboard", price: 1500 },

    { name: "Monitor", price: 10000 }

];


ANSWER:

for (const product of products) {

    if (product.price > 1000) {
        console.log(product.name);
    }

}


Output:

Keyboard
Monitor


---------------------------------------------------------


Q39.

What is the difference between break and continue?


ANSWER:


break

↓

Stops the COMPLETE loop.


continue

↓

Skips only the CURRENT iteration.


Example:

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}


Output:

1
2
4
5


=========================================================
MOST IMPORTANT CONCEPTS TO MASTER
=========================================================


1. for loop

Understand:

for (initialization; condition; update)


---------------------------------------------------------


2. Array iteration

Understand:

array[i]


and:

array.length


---------------------------------------------------------


3. while

Understand that the variable controlling
the loop must eventually change.


---------------------------------------------------------


4. do...while

Remember:

Runs at least once.


---------------------------------------------------------


5. for...of

Gives:

VALUES


Example:

for (const item of items)


---------------------------------------------------------


6. for...in

Gives:

KEYS


Example:

for (const key in object)


---------------------------------------------------------


7. break

Stops the loop.


---------------------------------------------------------


8. continue

Skips one iteration.


---------------------------------------------------------


9. Nested loops

Inner loop completes for every iteration
of the outer loop.


---------------------------------------------------------


10. Industry pattern

The most common pattern you will see is:


for (const item of items) {

    if (someCondition) {
        continue;
    }

    // Process item

}


=========================================================
AFTER YOU CAN SOLVE THESE QUESTIONS COMFORTABLY
=========================================================

Your understanding of JavaScript loops will be strong.

The next important topic should be:

ARRAYS

Then learn:

1. push()
2. pop()
3. shift()
4. unshift()
5. slice()
6. splice()
7. map()
8. filter()
9. find()
10. reduce()
11. some()
12. every()

These array methods are used constantly in
JavaScript, React, Node.js, Express.js, and
MERN applications.
=========================================================
*/