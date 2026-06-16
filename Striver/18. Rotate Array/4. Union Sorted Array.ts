function sortedArrayUnion(a: number[], b: number[]): number[] {
    const n1 = a.length;
    const n2 = b.length;
    const result: number[] = [];

    let i = 0;
    let j = 0;
    while (i < n1 && j < n2) {
        if (a[i] === b[j]) {
            result.push(a[i]);
            i++;
            j++;
        } else if (a[i] < b[j]) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }

    while (i < n1) {
        result.push(a[i]);
        i++;
    }

    while (j < n2) {
        result.push(b[j]);
        j++;
    }

    return result;
}