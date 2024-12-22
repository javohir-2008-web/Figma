function calc(a,b, operator) {
    return operator(a,b)
}

function ayirma(a, b) {
    return a - b
}

function yigindi(a,b) {
    return a + b
}

function kopaytma(a,b) {
    return a * b
}

function bolinma(a,b) {
    return a / b
}
console.log(calc(5, 3, yigindi))
