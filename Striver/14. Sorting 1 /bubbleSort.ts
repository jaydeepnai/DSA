function bubbleSort(arr: number[], n: number): void {
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}


const arr = [5, 2, 9, 1, 3];

bubbleSort(arr, arr.length);

console.log(arr); // [1, 2, 3, 5, 9]
