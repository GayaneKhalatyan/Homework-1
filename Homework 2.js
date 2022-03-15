// N1
let x = +prompt();
let a = 0;
let sum = 0;
while (x >= 1) {
    a = x % 10
    sum += a
    x = (x - a) / 10
}
// N2
let a = +prompt();
let b = +prompt();
let c = +prompt();

if (c < a + b && a < c + b && b < a + c) {
    console.log("yes")
} else {
    console.log("no")
}
;
//N3
let x = +prompt();
let a = 0
let b = 0

while (x >= 1) {
    a = x % 10;
    if (a === 9) {
        b++
    }
    x = (x - a) / 10
}
console.log(b)

//N4
let x = +prompt();
let a = 0
let b = ''
while (x >= 1) {
    a = x % 10;
    b += a;
    x = (x - a) / 10
}
console.log(Number(b))

//N5
let a = +prompt();
while (true) {
    a = a / 2
    if (a === 1) {
        console.log(true)
        break
    } else if (a < 1) {
        console.log(false)
        break
    }
}

