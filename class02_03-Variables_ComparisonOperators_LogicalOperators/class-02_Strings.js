"use strict";
// Initializing String type variables
var userName = "Abu Hurairah";
var userName2 = 'Naveed';
var userName3 = `Naveed`; //Specifically this one is called template literals. As it involves different features.
// Let's try to concatenate two strings
//Without template literals
var firstName = "Muhammad";
var lastName = "Ali";
var fullName = firstName + " " + lastName;
console.log("fullName:", fullName);
// With template literals
var firstName1 = `Ahmad`;
var lastName1 = `Ali`;
var fullName1 = `${firstName1} ${lastName1}`; //using template literals we can use variable any where in the string, just using ${variableName}. The dollar sign help compiler to understand that here is the start of javascript/typescript
console.log("fullName1:", fullName1);
//Another example
console.log(`Assalam u Alakium ${fullName}, How are you???`);
