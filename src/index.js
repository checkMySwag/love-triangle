/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let pairs = 0;
  let x = 0;
  let y = 0;
  let z = 0;
  for (var i = 0; i < preferences.length; i++) {
    x = i + 1;
    y = preferences[i];
    z = preferences[y - 1];
    if (preferences[z - 1] === x) {
      pairs++;
    }
  }
  return Math.floor(pairs / 3);
};