// Matrix.js

// Example matrices
const matrixA = [
    [1, 2],
    [3, 4]
];

const matrixB = [
    [5, 6],
    [7, 8]
];

// Matrix addition
function addMatrices(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < a[i].length; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }
    return result;
}

// Matrix multiplication
function multiplyMatrices(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < b[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < b.length; k++) {
                sum += a[i][k] * b[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

console.log("Addition:", addMatrices(matrixA, matrixB));
console.log("Multiplication:", multiplyMatrices(matrixA, matrixB));
