// 1
function is_array(input){
    return Array.isArray(input);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// 2
function array_Clone(input){
    return input.slice(1,3)
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// 3
function first(input,n){
    if (input == null)
        return 0;
    if (n == null)
        return input[0];
    if (n < 0)
        return [];
    return input.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//4
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","))
console.log(myColor.join(" "))

// 5

function most_frequent(arr){
    const n = arr.length
    let hash = new Map()
    for (let i = 0; i<n; i++){
        if(hash.has(arr[i]))
            hash.set(arr[i], hash.get(arr[i])+1)
        else
            hash.set(arr[i], 1)
    }
    let max_count = 0, res = -1;
    let val
    hash.forEach((value,key) => {

        if (max_count < value) {
            res = key;
            max_count = value
            val = value
        }
    })
    return res + ' ( ' + val + " times )"

}

const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(most_frequent(arr1))