function binarySearch(arr, element) {
    let midlle = arr.length % 2 ? arr.length / 2 : arr.length - 1 / 2;
    let start = 0 , end =  arr.length-1; 
    while (midlle < end) {
        if (element > arr[midlle]) {
            start = midlle;
            midlle = (start - end) % 2 ? (start - end) / 2 : ((start - end) - 1) / 2;
        }
    }
    
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
binarySearch(numbers, 5);