const selectionSort  = (arr : number[] ) : number[] =>{
    for(let i=0; i<arr.length-1;i++){
        let min = i; 
        for(let j=i+1; (j<arr.length);j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        swap(arr,i,min)
    }
 return arr   
}

const swap = (arr : number[], i : number, j : number)=>{
    let tempI : number = arr[i];
    arr[i] = arr[j];
    arr[j] = tempI
}

console.log(selectionSort([3,5,2,6,4,11,15,13,12,7,1]))
console.log(selectionSort([15,12,15,14,18,17,6]))
console.log(selectionSort([43,6,26,76,37,28]))
// [LOG]: [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 15] 
// [LOG]: [6, 12, 14, 15, 15, 17, 18] 
// [LOG]: [6, 26, 28, 37, 43, 76] 