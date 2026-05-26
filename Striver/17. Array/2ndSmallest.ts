function secondSmallest(a: number[]): number {
    let smallest = a[0];
    let ssmallest = Infinity;

    for (let i = 1; i < a.length; i++) {
        if (a[i] < smallest) {
            ssmallest = smallest;
            smallest = a[i];
        } else if (a[i] !== smallest && a[i] < ssmallest) {
            ssmallest = a[i];
        }
    }
    return ssmallest === Infinity ? -1 : ssmallest;
}