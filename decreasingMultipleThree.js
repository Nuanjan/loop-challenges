function decreasingMultipleThree(number) {
  for (let i = number; i > 0; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

decreasingMultipleThree(100);
