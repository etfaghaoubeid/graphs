function bublleSort(arr) {
    let temp = null;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            let tem = arr[i];
            if (arr[i] <= arr[j]) {
                arr[i] = arr[j] 
                arr[j]= tem
            } else {
                continue;
            }
        }
    }
    return arr;
}
let arr = [34, 44, 12, 78, 3, 6, 89, 20, 49]
let r = bublleSort(arr)
console.log(r)