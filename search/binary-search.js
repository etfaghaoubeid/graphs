function binarySearch(arr, element) {
    let start = 0 , end =  arr.length-1; 
    let midlle = Math.floor((end - start)/2);
    while (arr[midlle] !== element && start <= end) {
        if (arr[midlle]<element) {
            start = midlle;
        } else {
            end = midlle
        }
        midlle = Math.floor((start-end)/2)
    }
    return arr[midlle] == element ? midlle: -1;
    
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let r = binarySearch(numbers, 23);
console.log(r)