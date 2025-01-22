function fibonacciSequence(numTerms: number) {
  if (numTerms <= 0) return [];
  if (numTerms === 1) return [0];
  let sequence = [0, 1];

  while (sequence.length < numTerms) {
    let nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
  }
  return sequence;
}
fibonacciSequence(5);
