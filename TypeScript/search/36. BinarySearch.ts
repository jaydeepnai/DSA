function binarySearch(arr : number[], target : number) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
  
    while(leftIndex <= rightIndex){
      let middle = Math.floor((leftIndex + rightIndex )/2)
      if(target === arr[middle]){
          return middle
      }else if(arr[middle] < target){
          leftIndex = middle+1;
      }else if(arr[middle] > target){
          rightIndex = middle-1
      }
    }
    return -1
  }
  
  console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
  console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
  console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1
  