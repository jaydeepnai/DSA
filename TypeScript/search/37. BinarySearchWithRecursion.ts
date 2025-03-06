const search = (arr: number[], target: number): number => {
    let leftIndex = 0, rightIndex = arr.length - 1;
    return binarySearchWithRecursion(arr, target, leftIndex, rightIndex)
}

function binarySearchWithRecursion(arr: number[], target: number, leftIndex: number = 0, rightIndex: number = 0): number {
    while (leftIndex <= rightIndex) {
        let middle = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middle]) {
            return middle
        } else if (arr[middle] < target) {
            leftIndex = middle + 1;
            binarySearchWithRecursion(arr, target, leftIndex, rightIndex)
        } else if (arr[middle] > target) {
            rightIndex = middle - 1
            binarySearchWithRecursion(arr, target, leftIndex, rightIndex)
        }
    }
    return -1
}

console.log(search([-5, 2, 4, 6, 10, 12, 14, 16], 12)) // 4
