function bubbleSort(arr: number[], n: number): void {
  for (let i = n - 1; i >= 0; i--) {
    let didSwap = 0;

    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        didSwap = 1;
      }
    }

    if (didSwap === 0) {
      break;
    }

    console.log("runs");
  }
}
