function linearSearch(n: number, num: number, arr: number[]): number {
    for (let i = 0; i < n; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}