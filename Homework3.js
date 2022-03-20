//N1
function lengthOfArray(x) {
    let a = 0
    while(x[0] !== undefined) {
        x.pop()
        a++
    }
    return a
}



//N2

function getTheSumOfArrayElements(x){
    let sum = 0;
    for( let i = 0; i < x.length; i++){
        sum += x[i]
    }
    return sum
}

//N3
function getPowOfThree(x,y){
    let g = []
    for ( let i = x; i < y; i++) {
        let d = i
        while (true) {
            d = d / 3
            if (d === 1) {
                g.push(i)
                break
            } else if (d < 1) {
                break
            }
        }
    }
    return g
}


//N4
function PutDashBetweenEvanNumbers(x) {
    let a = 0
    let b = []
    while (x >= 1) {
        a = x % 10
        b.unshift(a)
        x = (x - a) / 10
    }
    let c = ''+b[0]
    for (let i = 1; i < b.length; i++) {
        if (b[i] % 2 === 0 && b[i - 1] % 2 === 0) {
            c += '-' + b[i]
        } else {
            c += b[i]
        }
    }
    return c
}

//N5
function N_stPrimeNumber(x) {
    let n = 1
    let k = 0
    for (let i = 3; n < x; i += 2) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                break
            } else if (j == i - 2) {
                n++
            }
        }
        k = i
    }
    return k
}