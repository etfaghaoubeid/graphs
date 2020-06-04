function selection(arr) {
    let min = null
    let temp = null;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0;j+1<=arr.length; j++){
            if (arr[j] >= arr[j + 1]) {
                tem = arr[j]
               
           }
        }
    }
    return arr;
}
let arr = [56, 3, 45, 3, 44, 33, 6, 8];
let r = selection(arr);
console.log(r)