function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

// Double 
const doubled = applyOperation([1, 2, 3, 4], num => num * 2);
console.log("Doubled:", doubled);

// Square 
const squared = applyOperation([1, 2, 3, 4], num => num ** 2);
console.log("Squared:", squared);
