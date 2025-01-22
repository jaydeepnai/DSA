const numberFreqsWithHighestNumber = (
  arr: number[]
): { [index: number]: number } => {
  let freqs: { [index: number]: number } = {};
  arr.map((n: number) => {
    if (freqs[n]) {
      freqs[n] = freqs[n] + 1;
    } else {
      freqs[n] = 1;
    }
  });
  let maxFreqs: number = Math.max(...Object.values(freqs));
  let maxFreq: { [index: string]: number } = {};
  let entries: [string, number][] = Object.entries(freqs);
  entries.map((n: [string, number]) => {
    if (n[1] === maxFreqs) {
      maxFreq[n[0]] = n[1];
    }
  });
  console.log(maxFreq);
  return freqs;
};

console.log(numberFreqsWithHighestNumber([1, 1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 5]));
