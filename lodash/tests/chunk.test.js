const chunk = require("../array/chunk");

test("testing the chunk function", () => {
  const chunkResult = chunk([1, 2, 3, 4, 5, 6, 7, 8], 2);
  expect(chunkResult).toMatchObject([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ]);
});
