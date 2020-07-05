// Replace every element by the multiplication of previous and next element
function main(a) {
  let temp;
  n = a.length;
  last = a[0];
  a[0] = a[0] * a[1];
  for (i = 1; i < n - 1; i++) {
    curr = a[i];
    a[i] = a[i + 1] * last;
    last = curr;
  }
  a[n - 1] = a[n - 1] * curr;
  console.log(a);
}
main([2, 3, 4, 5, 6]);
