const arr = [1, 2, 3, 4, 5];
// const newArr = new Array(5).fill(null);

const printArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const reverseArrInPlace = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
};

const reverseArrShift = (arr) => {
  const n = arr.length;
  //  1 2 3 4 5

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
};

const removeDublicates = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};

const rotateArrRight = (arr, k) => {
  // 1 2 3 4 5  right 2
  // 5 1 2 3 4 - step 1
  // 4 5 1 2 3

  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(i, k);
    if (i > k) {
      const availSpots = arr.length - 1 - i; // 1
      const calculatedIndex = k - availSpots;
      resultArr[calculatedIndex] = arr[i];
    } else {
      resultArr[i + k] = arr[i];
    }
  }
  console.log(resultArr);
};

const linearSearch = (arr, elem) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === elem) {
      console.log(index);
      return index;
    }
  }
};

const binarySearch = (arr, elem) => {
  // 1 2 3 4 5
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    console.log(left, right);
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === elem) return mid;
    if (arr[mid] > elem) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

// reverseArrInPlace(arr);
// reverseArrShift(arr);
// removeDublicates(arr);
// rotateArrRight(arr, 2);
// printArr(arr);
// linearSearch(arr, 2);
console.log(binarySearch(arr, 4));
