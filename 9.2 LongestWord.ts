const getLongestWordWithReduce = (str: string) => {
  let s1 = str.split(" ");
  return s1.reduce((acc: string, cur: string) =>
  {
    let result = acc.length > cur.length ? acc : cur
    return result;
  }
  );
};

console.log(getLongestWordWithReduce("hi thisiss1 is jaydeep"));
