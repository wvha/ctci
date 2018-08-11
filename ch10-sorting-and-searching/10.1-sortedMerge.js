// start at the end because there's already space
// move values from b to a


function sortedMerge(a, b) {
  let indexA = a.length - 1;
  let indexB = b.length - 1;
  let sortedIndex = a.length + b.length -1;

  while (indexB >= 0) {
    if (indexA >= 0 && a[indexA] > b[indexB]) {
      a[sortedIndex] = a[indexA];
    } else {
      a[sortedIndex] = b[indexB];
    }
    sortedIndex--;
  }
}
