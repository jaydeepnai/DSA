const insertionSort = ( arr : number[])=>{
    for(let i = 1; i<arr.length; i++){
        let nti = arr[i]
        let j = i-1;
        while(j>=0 && arr[j]> nti){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = nti
    }
    return arr
}

console.log(insertionSort([2,43,5,6,3,7,8]))
