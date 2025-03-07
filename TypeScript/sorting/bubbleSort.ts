const bubbleSort = (arr : number[]) : number[]=>{
    for(let i= 0; i<=arr.length-2;i++){
        for(let j= i+1; j<=arr.length-1;j++){
            if(arr[i]>arr[j]){
                swap(arr,i,j)
            }
        }   
    }
    return arr
}

const swap = (arr : number[], i : number, j : number)=>{
    let tempI : number = arr[i];
    arr[i] = arr[j];
    arr[j] = tempI
}

console.log(bubbleSort([2,42,4,92,3,1,56,3,6,7,4]))