module.exports = function towelSort(matrix) {
  if (!matrix) return [];

  const result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];

    if (i % 2 === 0) {
      result.push(...row);
    } else {
      result.push(...[...row].reverse());
    }
  }

  return result;
};
