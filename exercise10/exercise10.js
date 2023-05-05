function helloName(name) {
    console.log("hello " + name + "!");
}

function sum(A, B) {
    return A + '+' + B + '=' + (A + B);
}

function minus(A, B) {
    return A + '-' + B + '=' + (A - B);
}

function divide(A, B) {
    return A + '/' + B + '=' + (A / B);
}

function multiply(A, B) {
    return A + '*' + B + '=' + (A * B);
}

helloName("Catherine");
console.log(sum(10, 2));
console.log(minus(10, 2));
console.log(divide(10, 2));
console.log(multiply(10, 2));