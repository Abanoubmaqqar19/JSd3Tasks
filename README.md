# JavaScript Fundamentals & Practice Tasks

This repository contains a collection of JavaScript practice tasks and examples covering core concepts and commonly used features. The exercises focus on building a solid foundation in JavaScript through hands-on problem solving.

## Purpose
The purpose of this repository is to practice JavaScript fundamentals, improve problem-solving skills, and gain confidence in working with arrays, objects, and built-in methods.


## Topics Covered
JavaScript basics including:
- User input handling (`prompt`, `alert`) and validation (`Number()`, `isNaN()`)
- Mathematical operations (`Math.sqrt()`, `Math.abs()`, `Math.cos()`)
- Arrays and array methods (`push`, `pop`, `splice`, `find`, `sort`)
- Objects and arrays of objects (e.g., students with name and degree)
- Searching and filtering data within arrays
- Sorting objects alphabetically using `localeCompare`
- Executing user-entered mathematical expressions using `new Function()` (without `eval`)

---

## Important Notes

### 1. Floating Point Problem
In JavaScript, decimal numbers are not always precise due to binary representation (IEEE 754 standard).

**Example:**
```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
```
### 2. localeCompare (String Comparison)
Used to compare strings alphabetically. Returns:

< 0 → first string comes before second

0 → strings are equal
> 0 → first string comes after second

```javascript
let names = ["Mona", "Ahmed", "Omar"];
names.sort((a, b) => a.localeCompare(b));
console.log(names); // ["Ahmed", "Mona", "Omar"]
```
### 3. New function
Creates a new function from a string. The code runs in a new, isolated scope.

Syntax:

```javascript
let f = new Function("a", "b", "return a + b;");
console.log(f(3, 4)); // 7
```
