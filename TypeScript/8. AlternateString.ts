const getStringAlternativly = (str1:string, str2:string) => {
  let loopLength = Math.max(str1.length, str2.length);
  let str3="";
  for (let index = 0; index < loopLength; index++) {
    if (index < str1.length) {
      const s1 = str1[index];
      str3 = str3 + s1;
    }
    if (index < str2.length) {
      const s2 = str2[index];
      str3 = str3 + s2;
    }
  }
  return str3;
};

console.log(getStringAlternativly("jaydeep", "nai"));
