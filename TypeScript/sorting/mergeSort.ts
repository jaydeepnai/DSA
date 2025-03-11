const mergeSort  = (arr : number[] ) : number[] =>{
    if(arr.length<2) return arr;
    
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid)
    let right = arr.slice(mid,arr.length)

    return mergeArray(mergeSort(left),mergeSort(right))
}

const mergeArray = (left: number[],right: number[])=>{
    let sortArray : number[] = []
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortArray.push(left.shift() || 0)
        }else{
            sortArray.push(right.shift() || 0)
        }
    }
    return [...sortArray, ...left, ...right]
}

console.log(mergeSort([3,5,2,6,4,7,1]))
// [LOG]: [1, 2, 3, 4, 5, 6, 7] 
