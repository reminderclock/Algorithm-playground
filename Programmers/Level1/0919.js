function solution(n, arr1, arr2) {
  const arr = [arr1, arr2];
  const array = arr.map((e) => {
    return e
      .map((e) => "0".repeat(n - e.toString(2).length) + e.toString(2))
      .map((e) => e.split("").map((e) => parseInt(e)));
  });
  const [one, two] = array;
  return one.map((e1, index1) =>
    e1
      .map((e2, index2) => {
        e2 = e2 + two[index1][index2];
        if (e2 >= 1) e2 = "#";
        else e2 = " ";
        return e2;
      })
      .join("")
  );
}

//
function sum([one, two]) {
  return one.map((e1, index1) =>
    e1
      .map((e2, index2) => {
        e2 = e2 + two[index1][index2];
        if (e2 >= 1) e2 = "#";
        else e2 = " ";
        return e2;
      })
      .join("")
  );
}
function solution(n, arr1, arr2) {
  const array = [arr1, arr2].map((e) => {
    return e
      .map((e) => "0".repeat(n - e.toString(2).length) + e.toString(2))
      .map((e) => e.split("").map((e) => parseInt(e)));
  });
  return sum(array);
}
