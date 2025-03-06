// First method: Using destructuring
function swapWithoutTemp1(a: number, b: number): [number, number] {
    [a, b] = [b, a];
    return [a, b];
  }
  
  // Example usage
  let x1 = 5;
  let y1 = 10;
  
  [x1, y1] = swapWithoutTemp1(x1, y1);
  
  console.log(`After swapping (method 1): x = ${x1}, y = ${y1}`);
  
  // Second method: Using arithmetic
  function swapWithoutTemp2(a: number, b: number): [number, number] {
    //10,15
    a = a + b;//25
    b = a - b;//5
    a = a - b;//30
    return [a, b];
  }
  
  // Example usage
  let x2 = 15;
  let y2 = 10;
  
  [x2, y2] = swapWithoutTemp2(x2, y2);
  
  console.log(`After swapping (method 2): x = ${x2}, y = ${y2}`);
  