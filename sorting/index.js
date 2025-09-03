const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    console.log(i, "OUTR");
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      console.log(j, "INNER");
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

const arr = [11, 23, 4, 55, 3, 5];
console.log(arr);
bubbleSort(arr);
console.log(arr);
