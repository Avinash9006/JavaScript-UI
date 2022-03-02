/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */

function max(a, b) {
  return a >= b ? a : b;
}
var furthestBuilding = function (heights, bricks, ladders) {
  function rec(h, b, l, i) {
    if (i >= h.length) return 0;
    let d = h[i] - h[i - 1];
    if (d <= 0) {
      return 1 + rec(h, b, l, i + 1);
    } else {
      let byLadder = l > 0 ? 1 + rec(h, b, l - 1, i + 1) : 0;
      let byBrick = b > d ? 1 + rec(h, b - d, l, i + 1) : 0;
      return max(byLadder, byBrick);
    }
  }
  return rec(heights, bricks, ladders, 1);
};

console.log(furthestBuilding([14,3,19,3], 17, 0));
