// TODO
// 14

// ===============================
// 1. Largest Element in an Array
// Example: arr = [2, 5, 1, 3, 0] → Output: 5
function largestElement(arr) {
  // Write your code here
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  return max;
}
// console.log(largestElement([2, 5, 1, 3, 0]));

// ===============================
// 2. Second Largest Element in an Array without sorting
// Example: arr = [2, 5, 1, 3, 0] → Output: 3
function secondLargest(arr) {
  // Write your code here
  if (arr.length < 2) {
    return;
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else {
      if (num < largest && num > secondLargest) {
        secondLargest = num;
      }
    }
  }

  return secondLargest;
}
// console.log(secondLargest([2, 5, 1, 3, 0]));

// ===============================
// 3. Check if the array is sorted
// Example: arr = [1, 2, 3, 4] → Output: true
function isSorted(arr) {
  // Write your code here
  let lastElement = arr[0];
  for (let num of arr) {
    if (lastElement > num) {
      console.log(lastElement, num);
      return false;
    }
    lastElement = num;
  }
  return true;
}
// console.log(isSorted([1, 2, 3, 4]));

// ===============================
// 4. Remove duplicates from Sorted array
// Example: arr = [1, 1, 2, 2, 3] → Output: [1, 2, 3]
function removeDuplicates(arr) {
  // Write your code here
}
// console.log(removeDuplicates([1, 1, 2, 2, 3]));

// ===============================
// 5. Left Rotate an array by one place
// Example: arr = [1, 2, 3, 4, 5] → Output: [2, 3, 4, 5, 1] // [3,4,5,1,2]
function leftRotateByOne(arr, k = 2) {
  const resultArr = [];
  const n = arr.length;
  for (let index = 0; index < n; index++) {
    const newIndex = (index - k + n) % n;
    resultArr[newIndex] = arr[index];
  }

  return resultArr;
  // Write your code here
}
// console.log(leftRotateByOne([1, 2, 3, 4, 5]));

// ===============================
// 6. Left Rotate an array by D places
// Example: arr = [1, 2, 3, 4, 5], D=2 → Output: [3, 4, 5, 1, 2]
function leftRotateByD(arr, d) {
  // Write your code here
}
// console.log(leftRotateByD([1, 2, 3, 4, 5], 2));

// ===============================
// 7. Move Zeros to end
// Example: arr = [0, 1, 0, 3, 12] → Output: [1, 3, 12, 0, 0]
function moveZeros(arr) {
  // Write your code here
  const resultArr = [];
  let zeros = 0;

  for (let num of arr) {
    if (num !== 0) {
      resultArr.push(num);
    } else {
      zeros++;
    }
  }

  // const arrZ = new Array(zeros).fill(0);
  // return [...resultArr, ...arrZ];
  while (zeros--) {
    resultArr.push(0);
  }
  return resultArr;
}
// console.log(moveZeros([0, 1, 0, 3, 12]));

// ===============================
// 8. Linear Search
// Example: arr = [1, 2, 3, 4], x=3 → Output: 2
function linearSearch(arr, x) {
  // Write your code here
}
// console.log(linearSearch([1, 2, 3, 4], 3));

// ===============================
// 9. Find the Union of two arrays
// Example: arr1=[1,2,3], arr2=[2,3,4] → Output: [1,2,3,4]
function findUnion(arr1, arr2) {
  // Write your code here
  // Init one arry make combine arr of both then loop through it and based on present push in new arr
}
// console.log(findUnion([1, 2, 3], [2, 3, 4]));

// ===============================
// 10. Find missing number in an array (1 to N)
// Example: arr = [1,2,4,5], N=5 → Output: 3
function findMissingNumber(arr, N) {
  // Write your code here

  //
  let checker = 1;
  for (let num of arr) {
    if (num !== checker) {
      return checker;
    }
    checker++;
  }
  return checker;
}

// console.log(findMissingNumber([1, 2, 3, 4, 6], 5));

