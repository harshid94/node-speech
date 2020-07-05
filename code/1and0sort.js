// Sorting of zero and one array
function main(a) {
  let count = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] === 0) {
      count = count + 1;
    }
  }
  for (i = 0; i < count; i++) {
    a[i] = 0;
  }
  for (i = count; i < a.length; i++) {
    a[i] = 1;
  }
  for (i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
}

main([1, 0, 0, 0, 1, 1]);
