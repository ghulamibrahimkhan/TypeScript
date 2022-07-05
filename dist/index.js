"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
let xyz;
xyz = calculateTax(10000);
console.log(xyz);
//# sourceMappingURL=index.js.map