// ===============================
// 11. Maximum Consecutive Ones
// Example: arr = [1,1,0,1,1,1] → Output: 3
function maxConsecutiveOnes(arr) {
  // Write your code here
  let n = arr.lenght;
  let max = 0;
  for (let num of arr) {
    if (num === 1) {
      max++;
    } else {
      max = 0;
    }
  }
  return max;
}
// console.log(maxConsecutiveOnes([1, 1, 0, 1, 1]));

// ===============================
// 12. Find the number that appears once, others twice
// Example: arr = [2,2,1] → Output: 1
function singleNumber(arr) {
  // Write your code here
  for (let num of arr) {
    const current = num;
    let count = 0;
    for (secondNum of arr) {
      if (secondNum === current) {
        count++;
      }
    }
    if (count === 1) {
      return current;
    }
  }
}
// console.log(singleNumber([2, 2, 1, 1, 3]));

// ===============================
// 13. Longest subarray with given sum K (positives)
// Example: arr=[1,2,3,1,1,1,1,4,2,3], K=3 → Output: 2
function longestSubarraySumKPos(arr, K) {
  // Write your code here
  let left = 0;
  let sum = 0;
  let maxLen = 0;
  for (let right = 0; right < arr.lenght; right++) {
    sum += arr[right];
    while (sum > K) {
      sum -= arr[left];
      left++;
    }

    if (sum === K) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }
  return maxLen;
}
// console.log(longestSubarraySumKPos([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3));

// ===============================
// 14. Longest subarray with sum K (Positives + Negatives)
// Example: arr=[1,-1,5,-2,3], K=3 → Output: 4
function longestSubarraySumK(arr, K) {
  // Write your code here

  let left = 0;
  let sum = 0;
  let maxLen = 0;
  for (let right = 0; right < arr.lenght; right++) {
    sum += arr[right];
    while (sum > K) {
      sum -= arr[left];
      left++;
    }
    if (sum === K) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }
  return maxLen;
}
// console.log(longestSubarraySumK([1, -1, 5, -2, 3], 3));

// ===============================
// 15. 2Sum Problem
// Example: arr=[2,7,11,15], target=9 → Output: [0,1]
function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const compliment = target - arr[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(num, i);
  }

  // Write your code here
}
// console.log(twoSum([2, 7, 11, 15], 9));

// ===============================
// 16. Sort an array of 0's 1's and 2's
// Example: arr=[0,2,1,2,0] → Output: [0,0,1,2,2]
function sort012(arr) {
  // Write your code here
  // Easy
}
console.log(sort012([0, 2, 1, 2, 0]));

// ===============================
// 17. Majority Element (> n/2 times)
// Example: arr=[3,3,4,2,3,3] → Output: 3
function majorityElement(arr) {
  // Write your code here
}
console.log(majorityElement([3, 3, 4, 2, 3, 3]));

