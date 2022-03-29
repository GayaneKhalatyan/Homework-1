//N1

function createArrayOfEvenlySpacedElements(a, b, step) {
    let arr = []
    for (let i = a; i <= b; i += step) {
        arr.push(i)
    }
    return arr
}

//N2
function OccurrencesCount(a, b) {
    count = 0
    for (let i = 0; i < a.length; i++) {
        if (b === a[i]) {
            count += 1
        }
    }
    return count
}

//N3

function isTheStringPalindrome(a) {
    let b = ''
    for (let i = a.length - 1; i >= 0; i--) {
        b += a[i]
    }
    if (a===b){
        return 'Yes'
    }
    return 'No'
}

//N4
function findTheMaxOfArray(a){
    let max = a[0]
    for ( i = 1; i < a.length; i++){
        if(a[i]>max){
            max=a[i]
        }
    }
    return max
}

//N5
function createArray(a){
    let b = []
    for (i = 1; i < a.length; i++){
        b.push(a[i]*a[i-1])
    }
    return b
}

//N6
function changeTheMembers(a, b, c) {
    let arr = a.split("")
    for (let i = 0; i < a.length; i++) {
        if (arr[i] === b) {
            arr[i] = c
        }else if(arr[i] === c){
            arr[i] = b
        }
    }
    return arr.join("")
}
