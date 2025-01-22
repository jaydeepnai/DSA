const AddSubArrayToArray = (arr: (number | number[])[]) => {
  let newArray: (number | number[])[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray.push(...(arr[i] as number[]));
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

console.log(
  AddSubArrayToArray([
    [1, 2],
    [3, 4],
  ])
);
