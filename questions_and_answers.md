<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>At first a variable named 'greeting' is declared but it is not assigned any value. Then assign an empty object to a variable called 'greetign'. New variable 'greetign' is created in the global scope & it holds an empty object. Then when it console logged it's output an empty object.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In JavaScript, the + operator can be used both for numerical addition and string concatenation. In the sum function, it takes two parameters a and b. When sum(1, "2") function were called, JavaScript performs type conversion. It converts the number 1 to a string to match the data type of "2", and then it concatenates these two strings, result is string "12". </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>An array called 'food' is defined with four element's with const keyword. Then an object 'info' is created with a property 'favoriteFood' & initially assigned the value of the [0]th index value from 'food' array. Then the value of 'info.favoriteFood' is reassigned to "🍝" & it does not affect the original 'food' array. So when 'food' variable console logged it shows ['🍕', '🍫', '🥑', '🍔'] as output. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Function "sayHi(name)" expecting a parameter 'name' when it will be called. But when it call without providing any argument the 'name' parameter is undefined cause no value is passed. As a result the function return string with including 'undefined' word.So console shows'Hi there, undefined' as output.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Using let keyword at first 'count' variable declared by initialize '0' then an array 'nums' is defined with four elements. Then a iterator 'forEach' method is used to iterate over each element 'nums' array. Each element received by num & inside the callback function conditional statement check if current num is truthy value then 'count' increment by 1. In 'nums' array three elements are truthy value & 'count' updated to 3, Lastly console logged count is 3 .</i>

</p>
</details>
