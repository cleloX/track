var add = function (a, b) {
  while (b != 0) {
    let c = (a & b) << 1;
    a ^= b;
    b = c;
  }
  return a;
};

console.log(add(3,3))