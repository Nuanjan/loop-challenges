function printOdd(number) {
  // loop throught the number using for loop
  // i start at 1 and will out of loop when i greater than number
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
printOdd(20);