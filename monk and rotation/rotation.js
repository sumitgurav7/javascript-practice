/**
 * 1 2 3 4 5
 *
 *
 */

function rotateArrayBy(arr = [], byIndex = 0) {
  let startShift = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let carry = arr[i];
    arr[i] = startShift;
    startShift = carry;
    if (i == arr.length - 1) {
      arr[0] = carry;
    }
  }

  console.log(arr);
}

rotateArrayBy([1, 2, 3, 4, 5]);
