function linearSarch(arr, element) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === element) return i;
        else {
            continue;
        }
    }

    return -1;
    
}
let names = ["atigh", "mouvid", "chavie", "gat", "hamoud"]

let r = linearSarch(names, "ahmed")
console.log(r)