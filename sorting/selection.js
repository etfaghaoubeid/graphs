// you look for the small element in the array  in put it in the begining 

function selectionSort(arr) {
    let temp = null;
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                
                lowest = j;
            } else {
                continue;
            }
            
        }
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp
        

        
    }
    return arr;
}
r = selectionSort(arr)
console.log(r)