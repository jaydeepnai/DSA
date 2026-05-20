function mergeSort(arr: number[]): number[] {
    // base case — ek element already sorted hai
    if (arr.length <= 1) return arr;

    // array ko do hisson mein todo
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // sorted halves ko merge karo
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;

    // dono arrays compare karo, chhota pehle daalo
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // jo bacha woh directly daalo
    return [...result, ...left.slice(i), ...right.slice(j)];
}

// test
console.log(mergeSort([5, 3, 8, 1, 9, 2, 7, 4]));
// output: [1, 2, 3, 4, 5, 7, 8, 9]