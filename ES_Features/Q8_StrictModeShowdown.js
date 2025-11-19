// Non-strict version
function demoNonStrict(a, a2) {
  total = 10; // implicit global
  const delRes = delete total; // false, but no error
  console.log("Non-strict:", delRes);
}
demoNonStrict(5, 10);

"use strict";
function demoStrict(a, b) {
  let totalLocal = 10;
  console.log("Strict mode: declared local, delete variable illegal");
}
demoStrict(5, 10);

function demoES6({ a, b }) {
  let total = 10;
  const obj = { total };
  const delProp = delete obj.total; // allowed on object property
  console.log("ES6 correct:", { a, b, delProp });
}
demoES6({ a: 5, b: 10 });
