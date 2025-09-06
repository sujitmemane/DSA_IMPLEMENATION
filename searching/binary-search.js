function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    }
  }

  return -1;
}

// Time Complexity - 0(logn)

// Q35  Search Insert Position

function search_insert_position(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    }
  }

  return left;
}

let arr = [1, 3, 5, 7, 9, 11];
console.log(search_insert_position(arr, 8));

// LeetCode 69: Sqrt(x).

1, 2, 3, 4, 5, 6, 7, 8, 9;
function square_root(num) {
  if (num < 2) return num;
  let left = 1;
  let right = Math.floor(num / 2),
    ans = 0;
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (mid * mid === num) return mid;
    if (mid * mid > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
      ans = mid;
    }
  }
  return ans;
}

function valid_perfect_square(num) {
  if (num < 2) return num;
   let left = 1;
  let right = Math.floor(num / 2)
   while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (mid * mid === num) return 1
    if (mid * mid > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
     
    }
  }
  return false
}
