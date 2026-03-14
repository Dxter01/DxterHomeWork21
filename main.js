import { curriedAdd } from "./curriedAdd.js";
import { curriedDomain } from "./curriedDomain.js";
import { originalFunction, modifyFunction } from "./modifyFunction.js";
import { outerFunction } from "./nestedFunctions.js";

// import { curriedAdd } from "./curriedAdd.js";
const addFirst = curriedAdd(1);
const addSecond = addFirst(2);
const result = addSecond(3);

console.log("Result:", result);

//import { curriedDomain } from "./curriedDomain.js";
const domainName = curriedDomain("https");
const tld = domainName("example");
const fullDomain = tld("com");

console.log("Full Domain:", fullDomain);

//import { originalFunction, modifyFunction } from "./modifyFunction.js";
const modifiedFunc = modifyFunction(originalFunction, 3);
console.log("Original function output for 4:", originalFunction(4)); // Повинно вивести 16
console.log("Modified function output for 4:", modifiedFunc(4));

//import { outerFunction } from "./nestedFunctions.js";
const finalResult = outerFunction(2)(3)(4);
console.log(finalResult);