// ===============================
// 18. Kadane's Algorithm (max subarray sum)
// Example: arr=[-2,1,-3,4,-1,2,1,-5,4] → Output: 6
function maxSubarraySum(arr) {
  // Write your code here
}
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// ===============================
// 19. Print subarray with maximum subarray sum
// Example: arr=[-2,1,-3,4,-1,2,1,-5,4] → Output: [4,-1,2,1]
function maxSubarray(arr) {
  // Write your code here
}
console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// ===============================
// 20. Stock Buy and Sell
// Example: arr=[7,1,5,3,6,4] → Output: 5
function maxProfit(arr) {
  // Write your code here
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// ===============================
// 21. Rearrange array in alternating positive and negative items
// Example: arr=[1,2,3,-4,-1,4] → Output: [1,-4,2,-1,3,4]
function rearrangePosNeg(arr) {
  // Write your code here
}
console.log(rearrangePosNeg([1, 2, 3, -4, -1, 4]));

// ===============================
// 22. Next Permutation
// Example: arr=[1,2,3] → Output: [1,3,2]
function nextPermutation(arr) {
  // Write your code here
}
console.log(nextPermutation([1, 2, 3]));

// ===============================
// 23. Leaders in an Array
// Example: arr=[16,17,4,3,5,2] → Output: [17,5,2]
function leaders(arr) {
  // Write your code here
}
console.log(leaders([16, 17, 4, 3, 5, 2]));

// ===============================
// 24. Longest Consecutive Sequence in an Array
// Example: arr=[100,4,200,1,3,2] → Output: 4
function longestConsecutive(arr) {
  // Write your code here
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// ===============================
// 25. Set Matrix Zeros
// Example: matrix=[[1,1,1],[1,0,1],[1,1,1]]
function setMatrixZeros(matrix) {
  // Write your code here
}
console.log(
  setMatrixZeros([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

// ===============================
// 26. Rotate Matrix by 90 degrees
// Example: matrix=[[1,2,3],[4,5,6],[7,8,9]] → Output: [[7,4,1],[8,5,2],[9,6,3]]
function rotateMatrix(matrix) {
  // Write your code here
}
console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// ===============================
// 27. Print the matrix in spiral order
// Example: [[1,2,3],[4,5,6],[7,8,9]] → Output: [1,2,3,6,9,8,7,4,5]
function spiralOrder(matrix) {
  // Write your code here
}
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// ===============================
// 28. Count subarrays with given sum
// Example: arr=[1,1,1], K=2 → Output: 2
function countSubarraysWithSum(arr, K) {
  // Write your code here
}
console.log(countSubarraysWithSum([1, 1, 1], 2));

// ===============================
// 29. Pascal's Triangle
// Example: numRows=5
function generatePascal(numRows) {
  // Write your code here
}
console.log(generatePascal(5));

// ===============================
// 30. Majority Element (n/3 times)
// Example: arr=[3,2,3] → Output: 3
function majorityElementNby3(arr) {
  // Write your code here
}
console.log(majorityElementNby3([3, 2, 3]));

// ===============================
// 31. 3-Sum Problem
// Example: arr=[-1,0,1,2,-1,-4] → Output: [[-1,-1,2],[-1,0,1]]
function threeSum(arr) {
  // Write your code here
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// ===============================
// 32. 4-Sum Problem
// Example: arr=[1,0,-1,0,-2,2], target=0
function fourSum(arr, target) {
  // Write your code here
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// ===============================
// 33. Largest Subarray with 0 Sum
// Example: arr=[15,-2,2,-8,1,7,10,23] → Output: 5
function largestZeroSumSubarray(arr) {
  // Write your code here
}
console.log(largestZeroSumSubarray([15, -2, 2, -8, 1, 7, 10, 23]));

// ===============================
// 34. Count subarrays with given xor K
// Example: arr=[4,2,2,6,4], K=6 → Output: 4
function countSubarraysXor(arr, K) {
  // Write your code here
}
console.log(countSubarraysXor([4, 2, 2, 6, 4], 6));

// ===============================
// 35. Merge Overlapping Subintervals
// Example: [[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]
function mergeIntervals(intervals) {
  // Write your code here
}
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

// ===============================
// 36. Merge two sorted arrays without extra space
// Example: arr1=[1,4,7,8,10], arr2=[2,3,9]
function mergeTwoSortedArrays(arr1, arr2) {
  // Write your code here
}
console.log(mergeTwoSortedArrays([1, 4, 7, 8, 10], [2, 3, 9]));

// ===============================
// 37. Find the repeating and missing number
// Example: arr=[3,1,2,5,3] → Output: [3,4]
function findRepeatingMissing(arr) {
  // Write your code here
}
console.log(findRepeatingMissing([3, 1, 2, 5, 3]));

// ===============================
// 38. Count Inversions
// Example: arr=[2,4,1,3,5] → Output: 3
function countInversions(arr) {
  // Write your code here
}
console.log(countInversions([2, 4, 1, 3, 5]));

// ===============================
// 39. Reverse Pairs
// Example: arr=[1,3,2,3,1] → Output: 2
function reversePairs(arr) {
  // Write your code here
}
console.log(reversePairs([1, 3, 2, 3, 1]));

// ===============================
// 40. Maximum Product Subarray
// Example: arr=[2,3,-2,4] → Output: 6
function maxProductSubarray(arr) {
  // Write your code here
}
console.log(maxProductSubarray([2, 3, -2, 4]));
