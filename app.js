
let inputArr = Array.of(1, 1, 1, 4, 4, 1)
console.log(CountZerosXORPairs(inputArr))


function CountZerosXORPairs(inputArr){
    let pairCount = 0
    let map = new Map()
    // we can count the number of times a digit occurs
    // and count the number of XOR pairs out of it
    // Example: 
    // If '2' occurs 1 time -> 0 pairs
    // If '2' occurs 2 times -> 1 pairs
    // If '2' occurs 3 times -> 3 pairs
    // If '2' occurs 4 times -> 6 pairs, and so on
    // this has a formula as follows.. 
    // (n * (n - 1)) / 2 => which will give us the total number of pairs 
    // here, n is the number of times digit has occured - 1
    // thus, the formula becomes ((n - 1) * n) / 2

    // step 1: 
    // iterate through the array and store the count of occurance in a map 
    for(let digit of inputArr){
        if(map.has(digit)){
            let newValue = map.get(digit) + 1
            map.set(digit, newValue)
        } else {
            map.set(digit, 1)
        }
    }

    // step 2: 
    // use the above formula to calculate the total pairs for each duplicate digit 
    // and add all of it to find the total pairs in the array
    map.forEach(function(value, key){
        if(value > 1){
            pairCount += GetNumberOfPairs(value)
        }
    })

    return pairCount
}

function GetNumberOfPairs(n){
    let result = (n - 1) * n
    result = Math.trunc(result/2)
    return result
}