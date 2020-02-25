function fivetimes(array) {
  return _.map(array,
    (num) => `${num} ${num} ${num} ${num} ${num}`);
}


console.log(fivetimes(['foo', 'bar bar']));
console.log(fivetimes(['a', 'b', 'c']));
