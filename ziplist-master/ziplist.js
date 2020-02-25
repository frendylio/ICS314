
// eslint-disable-next-line no-unused-vars
function zipList(list1, list2) {
  let list;
  // eslint-disable-next-line prefer-const
  list = [];
  for (let i = 0; i < list1.length; i++) {
    const j = i * 2;
    list[j] = list1[i];
    list[j + 1] = list2[i];
  }
  return list;
}

// eslint-disable-next-line no-unused-vars
function zipListTheSimpleWay(list1, list2) {
  let list3;
  // eslint-disable-next-line prefer-const
  list3 = [];
  _.each(_.zip(list1, list2), function (value) { list3.push(value[0]); list3.push(value[1]); });
  return list3;
}
