function convert(s: string, numRows: number): string {
  const letters = s.split("");
  const result: string[] = [];
  for (let i = 0; i < numRows; i++) {
    letters.forEach((element, idx) => {
      // middle zags
      const x = (idx - i) % (numRows * 2 - 2) || 0;
      // pillars
      const y = (idx + i) % (numRows * 2 - 2) || 0;
      if (idx === i || x === 0 || y === 0) {
        result.push(element);
      }
    });
  }
  return result.join("");
}
