// Q2: Multi-Type Data Summary

let str = "JavaScript";
let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "Priyanshi", age: 20 };
let empty = null;
let notDefined;

let summary = [
  { label: "String", value: str, type: typeof str },
  { label: "Number", value: num, type: typeof num },
  { label: "Boolean", value: bool, type: typeof bool },
  { label: "Array", value: arr, type: Array.isArray(arr) ? "array" : typeof arr },
  { label: "Object", value: obj, type: typeof obj },
  { label: "Null", value: empty, type: typeof empty }, // returns 'object'
  { label: "Undefined", value: notDefined, type: typeof notDefined }
];

console.table(summary);
