function printPattern(n) {
  const size = 2 * n - 1;
  const center = n - 1;

  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      const dist = Math.max(Math.abs(i - center), Math.abs(j - center));
      row += (dist + 1) + ' ';
    }
    console.log(row.trim());
  }
}

printPattern(4);