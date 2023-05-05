function sum(a, b) {
    if (a == undefined) {
        a = 0;
    }
    if (b == undefined) {
        b = 0;
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.error("Please enter number.");
        return false;
    }

    return a + b;
}

/* BAD CONDITIONS
1. If parameter a or b is missied.
2. If the mathematical symbol is incorrect.
3. If function result is not returned correctly.
4. If parameter a or b is not number.
*/

function testSum() {
    if (sum(3, 5) == 8) {
        console.log("Function sum is working properly.");
    }
    if (!sum(1, "text")) {
        console.log("Parameter is inserted incorrectly.")
    }
}

testSum();