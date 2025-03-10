const quickSort = ( arr : number[]) : number[]=>{
    if(arr.length < 2) return arr 
    let pivot = arr[arr.length-1];
    let left:number[]= []
    let right:number[]= []
    for(let i=0;i<arr.length-1;i++){
     if(arr[i]<pivot){
         left.push(arr[i])
     }else{
         right.push(arr[i])
     }
    }
 
    return [...(quickSort(left)),pivot,...(quickSort(right))]
 }
 
 console.log(quickSort([2,43,5,6,3,7,8]))