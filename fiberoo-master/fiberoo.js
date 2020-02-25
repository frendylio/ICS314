function fib() {
  let pre = 0;
  let curr = 1;
  const list = [];
  list.push(pre);
  list.push(curr);
  for (let i = 2; i < 50; i++) {
    const next = curr + pre;
    list.push(next);
    pre = curr;
    curr = next;
  }
  return list;
}

console.log(fib());

function numsToStrings(list) {
  _.map(list => for i range of return i);
}