const insersactionArray = (arr1: number[], arr2: number[]): number[] => {
    if (arr2.length < arr1.length) {
        return getIntersaction(arr2, arr1)
    } else {
        return getIntersaction(arr2, arr1)
    }
}

const getIntersaction = (a1: number[], a2: number[]) => {
    let intersactionArr: number[] = [];
    a1.forEach((n) => {
        if (a2.includes(n)) {
            intersactionArr.push(n)
        }
    })

    return intersactionArr
}

console.log(insersactionArray([1, 2, 3, 4, 5], [3, 5, 6]))
// [3,5]