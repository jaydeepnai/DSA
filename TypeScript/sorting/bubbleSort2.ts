const bubbleSortWithDoWhile = (arr: number[]): number[] => {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i <= arr.length - 2; i++) {
            if (arr[i] > arr[i + 1]) {
                swapWithDoWhile(arr, i, i + 1)
                swapped = true
            }
        }
    } while (swapped)
    return arr
}

const swapWithDoWhile = (arr: number[], i: number, j: number) => {
    let tempI: number = arr[i];
    arr[i] = arr[j];
    arr[j] = tempI
}

console.log(bubbleSortWithDoWhile([2, 42, 4, 92, 3, 1, 56, 3, 6, 7, 4]))